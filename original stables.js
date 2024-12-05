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

let horses = [
   {
      name: "Strawberry",
      faveTreat: "carrots",
      isInside: true,
   },
   {
      name: "Beans",
      faveTreat: "beans",
      isInside: false,
   },
   {
      name: "Charlie",
      faveTreat: "strawberries",
      isInside: true,
   },
];

for(let i = 0; i < horses.length; i++) {
   let horse = horses[i];
   let horseName = horse["name"];
   let favorite = horse["faveTreat"];
   let likesBeans = favorite === "beans";
   

      if (likesBeans) {
         return console.log(horseName + " loves beans!");
      }
      console.log(horseName + " dosent like Beans, keep checking!");
}
//IDK why it keeps printing as undefined. Validator says I have an issue with the let "Line 1, Column 1: 'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz)"

//for (let i = 0; i < horses.length; i++)



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


