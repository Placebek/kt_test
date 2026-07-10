/* Необязательная функция «Спросить ИИ» — глубокое объяснение вопроса.
   Использует OpenRouter (совместимый с OpenAI формат) и КЛЮЧ ПОЛЬЗОВАТЕЛЯ,
   хранящийся локально. Работает только при доступе к сети и http(s)/CORS.
   Это дополнение: у каждого вопроса уже есть встроенное объяснение. */
(function (global) {
    "use strict";

    function hasKey() {
        return !!Store.settings.aiKey;
    }

    function buildPrompt(q, subjectTitle, focus) {
        var opts = q.options
            .map(function (o) {
                return o.letter + ") " + o.text + (o.code ? "\n" + o.code : "");
            })
            .join("\n");
        var correct = (q.correct || []).join(", ");
        return (
            "Ты преподаватель по теме «" +
            subjectTitle +
            "». Объясни студенту простыми словами, " +
            "на русском языке, кратко (4–7 предложений).\n\n" +
            "Вопрос: " +
            q.question +
            (q.questionCode ? "\n" + q.questionCode : "") +
            "\n\n" +
            "Варианты:\n" +
            opts +
            "\n\n" +
            "Правильный ответ: " +
            correct +
            ".\n\n" +
            "Объясни, ПОЧЕМУ правильный вариант верный и почему остальные — нет. " +
            "Если правильный ответ кажется спорным, отметь это. Все математические формулы пиши в TeX между \\( и \\), а отдельные формулы — между \\[ и \\]." + (focus ? "\n\nДополнительная цель: " + focus : "")
        );
    }

    async function explain(q, subjectTitle, focus) {
        var key = Store.settings.aiKey; // сюда вставляешь Groq ключ

        var resp = await fetch(
            "https://api.groq.com/openai/v1/chat/completions",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + key,
                },
                body: JSON.stringify({
                    model: "openai/gpt-oss-120b", // или llama-3.1-8b-instant для большего лимита
                    messages: [
                        { role: "user", content: buildPrompt(q, subjectTitle, focus) },
                    ],
                    temperature: 0.3,
                }),
            },
        );
        if (!resp.ok) {
            var t = await resp.text();
            throw new Error(
                "Ошибка API (" + resp.status + "): " + t.slice(0, 200),
            );
        }
        var data = await resp.json();
        return (
            (data.choices &&
                data.choices[0] &&
                data.choices[0].message.content) ||
            "Пустой ответ."
        );
    }

    global.AI = { hasKey: hasKey, explain: explain };
})(window);
