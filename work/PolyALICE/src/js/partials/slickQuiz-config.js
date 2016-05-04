// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Роршах или Уорхол?",
        "main":    "<p>Проективная методика исследования личности, предложенная Германом Роршахом в 1921 г., требует использования 10-ти стандартных таблиц с бесформенными симметричными изображениями. Эта десятка «пятен» вдохновляет не только психологов, но и художников. Звезда поп-арта Энди Уорхол создал целую серию работ, которые не так просто отличить от творений Роршаха. Получится ли это у вас?</p>"
        // "results": "<h5>Learn More</h5><p>Etiam scelerisque, nunc ac egestas consequat, odio nibh euismod nulla, eget auctor orci nibh vel nisi. Aliquam erat volutpat. Mauris vel neque sit amet nunc gravida congue sed sit amet purus.</p>"
        // "level1":  "Jeopardy Ready",
        // "level2":  "Jeopardy Contender",
        // "level3":  "Jeopardy Amateur",
        // "level4":  "Jeopardy Newb",
        // "level5":  "Stay in school, kid..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Назовите автора: <img class='question-img' src='img/ror1.jpg'>",
            "a": [
                {"option": "Уорхол",      "correct": false},
                {"option": "Роршах",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Верно!</span></p>",
            "incorrect": "<p><span>Неправильно.</span></p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Назовите автора: <img class='question-img' src='img/ror2.jpg'>",
            "a": [
                {"option": "Уорхол",      "correct": false},
                {"option": "Роршах",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Верно!</span></p>",
            "incorrect": "<p><span>Неправильно.</span></p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Назовите автора: <img class='question-img' src='img/ror3.jpg'>",
            "a": [
                {"option": "Уорхол",      "correct": false},
                {"option": "Роршах",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Верно!</span></p>",
            "incorrect": "<p><span>Неправильно.</span></p>" // no comma here
        },
        { // Question 4
            "q": "Назовите автора: <img class='question-img' src='img/ror4.jpg'>",
            "a": [
                {"option": "Уорхол",      "correct": false},
                {"option": "Роршах",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Верно!</span></p>",
            "incorrect": "<p><span>Неправильно.</span></p>" // no comma here
        },
        { // Question 5
            "q": "Назовите автора: <img class='question-img' src='img/ror5.jpg'>",
            "a": [
                {"option": "Уорхол",      "correct": false},
                {"option": "Роршах",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Верно!</span></p>",
            "incorrect": "<p><span>Неправильно.</span></p>" // no comma here
        },
        { // Question 6
            "q": "Назовите автора: <img class='question-img' src='img/uor1.jpg'>",
            "a": [
                {"option": "Уорхол",      "correct": true},
                {"option": "Роршах",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Верно!</span></p>",
            "incorrect": "<p><span>Неправильно.</span></p>" // no comma here
        },
        { // Question 7
            "q": "Назовите автора: <img class='question-img' src='img/uor2.jpg'>",
            "a": [
                {"option": "Уорхол",      "correct": true},
                {"option": "Роршах",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Верно!</span></p>",
            "incorrect": "<p><span>Неправильно.</span></p>" // no comma here
        },
        { // Question 8
            "q": "Назовите автора: <img class='question-img' src='img/uor3.jpg'>",
            "a": [
                {"option": "Уорхол",      "correct": true},
                {"option": "Роршах",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Верно!</span></p>",
            "incorrect": "<p><span>Неправильно.</span></p>" // no comma here
        },
        { // Question 9
            "q": "Назовите автора: <img class='question-img' src='img/uor4.jpg'>",
            "a": [
                {"option": "Уорхол",      "correct": true},
                {"option": "Роршах",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Верно!</span></p>",
            "incorrect": "<p><span>Неправильно.</span></p>" // no comma here
        },
        { // Question 10
            "q": "Назовите автора: <img class='question-img' src='img/uor5.jpg'>",
            "a": [
                {"option": "Уорхол",      "correct": true},
                {"option": "Роршах",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Верно!</span></p>",
            "incorrect": "<p><span>Неправильно.</span></p>" // no comma here
        } // no comma here
    ]
};
