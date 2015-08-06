// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Кто ты в стране наук?",
        "main":    "<p>Даже на самые странные вопросы Алисы и на самые абсурдные вещи, происходившие с ней, можно ответить с точки зрения науки — достаточно разбираться в ней. Оцените свои знания, проверьте, до какого уровня сложности вы сумеете добраться — и кем достойны стать в Стране Наук.</p>"
        // "results": "<h5>Learn More</h5><p>Etiam scelerisque, nunc ac egestas consequat, odio nibh euismod nulla, eget auctor orci nibh vel nisi. Aliquam erat volutpat. Mauris vel neque sit amet nunc gravida congue sed sit amet purus.</p>"
        // "level1":  "Jeopardy Ready",
        // "level2":  "Jeopardy Contender",
        // "level3":  "Jeopardy Amateur",
        // "level4":  "Jeopardy Newb",
        // "level5":  "Stay in school, kid..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "<img class='test-progress' src='img/alice/test_progress1.png'><p class='test-question-quote'>«— Интересно, сколько миль я пролетела? — сказала Алиса вслух. — Я, верно, приближаюсь к центру Земли. Дайте-ка вспомнить...»</p><p class='test-question'>В самом деле, сколько километров придется пролететь, чтобы с поверхности Земли добраться до ее центра? Выберите самое близкое число.</p>",
            "a": [
                {"option": "1000",      "correct": false},
                {"option": "6000",     "correct": true},
                {"option": "12000",      "correct": false},
                {"option": "18000",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Верно!</span></p>",
            "incorrect": "<p><span>Неправильно.</span></p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Single True Answer
            "q": "<img class='test-progress' src='img/alice/test_progress2.png'><p class='test-question-quote'>«— Вспомнила, — воскликнула вдруг Алиса... — Горчица — это овощ. Правда, на овощ она не похожа — и все-таки это овощ!»</p><p class='test-question'>Горчица, конечно, не овощ, но что–то такое в ней все–таки есть. Какому овощу она приходится близким родственником?</p>",
            "a": [
                {"option": "Морковь",      "correct": false},
                {"option": "Капуста",     "correct": true},
                {"option": "Сельдерей",      "correct": false},
                {"option": "Помидор",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Верно!</span></p>",
            "incorrect": "<p><span>Неправильно.</span></p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Single True Answer
            "q": "<img class='test-progress' src='img/alice/test_progress3.png'><p class='test-question-quote'>«— Какая медлительная страна! — вскричала Королева. — Ну а здесь, знаешь ли, приходится бежать со всех ног, чтобы только остаться на том же месте.»</p><p class='test-question'>Эффектный образ бесконечного бега используется и в науке. А в какой области находит применение «Принцип Черной Королевы»?</p>",
            "a": [
                {"option": "Теория относительности",      "correct": false},
                {"option": "Стандартная<br>модель",      "correct": false},
                {"option": "Эволюционизм",     "correct": true},
                {"option": "Теория игр",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Верно!</span></p>",
            "incorrect": "<p><span>Неправильно.</span></p>" // no comma here
        },
        { // Question 4 - Multiple Choice, Single True Answer
            "q": "<img class='test-progress' src='img/alice/test_progress4.png'><p class='test-question-quote'>«— Ну, как, Китти, хочешь жить в Зазеркальном доме? Интересно,  дадут тебе там молока? Впрочем, не знаю, можно ли пить зазеркальное молоко?»</p><p class='test-question'>Сомнения Алисы справедливы: многие соединения в составе молока асимметричны и после отражения перейдут в изомеры, употреблять которые не рекомендуется. Какие из этих веществ не имеют зеркальных изомеров?</p>",
            "a": [
                {"option": "Углеводы",      "correct": false},
                {"option": "Белки",     "correct": false},
                {"option": "Жиры",      "correct": true},
                {"option": "Есть у всех",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Верно!</span></p>",
            "incorrect": "<p><span>Неправильно.</span></p>" // no comma here
        },
        { // Question 5 - Multiple Choice, Single True Answer
            "q": "<img class='test-progress' src='img/alice/test_progress5.png'><p class='test-question-quote'>«Лучше проверю–ка я, все я знаю, что знаю, или не все. Ну–ка: четырежды пять – двенадцать, четырежды шесть – тринадцать, четырежды семь...»</p><p class='test-question'>Забавные расчеты Алисы будут совершенно верны, если использовать разные системы счисления. В какой из них выполняется первое равенство, 4 х 5 = 12?</p>",
            "a": [
                {"option": "Двоичная",      "correct": false},
                {"option": "Двенадцатеричная",     "correct": false},
                {"option": "Шестнадцатеричная",      "correct": false},
                {"option": "Восемнадцатеричная",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Верно!</span></p>",
            "incorrect": "<p><span>Неправильно.</span></p>" // no comma here
        } // no comma here
    ]
};
