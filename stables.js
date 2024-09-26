console.log("horses are great!")

let horseName = "Coolguy" // this is a string, perfer-always use double quotes
horseName = "Supreme Leader" ;
let horseAge = 2000;
console.log(horseName) ;
console.log(horseAge);
let isHorseInStable = true; 
console.log(isHorseInStable);
isHorseInStable = false;
console.log

const STABLE_MONTHLY_FEE = 500;
let horseAgeIn10Years = horseAge + 10;
let horseAgeIn20Years = horseAgeIn10Years + 10;
console.log(STABLE_MONTHLY_FEE);
console.log(STABLE_MONTHLY_FEE + STABLE_MONTHLY_FEE - 200);
console.log(STABLE_MONTHLY_FEE * 24 / 2)
console.log(horseAgeIn10Years);
console.log(horseAgeIn20Years)

let horseIntroduction = " is the name of my horse"
console.log(horseName + horseIntroduction);
let rentIntroduction = "It costs " + STABLE_MONTHLY_FEE + " to board " + horseName;
console.log(rentIntroduction)
//let stableIntroduction = "Welcome to " + horseName + "'s stable";
let stableIntroduction = `Welcome to "${horseName}'s stable`;
console.log(stableIntroduction)