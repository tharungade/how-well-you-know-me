var readingObj = require('readline-sync');
var chalkObj = require('chalk');

var score  = 0;

var userName = readingObj.question( "May i have your"+chalkObj.green(" name ")+"? ");
console.log();
console.log("welcome",chalkObj.underline.bold.red(userName),"Lets test how well you know tharun");
console.log();

function play(question , correctAnswer){
 var userAnswer = readingObj.question(question);
 if(correctAnswer.toUpperCase() === userAnswer.toUpperCase()){
   console.log(chalkObj.green.bold("you are correct ;)"));
   score++;
   console.log();
 }
 else{
   console.log(chalkObj.red.bold("you are wrong :("));
   console.log("correct answer is:",chalkObj.green.bold(correctAnswer));
   console.log();
 }
}

var arr = [{
 question : "Is tharun older than 17?"+chalkObj.bold.cyan("( yes / no ) ") ,
 answer : "yes",
} ,  {
 question : "In which city tharun live ?"+chalkObj.bold.cyan("(city name) ") ,
 answer : "hyderabad",
} , {
  question: "What is the nickname of tharun ? ",
  answer : "chintu"
} , {
  question : "what color does tharun like ? ",
  answer : "green"
} , {
  question : "what is the lucky number of tharun ? ",
  answer : "5"
}];

for(var i = 0 ; i < arr.length ; i++){
  play(arr[i].question , arr[i].answer);
}

console.log("your score is : ", score);


var highScores = [
{
  name : "Tharun",
  score : 5
} , {
  name : "natasha",
  score : 4
}
];

console.log(chalkObj.blue("        -------------------------"));
console.log(chalkObj.bgRed.bold("highScores are:"));
console.log();
for(var j = 0;j < highScores.length ;j++){
console.log("name :",highScores[j].name);
console.log("score :",highScores[j].score);
console.log();
}

if(score == highScores[0].score){
  console.log("          ",chalkObj.bgWhite.yellow.bold("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$"))
  console.log(chalkObj.red.underline.bold("You got highest score send screenshot to update in highScores list"));
  console.log();
  console.log();
}