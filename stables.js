console.log("horses are great!")

let horseName = "Coolguy" // this is a string, perfer-always use double quotes
horseName = "Supreme Leader" ;
let horseAge = 2000;
console.log(horseName) ;
console.log(horseAge);
let isHorseInStable = true; 
console.log(isHorseInStable);
 isHorseInStable = false;
let horsenickname = "P Diddy";
console.log(horsenickname);;

// LESSON 6 CODE
//let word = "Rainbow";
//console.log(word.charAt(0));
//horse = ["name", age, isInside, horsenickname]
let horseOne = [horseName, horseAge, isHorseInStable, horsenickname];
let horseTwo = ["Suprme Leader", 2000, false, "P Diddy"];
let areHorsesInside = [isHorseInStable, false, true];
let horseNames = [horseName, "Mr President", "Mikey"];


console.log(horseOne[0] + "'s nickname is " + horseOne[3]);
console.log(horseTwo)
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
console.log(horseOne[0] + " and ") + horseTwo[0] + "are staying at the stables";

let horseIntro = `There are ${horseNames.length} horses are staying at my stables: ${horseNames[0]}, ${horseNames[1]}, ${horseNames[2]}!`;
console.log(horseIntro)

let differentHorseIntro = 
   "There are " + horseNames.length + " horses staying at my stables: " + horseNames[0] + ", " +  horseNames[1] + ", " + horseNames[2] + "!";
   console.log(differentHorseIntro)