// Yb,     ________
// Y8baadP""""""""Yba,_
// aaadP"'             `""Yb,
// `Y8(                    `"Yb,
// `Y,                      `Yba,
//  Y,  (O)                   `Yba,
//  `Y,                          ""Yba,________,,aaddddbbbaa,,____,aa,_
//   `Y,       ,aa                   `""""""""""''          ``""""''  "Y,
//     Y,      d'8                                                "Ya   `Y,
//     `b      8 8                                                  `Y,   Y,
//      Ya o  ,8 8                                                    b   `b
//       Yb,_,dP 8                                                    Y    8
//        `""""  Y                                                    8    8
//               I,                                                   8    8
//               `b                                                   P    [
//                `b                                                 d'    [
//                 d                                                ,P     [
//               ,d'    ,PY,         ,P"YaaaaaaP"Ybaaa,,_           d'     [
//              d"    ,P"  Y,        d'           8'  `""db,       d'      8
//             d'   ,P"    `Y,       8            I,     d'"b,     8a      P
//            d(    (       `Y,      P            `b    ,P  `Y,    8`Ya___d'
//            "Y,   "b,      `Y,    ,I             8    d'   `8    8  `"""'
//              "Y,   "b,  __ `8,   d'            ,8   ,P     8    8
//                "Y,   "bd88b `b   8             I'   d'     Y,   8
//                  "Y,    888b 8   8             8   ,P      `b   8
//                    "Ya,,d888b8   P            d'  ,P'       8   Y,
//                       `"""",d"  ,I        ,adPb__aP'        Y   `b
//                         ,a8P,__aP'       d888888P'         ,d    8
//                        d8888888'         88888888       ,d888bbaaP
//                        88888888                         88888888'


let visitorMessage = "Welcome to my stables, weary traveller";
const LATE_PAYMENT_FEE = 25;
let numberOfFreeStalls = 10;

function horse(
    name,
    nickname,
    favoriteTreat,
    age,
    monthlyRent,
    isOutside,
    faveGame,
    coatColor,
    isHungry
) {
    this.name = name;
    this.nickname = nickname;
    this.favoriteTreat = favoriteTreat;
    this.age = age;
    this.monthlyRent = monthlyRent;
    this.isOutside = isOutside;
    this.faveGame = faveGame;
    this.coatColor = coatColor;
    this.isHungry = isHungry;
    this.introduction = function intro() {
        return `This is ${this.name}, their nickname is ${this.nickname}, and they are ${this.age} years old!`;
    };
    this.hobbies = function hobbies() {
        return `${this.name}'s favorite game is ${this.faveGame}`;
    };
    this.isOutsideChecker = function isOutsideCheck() {
        if (this.isOutside === true) {
            this.isOutside = false;
            return this.isOutside;
        } else if (this.isOutside !== true) {
            this.isOutside = true;
            return this.isOutside;
        }
    };
}

let horse1 = new horse(
    "Mike",
    "Mikeypoo",
    "Carrots",
    4,
    100,
    true,
    "Hockey",
    "black",
    true
);
let horse2 = new horse(
    "Harambe",
    "Monke",
    "Pizza",
    20,
    100,
    false,
    "Pickle Ball",
    "brown",
    false
);
let horse3 = new horse(
    "Eren",
    "YEAGER",
    "Titans",
    18,
    100,
    true,
    "Genocide",
    "white",
    true

);

let horses = [horse1, horse2, horse3];

let horse4 = {
    name: "Roronoa Zoro",
    nickname: "Moss Head",
    favoriteTreat: "Booze",
    age: 21,
    monthlyRent: 100,
    isOutside: true,
    faveGame: "Sword Fighting",
    coatColor: "green",
    isHungry: true,
    introduction: function intro() {
        console.log(
            `This is ${this.name}, their nickname is ${this.nickname}, and they are ${this.age} years old!`
        );
        this.hobbies = function hobbies() {
            console.log(`${this.name}'s favorite game is ${this.faveGame}`);
        };
    },
    isOutsideChecker: function isOutsideCheck() {
        if (this.isOutside === true) {
            this.isOutside = false;
            return this.isOutside;
        } else if (this.isOutside !== true) {
            this.isOutside = true;
            return this.isOutside;
        }
    },
};
horses.push(horse4);


// Horse {
//    name: 'Mike',
//    nickname: 'Mikeypoo',
//    favoriteTreat: 'Carrots',
//    age: 4,
//    monthlyRent: 100,
//    isOutside: true,
//    faveGame: 'Hockey',
//    coatColor: 'black',
//    isHungry: true,
//    introduction: [Function: intro],
//    hobbies: [Function: hobbies]
//  },
//  Horse {
//    name: 'Harambe',
//    nickname: 'Monke',
//    favoriteTreat: 'Pizza',
//    age: 20,
//    monthlyRent: 100,
//    isOutside: false,
//    faveGame: 'Pickle Ball',
//    coatColor: 'brown',
//    isHungry: false,
//    introduction: [Function: intro]
//  },
//  Horse {
//    name: 'Eren',
//    nickname: 'YEAGER',
//    favoriteTreat: 'Titans',
//    age: 18,
//    monthlyRent: 100,
//    isOutside: true,
//    faveGame: 'Genocide',
//    coatColor: 'white',
//    isHungry: true,
//    introduction: [Function: intro]
//  },
//  Horse {
//    name: 'Roronoa Zoro',
//    nickname: 'Moss Head',
//    favoriteTreat: 'Booze',
//    age: 21,
//    monthlyRent: 100,
//    isOutside: true,
//    faveGame: 'Sword fighting',
//    coatColor: 'green',
//    isHungry: true,
//    introduction: [Function: intro]

numberOfFreeStalls = numberOfFreeStalls - horses.length;


if (numberOfFreeStalls < 2) {
    console.log("We need to build more stalls");
} else {
    console.log(`We have ${numberOfFreeStalls} stalls available!`);
}

let TOTAL_LATE_FEE_OWED = horses[1].monthlyRent + LATE_PAYMENT_FEE;

function horseLateFee(whichHorse) {
    console.log(
        `${horses[whichHorse].name} rent is late. Due to this you will be charged $${TOTAL_LATE_FEE_OWED}`
    );
};
horseLateFee(1);

for (let i = 0; i < horses.length; i++) {
    if (horses[i].favoriteTreat !== "Booze") {
        console.log(`${horses[i].name} hates booze!`);
    } else {
        console.log(`${horses[i].name} loves booze!`);
        break;
    }
}

function grabHorseNickname(horse) {
    return horses[horse].nickname;
}

console.log(`${horses[1].name}'s nickname is ${grabHorseNickname([1])}!!`);

function horseHungerStatus(horse) {
    if (horses[horse].ishungry === true) {
        console.log(`${horses[horse].name} is feeling peckish`);
    } else console.log(`${horses[horse].name} is full!`);
}

horseHungerStatus(3);

function dailyRoutine() {
    for (let i = 0; i < horses.length; i++) {
        if (horses[i].isOutside === true) {
            horses[i].isOutside = false;
            console.log(`${horses[i].nickname} come outside. You need some sun!`);
            horses[i].isOutside = true;
        } else if (horses[i].isOutside === false) {
            console.log(`${horses[i].nickname} come outside. You need some sun!`);
            horses[i].isOutside = true;
        }
        }

console.log(`~~~The sun is setting~~~`)

        for (let i = 0; i < horses.length; i++) {
            if (horses[i].isOutside === true) {
                console.log(`It's dark out. ${horses[i].nickname} come inside, time for bed.`);
                horses[i].isOutside = false;
            } 
        }
    }
dailyRoutine();
//I know this is pretty roundabout way of getting them to come outside/inside, but having them all move gave me peace of mind since it logs what 

function treatTime() {
    for (let i = 0; i < horses.length; i++) {
        if (horses[i].isOutside === true) {
            horses[i].isOutside = false
            console.log(`${horses[i].nickname} Time to chow down`)
        } else {
            console.log(`${horses[i].nickname} Time to chow down`)
        }
    }
}

treatTime()
