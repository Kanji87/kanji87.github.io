var data = (function () {
'use strict';

const gameData = {
  "stats": [{
    "lifeCount": 1,
    "minutesCount": 4,
    "secondsCount": 45,
    "level": 10,
    "points": 12,
    "answerCount": 0,
    "fastAnswerCount": 8,
    "date": 1526550143713
  }, {
    "lifeCount": 2,
    "minutesCount": 4,
    "secondsCount": `00`,
    "level": 10,
    "points": 15,
    "answerCount": 0,
    "fastAnswerCount": 8,
    "date": 1526628000658
  }, {
    "lifeCount": 1,
    "minutesCount": 4,
    "secondsCount": 26,
    "level": 10,
    "points": 11,
    "answerCount": 0,
    "fastAnswerCount": 7,
    "date": 1526628046173
  }, {
    "lifeCount": 1,
    "minutesCount": 3,
    "secondsCount": 32,
    "level": 10,
    "points": 11,
    "answerCount": 0,
    "fastAnswerCount": 7,
    "date": 1526628156335
  }, {
    "lifeCount": 3,
    "minutesCount": 4,
    "secondsCount": 49,
    "level": 10,
    "points": 20,
    "answerCount": 0,
    "fastAnswerCount": 10,
    "date": 1526628195714
  }, {
    "lifeCount": 2,
    "minutesCount": 4,
    "secondsCount": 54,
    "level": 10,
    "points": 16,
    "answerCount": 0,
    "fastAnswerCount": 9,
    "date": 1526628211839
  }],
  "questions": [{
    "type": `artist`,
    "question": `Кто исполняет эту песню?`,
    "src": `https://freemusicarchive.org/music/listen/fdf1d65ec2bb5a6112228613aefc79382d3a993e`,
    "answers": [{
      "image": {
        "url": `https://freemusicarchive.org/file/images/artists/Black_Math_-_20100122151057551.jpg?width=300&height=300`,
        "width": 300,
        "height": 300
      },
      "title": `Black Math`,
      "isCorrect": true
    }, {
      "image": {
        "url": `https://freemusicarchive.org/file/images/artists/Black_Ant_-_20100815203310658.png?width=300&height=300`,
        "width": 300,
        "height": 300
      },
      "title": `Black Ant`,
      "isCorrect": false
    }, {
      "image": {
        "url": `https://freemusicarchive.org/file/images/artists/Kevin_MacLeod_-_20110715150335323.png?width=300&height=300`,
        "width": 300,
        "height": 300
      },
      "title": `Kevin MacLeod`,
      "isCorrect": false
    }]
  }, {
    "type": `artist`,
    "question": `Кто исполняет эту песню?`,
    "src": `https://freemusicarchive.org/music/listen/46d5fd9d4ecfd75f0fd7e43decffbef78bc85169`,
    "answers": [{
      "image": {
        "url": `https://freemusicarchive.org/file/images/artists/Tours_-_20120822132441990.png?width=300&height=300`,
        "width": 300,
        "height": 300
      },
      "title": `Tours`,
      "isCorrect": true
    }, {
      "image": {
        "url": `https://freemusicarchive.org/file/images/artists/Quantum_Jazz_-_20120509113401114.jpg?width=300&height=300`,
        "width": 300,
        "height": 300
      },
      "title": `Quantum Jazz`,
      "isCorrect": false
    }, {
      "image": {
        "url": `https://freemusicarchive.org/file/images/artists/Stephan_Siebert_-_20160712113333691.jpg?width=300&height=300`,
        "width": 300,
        "height": 300
      },
      "title": `Stephan Siebert`,
      "isCorrect": false
    }]
  }, {
    "type": `genre`,
    "question": `Выберите все электрические песни`,
    "genre": `electronic`,
    "answers": [{
      "src": `https://freemusicarchive.org/music/listen/c86947d494e359fef9a7a27077494f7d7709f963`,
      "genre": `electronic`
    }, {
      "src": `https://freemusicarchive.org/music/listen/fdf1d65ec2bb5a6112228613aefc79382d3a993e`,
      "genre": `rock`
    }, {
      "src": `https://freemusicarchive.org/music/listen/3d9d618bd8e049df221143be059cf4910310e5b7`,
      "genre": `hip-hop`
    }, {
      "src": `https://freemusicarchive.org/music/listen/69d51e9f2db20c422e2ef437a71bff29f590d08d`,
      "genre": `classical`
    }]
  }, {
    "type": `artist`,
    "question": `Кто исполняет эту песню?`,
    "src": `https://freemusicarchive.org/music/listen/a516e82844b87d2f359bdb40c4f6752622d55dc8`,
    "answers": [{
      "image": {
        "url": `https://freemusicarchive.org/file/images/artists/Waylon_Thornton_-_2012061793125465.jpg?width=300&height=300`,
        "width": 300,
        "height": 300
      },
      "title": `Waylon Thornton`,
      "isCorrect": true
    }, {
      "image": {
        "url": `https://freemusicarchive.org/file/images/artists/Comfort_Fit_-_20091216190305442.jpg?width=300&height=300`,
        "width": 300,
        "height": 300
      },
      "title": `Comfort Fit`,
      "isCorrect": false
    }, {
      "image": {
        "url": `https://freemusicarchive.org/file/images/artists/Black_Ant_-_20100815203310658.png?width=300&height=300`,
        "width": 300,
        "height": 300
      },
      "title": `Black Ant`,
      "isCorrect": false
    }]
  }, {
    "type": `genre`,
    "question": `Выберите все фолковые песни`,
    "genre": `folk`,
    "answers": [{
      "src": `https://freemusicarchive.org/music/listen/7efd792f96e739e459d6e7588d97bf684569836e`,
      "genre": `folk`
    }, {
      "src": `https://freemusicarchive.org/music/listen/a516e82844b87d2f359bdb40c4f6752622d55dc8`,
      "genre": `pop`
    }, {
      "src": `https://freemusicarchive.org/music/listen/c86947d494e359fef9a7a27077494f7d7709f963`,
      "genre": `electronic`
    }, {
      "src": `https://freemusicarchive.org/music/listen/57e1dffcf853564589c844093817f764d22f9b4e`,
      "genre": `folk`
    }]
  }, {
    "type": `genre`,
    "question": `Выберите все фолковые песни`,
    "genre": `folk`,
    "answers": [{
      "src": `https://freemusicarchive.org/music/listen/ccb4ba12f2a733d602477dfda3526d4e1350140c`,
      "genre": `rock`
    }, {
      "src": `https://freemusicarchive.org/music/listen/caaf4f0cc9b65d9d0a72d6729bdf60a9ab8d0234`,
      "genre": `folk`
    }, {
      "src": `https://freemusicarchive.org/music/listen/524255a73d3bb70cd4b5a5830eda003ebc766a65`,
      "genre": `jazz`
    }, {
      "src": `https://freemusicarchive.org/music/listen/57e1dffcf853564589c844093817f764d22f9b4e`,
      "genre": `folk`
    }]
  }, {
    "type": `artist`,
    "question": `Кто исполняет эту песню?`,
    "src": `https://freemusicarchive.org/music/listen/c62cee2f3849bdfb0f217a520eba306c3c7aca1e`,
    "answers": [{
      "image": {
        "url": `https://freemusicarchive.org/file/images/artists/Black_Ant_-_20100815203310658.png?width=300&height=300`,
        "width": 300,
        "height": 300
      },
      "title": `Black Ant`,
      "isCorrect": true
    }, {
      "image": {
        "url": `https://freemusicarchive.org/file/images/artists/Comfort_Fit_-_20091216190305442.jpg?width=300&height=300`,
        "width": 300,
        "height": 300
      },
      "title": `Comfort Fit`,
      "isCorrect": false
    }, {
      "image": {
        "url": `https://freemusicarchive.org/file/images/albums/Gillicuddy_-_Plays_Guitar_Again_-_20170725110900215.jpg?width=290&height=290`,
        "width": 290,
        "height": 290
      },
      "title": `Gillicuddy`,
      "isCorrect": false
    }]
  }, {
    "type": `artist`,
    "question": `Кто исполняет эту песню?`,
    "src": `https://freemusicarchive.org/music/listen/57e1dffcf853564589c844093817f764d22f9b4e`,
    "answers": [{
      "image": {
        "url": `https://freemusicarchive.org/file/images/artists/Paper_Navy_-_20120226181728099.jpg?width=300&height=300`,
        "width": 300,
        "height": 300
      },
      "title": `Paper Navy`,
      "isCorrect": true
    }, {
      "image": {
        "url": `https://freemusicarchive.org/file/images/albums/Gillicuddy_-_Plays_Guitar_Again_-_20170725110900215.jpg?width=290&height=290`,
        "width": 290,
        "height": 290
      },
      "title": `Gillicuddy`,
      "isCorrect": false
    }, {
      "image": {
        "url": `https://freemusicarchive.org/file/images/artists/Black_Ant_-_20100815203310658.png?width=300&height=300`,
        "width": 300,
        "height": 300
      },
      "title": `Black Ant`,
      "isCorrect": false
    }]
  }, {
    "type": `artist`,
    "question": `Кто исполняет эту песню?`,
    "src": `https://freemusicarchive.org/music/listen/7efd792f96e739e459d6e7588d97bf684569836e`,
    "answers": [{
      "image": {
        "url": `https://freemusicarchive.org/file/images/artists/Jahzzar_-_20160323124322227.jpg?width=300&height=300`,
        "width": 300,
        "height": 300
      },
      "title": `Jahzzar`,
      "isCorrect": false
    }, {
      "image": {
        "url": `https://freemusicarchive.org/file/images/artists/Michael_Chapman__The_Woodpiles_-_2012081323009192.jpg?width=290&height=290`,
        "width": 300,
        "height": 300
      },
      "title": `Michael Chapman & The Woodpiles`,
      "isCorrect": true
    }, {
      "image": {
        "url": `https://freemusicarchive.org/file/images/artists/Paper_Navy_-_20120226181728099.jpg?width=300&height=300`,
        "width": 300,
        "height": 300
      },
      "title": `Paper Navy`,
      "isCorrect": false
    }]
  }, {
    "type": `genre`,
    "question": `Выберите все фолковые песни`,
    "genre": `folk`,
    "answers": [{
      "src": `https://freemusicarchive.org/music/listen/69d51e9f2db20c422e2ef437a71bff29f590d08d`,
      "genre": `classical`
    }, {
      "src": `https://freemusicarchive.org/music/listen/74db98f738850f46875b1a7e797ec6edfd963086`,
      "genre": `jazz`
    }, {
      "src": `https://freemusicarchive.org/music/listen/caaf4f0cc9b65d9d0a72d6729bdf60a9ab8d0234`,
      "genre": `folk`
    }, {
      "src": `https://freemusicarchive.org/music/listen/46d5fd9d4ecfd75f0fd7e43decffbef78bc85169`,
      "genre": `electronic`
    }]
  }]
};

return gameData;

}());

//# sourceMappingURL=data.js.map
