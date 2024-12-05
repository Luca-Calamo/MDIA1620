//New stables
// Welcome!
//
//                                                  #    #
//                                             %%% ##   ##
//                                          %%%%% ###%🎀###
//                                         %%%%% ### %%% #
//                                       %%%%%% ### %%% ###
//                                        %%%% ## %% #######
//                                       %%%%% # %% #@#####
//                                     %%%%%% # % #########
//                                    %%%%% ##### #########
//                          ###        %% ####### #########
//                 %%% ############    ########### ########
//              %%%% ############################### #######
//            %%%%% ################################## ######
//          %%%%%% #################################### #C###
//         %%%🌸%% #####################################  ###
//         %%%%% #######################################
//        %%%%%% ############### BEANS ##################
//     % %%%%%%% ############### BEANS ##################
//      %%%%%%%%% ############## BEANS ##################
//     %%%%%%%%%% ########################################
//  %%% %%%%%%%%   ###### ################################
//    %%%%%%%%      ###### #################### ##########
// % %%%🌸%%%%        ####### ########### ###### ##########
//  %%%%%%%%%         #######  ########### ###### ########
// %%%%%%%%%%          ##### ###  ######### ####### ######
//  %%%%%%%%%%          #### ##               ####### ####
//  %🌸%%%%%%%%%           ## #                  ##### ###
//   %%  %% % %%         # ##                      ## ###
//     %   %    %        # ###                      # ###
//                        # ###                     ## ###
//                        # ###                     ## ###
//                        # ####                   #### ##
//                       ### ###                  ##### ###
//                      ####  ###                 ####   ##
//                     #####   ###                 ##    ##
//                    #####    ####                      ###
//                     ##        ###                     ###
//                                ####                     ##
//                                 ####                    ###
//                                                         ####
//                                                          ##
//
// This is a template for the final project. You'll be setting up a stable and making
// sure it runs smoothly.
//
// You can copy and paste this into your stables.js file, and then use it to guide you.
// Please do not create a new file!
// Feel free to keep the headings (e.g.: "Variables"), but please delete any boilerplate
// comments. (Your own comments, where necessary, are acceptable.)
//
// NOTE: UNLESS SPECIFIED, VARIABLE NAMING IS UP TO YOU. THERE SHOULD BE NO HARD-CODED
// NUMBERS OR STRINGS WHERE VARIBALES WOULD BE PREFERRED.

//------------------------- Seting up shop -------------------------//

// Initialize a variable called "horses" that will store the horses in your stable.
// Create a variable and use it to store a message visitors to the stable.
// Create a variable and use it to store the cost of a late payment fee.
// Create a variable and use it to store the number of available stalls in the stable.

//------------------------- First day -------------------------//

// Using a constructor, add at least 3 horses to your stables.
//
// The horse should have the following properties:
// - name, nickname, favorite treat (string)
// - age, monthly rent (number)
// - location (boolean inside/outside)
// - two unique properties of your choice (use any primitive)
// - a method that introduces your horse and references at least 3 object properties.
// - a second, unique method of your choice

// Store the horses you've just created in your "horses" variable.

// Fancy! Another horse wants to be stabled! Create a variable that stores an object
// literal of your new horse, and add it to your "horses" variable.

// Initialize new property to your horses: a boolean that allows you to check if your horse
// is hungry or not. Use dot notation.

//------------------------- Stable roster -------------------------//

// We want to keep track of our horses and how they are doing. Paste the data structure
// of our horse variable below so we can reference it. It is okay to comment it out.

//---------------------- Growing business ----------------------//

// We've added some horses! Re-assign the variable that contains the number of available stalls.
// Use the math operator to determine how many stables you should have left, given the number of
// horses you've added.

// Express the following in code: If the variable that contains your remaining stalls
// is less than 2, log out "We need to build more stalls", otherwise log out "We have
// [number of stalls] available!"

// Create a function that logs out how much will an individual horse will owe if rent is
// paid late. Invoke the function.

// Add loop that checks to find out if a certain horse likes a treat. If the horse does not like
// the treat, log out their disatisfaction and check the next horse. Exit the loop when you find
// the horse that likes the treat.

// Create and invoke a function that returns (not logs) the nickname of a chosen horse. Log out
// the return value outside of the function.

//------------------------- Day to day operations -------------------------//

// Create and invoke a function references one of your unique horse properties. It should
// contain a conditional or a loop.

// Morning! Create and invoke a function that moves all your horses outside. It should
// log out statement indicating the horses have been moved to spend time in the sun.

// Initialize a method on your horses that moves them inside if they are outside, and
// vice versa.

// Food! Create and invoke a function that feeds your horses. If the horse is outside, it
// should call them in, and then all horses should be fed a treat. Log the activity of
// the horses.

// Bedtime! Update the function that lets your horses outside so that it also calls them
// in if it is getting dark. Only the horses that moved should log out a message. Invoke the function.

//------------------------- Bonus -------------------------//

// Replace the ascii art at the top of the file with art representing your stable.




let visitorMessage = "Welcome to my stables, weary traveller";
const LATE_PAYMENT_FEE = 25;
let numberOfFreeStalls = 10;


function horse(name, nickname, favoriteTreat, age, monthlyRent, isOutside, faveGame, coatColor, isHungry) {
    this.name = name;
    this.nickname = nickname;
    this.favoriteTreat = favoriteTreat;
    this.age = age;
    this.monthlyRent = monthlyRent;
    this.isOutside = isOutside;
    this.faveGame = faveGame;
    this.coatColor = coatColor;
    this.isHungry = isHungry
    this.introduction = function intro() {
        console.log(`This is ${this.name}, their nickname is ${this.nickname}, and they are ${this.age} years old!`);
        this.hobbies = function hobbies() {
            console.log(`${this.name}'s favorite game is ${this.faveGame}`)
        }

    };
}


const horse1 = new horse("Mike", "Mikeypoo", "Carrots", 4, 100, true, "Hockey", "black", true);
const horse2 = new horse("Harambe", "Monke", "Pizza", 20, 100, false, "Pickle Ball", "brown", false);
const horse3 = new horse("Eren", "YEAGER", "Titans", 18, 100, true, "Genocide", "white", true);

console.log(horse1.introduction());
console.log(horse1.hobbies());

let horses = [horse1, horse2, horse3];

// let horse4 = new Horse("Roronoa Zoro", "Moss Head", "Booze", 21, 100, true, "Sword fighting", "green", true)
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
        console.log(`This is ${this.name}, their nickname is ${this.nickname}, and they are ${this.age} years old!`);
        this.hobbies = function hobbies() {
            console.log(`${this.name}'s favorite game is ${this.faveGame}`);
        };

    }
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
console.log(numberOfFreeStalls)

if (numberOfFreeStalls < 2) {
    console.log("We need to build more stalls")
} else {
    console.log(`We have ${numberOfFreeStalls} stalls available!`)
};

const TOTAL_LATE_FEE_OWED = horse1.monthlyRent + LATE_PAYMENT_FEE;


function horseLateFee(whichHorse) {
    console.log(`${horses[whichHorse].name} rent is late. Due to this you will be charged $${TOTAL_LATE_FEE_OWED}`)
};
horseLateFee(3);

for (let i = 0; i < horses.length; i++) {

    if (horses[i].favoriteTreat == "Booze") {
        return console.log(`${horses[i].name} loves booze!`);
    }
    console.log(`${horses[i].name} hates booze!`);

}

function grabHorseNickname(horse) {
    return horses[horse].nickname
}

console.log(`${horses[1].name}'s nickname is${grabHorseNickname[1]}`)

// let horseNicknames = grabHorseNickname


// Create and invoke a function that returns (not logs) the nickname of a chosen horse. Log out
// the return value outside of the function.






















//constructor
// function Horse(name, nickname, faveSnack, monthlyRent, isInside, age, color) {
//    this.name = name;
//    this.nickname = nickname;
//    this.faveSnack = faveSnack;
//    this.monthlyRent =  monthlyRent;
//    this.isInside = isInside;
//    this.age = age;
//    this.color = color;
//    this.introduction = function intro() {
//       console.log(`This is ${this.name}, their nickname is ${this.nickname}!`);
//    };

//    this.rentNotice = function rent(daysUnitlDue) {
//       console.log(`${this.name}'s rent is due in ${daysUnitlDue}, abd is $${this.monthlyRent}! Please pay promply!`)
//    };
// }

// let tim = new Horse("tim", "Shortcake", 100, true, 15, "Blue");
// let Mike = new Horse("Mike", "Peter", "Coconut", 100, true, 12, "Red");
// console.log(Mike)

//Week 11//

// /*for (let i = 0; i < 10; i++) {
//    console.log(i);
// }

// let treats = ["carrots", "beans", "strawberries"];

// for (let i = 0; i < treats.length; i++) {
//    console.log("Come to the stables! I have some " + treats[i] + "!");

// }
//  */

// let horses = [
//    {
//       name: "Strawberry",
//       faveTreat: "carrots",
//       isInside: true,
//    },
//    {
//       name: "Beans",
//       faveTreat: "beans",
//       isInside: false,
//    },
//    {
//       name: "Charlie",
//       faveTreat: "strawberries",
//       isInside: true,
//    },
// ];

// for(let i = 0; i < horses.length; i++) {
//    let horse = horses[i];
//    let horseName = horse["name"];
//    let favorite = horse["faveTreat"];
//    let likesBeans = favorite === "beans";
   

//       if (likesBeans) {
//          return console.log(horseName + " loves beans!");
//       }
//       console.log(horseName + " dosent like Beans, keep checking!");
// }
//IDK why it keeps printing as undefined. Validator says I have an issue with the let "Line 1, Column 1: 'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz)"

//for (let i = 0; i < horses.length; i++)


/*
let horseName = "Coolguy" // this is a string, perfer-always use double quotes
horseName = "Supreme Leader" ;
let horseAge = 2000;
console.log(horseName) ;
console.log(horseAge);
let isHorseInStable = true; 
console.log(isHorseInStable);
 isHorseInStable = false, true;
let horsenickname = "Mr. President";
console.log(horsenickname);;
const STABLES_MONTHLY_FEE = 500;
console.log(STABLES_MONTHLY_FEE)

// LESSON 6 CODE
//let word = "Rainbow";
//console.log(word.charAt(0));
//horse = ["name", age, isInside, horsenickname]
let horseOne = [horseName, horseAge, isHorseInStable, horsenickname];
let horseTwo = ["Suprme Leader", 2000, false, "Mr. President"];
let areHorsesInside = [isHorseInStable, false];
let horseNames = [horseName, "Doran", "Mikeypoo"];
let horseStatus = `All ${horseNames.length} horses are currently outside frolicking at a Diddy party🎉🎉`;
let horseAges = [2000, 13, 75]
let horseNicknames = [horseName, "Luden", "Captian EA"]

console.log(horseNicknames)
console.log(horseAges);
console.log(horseTwo);
console.log(horseOne[0] + "'s nickname is " + horseTwo[3]);
console.log(horseOne.length)
horseOne.push("Purple");
console.log(horseOne);
//console.log(`${horseTwo[0]'s nickname is ${horseTwo[3]}`)
console.log(horseOne[1] + horseTwo[1]);
if (horseOne[1] === 4000) {
   console.log(horseOne[0] + " is4000");
} else {
   console.log(horseOne[0] + " is not 4000");
}

let horseIntro = `There are ${horseNames.length} horses are staying at my stables: ${horseNames[0]}, ${horseNames[1]}, ${horseNames[2]}!`;
console.log(horseIntro)

if (isHorseInStable) {
   console.log(" Are currently inside");
} else {
   console.log(horseStatus);
}


//LESSON 7 CODE

function loghorseAges(horse) {
   console.log(horseNames[horse] + " is " + horseAges[horse] + "!");
}
 loghorseAges(1)

 function loghorseNicknames(horse, friend) {
   const string = `${horseNames[horse]}'s nickname is ${horseNicknames[horse]} and his friend ${horseNames[friend]}'s nickname is ${horseNicknames[friend]}`;
   console.log(string);
 }

 loghorseNicknames(2, 1);

let templateLiteralFriends = `${horseNames[0]} and ${horseNames[1]} are the best of friends!`;
console.log(templateLiteralFriends)

function payMe(rent, discount) {
   if (discount) {
      return rent - discount;
   } else {
      return rent;
   }
}

console.log(payMe(500, 100))
*/

