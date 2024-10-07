console.log("horses are great!")

let horseName = "Coolguy" // this is a string, perfer-always use double quotes
horseName = "Supreme Leader" ;
let horseAge = 2000;
console.log(horseName) ;
console.log(horseAge);
let isHorseInStable = true; 
console.log(isHorseInStable);
console.log

const STABLE_MONTHLY_FEE = 500;
let horseAgeIn10Years = horseAge + 10;
let horseAgeIn20Years = horseAgeIn10Years + 10;
console.log(STABLE_MONTHLY_FEE);

console.log(STABLE_MONTHLY_FEE * 24 / 2)
console.log(horseAgeIn10Years);
console.log(horseAgeIn20Years)

let horseIntroduction = " is the name of my horse"
console.log(horseName + horseIntroduction);
let rentIntroduction = "It costs " + STABLE_MONTHLY_FEE + " to board " + horseName;
console.log(rentIntroduction)

let stableIntroduction = `Welcome to "${horseName}'s stable`;
console.log(stableIntroduction)


///// lesson 4 code //////
let horseNickname = "Mr President";
let horseIntro2 = " is a very famous horse"
console.log(horseNickname + horseIntro2)

let horseMessage = "A 3 month stable fee with a 10% discount would come out to " + "$" + (STABLE_MONTHLY_FEE*3 -150) 
console.log(horseMessage)

//lesson-5 
let visitingHorseName = "P Diddy"

//if(horseAge === 10) { 
   // console.log("👌" + " Our horse is old")  
   // } else if( horseAge < 1500) {
      //  console.log("our horse is a young buck")
   // } else {
       // console.log ("Thats rude don't ask her age")

    //}
 if (horseName === "Supreme Leader" && visitingHorseName === "mike" && isHorseInStable) {
    console.log( horseName + " is lonely")
 } 
 else if (horseName === "Supreme Leader" || visitingHorseName === "P Didddy" && isHorseInStable) {
    console.log( horseName + " has a friend and his name is P Diddy. They are playing outside")
 }
 else {
   console.log(horseName + "needs to sort his shit out")
 }