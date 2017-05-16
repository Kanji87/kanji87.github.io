$(function () {
    var usedArray = new Array(76);
    // var baseArray = new Array(0,0,0,0,0,1,1,1,1,1,2,2,2,2,3,3,3,3,3,4,4,4,4,4);
    var baseArray = new Array(0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3);
    var number = 0;
    var base = 0;
    var wordArray = [
        '',
        'crucible',
        'new<br>experience',
        'vault',
        'traveler',
        'ghost',
        'great job',
        'deej out',
        'gjallarhorn',
        'last city',
        'hive',
        'ghery',
        'community',
        '13',
        '14',
        '15',
        '16'
    ];

    init();

    function init() {
        for (var i = 0; i < 16; i++) {
            fillCard(i);
        }
    }

    function fillCard(i) {
        // base = baseArray[i] * 12;
        // number = base + Math.floor(Math.random() * 12) + 1;
        number = Math.floor(Math.random() * 16) + 1;


        if (usedArray[number] != true) {
            var text = wordArray[number];
            $('#cell').attr('id', '#cell' + number).html(text);
            usedArray[number] = true;
        } else {
            fillCard(i);
        }
    }

    function resetUsedNumbersArray() {
        for (var j = 0; j < usedArray.length; j++) {
            usedArray[j] = false;
        }
    }


    $('.js-get-new-ticket').click(function (e) {
        e.preventDefault();
        $('.bingo__col span').attr('id', 'cell');
        $('.bingo__col').removeClass('bingo__col--active');
        resetUsedNumbersArray();
        init();
    });

    $('.bingo__col').click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).toggleClass('bingo__col--active');
    });

});
