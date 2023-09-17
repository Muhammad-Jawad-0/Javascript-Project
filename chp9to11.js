// ---------------------------------------------chapter 09 To 11 --------------------------------------


// ----------------------Question 01 --------------------

var cityName = prompt("enter your city name")

if (cityName === "karachi") {
    console.log("“Welcome to city of lights”")
    document.write("“Welcome to city of lights”")
}
else {
    console.log("welcome to "+ cityName ); 
    document.write("welcome to "+ cityName )
}

// ----------------------Question 02 --------------------

let gender = prompt("enter your gender");

if (gender === "male") {
    console.log(" good Morning sir");  
    document.write(" good Morning sir");  
}
else if (gender === "female") {
    console.log(" good Morning Mam");
    document.write(" good Morning Mam");
} 

// ----------------------Question 03 --------------------

let color = prompt (" Enter color for traffic signal ")

if (color === "red") {
    console.log(" Must Stop ");
    document.write(" Must Stop ");
} else if (color === "yellow"){
    console.log(" Ready to move ");
    document.write(" Ready to move ");
}
else if (color === "green") {
    console.log(" Move Now ");
    document.write(" Move Now ");
}
else {
    console.log(" Warning ");
    document.write(" Warning ");
};

// ----------------------Question 04 --------------------

var fuel = prompt("Remaining fuel in a car(in litre).");

if(fuel <=  0.25){
    document.write("“Please refill the fuel in your car”")
};


// ----------------------Question 05 --------------------

// ------------------Question 05a -----------------

 var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
console.log(a);
}

// ------------------Question 05b -----------------


 var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
console.log(b);

// ------------------Question 05c -----------------


var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
console.log(c)
if (c === 13){
alert("condition 2 is true");
}
console.log(c)
if (++c < 14){
alert("condition 3 is true");
}
console.log(c)
if(c === 14){
alert("condition 4 is true");
}
console.log(c)

// ------------------Question 05d -----------------

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
console.log(totalCost)

// ------------------Question 05e -----------------

      if (true){
         alert("True");
        }
         if (false){
         alert("False");
    }

// ------------------Question 05f -----------------

if("car" < "cat"){
    alert("car is smaller than cat");
    }

// ----------------------Question 06 --------------------

document.write("<h3> Mark Sheet </h3>")


let totalMarks = +prompt(" Enter your Total Maarks ");

document.write("Total Marks :" + totalMarks);

    document.write("</br>")

    let marksObtained = +prompt("Enter your marks obtained in three subject");

document.write(" Marks Obtained :" + marksObtained);

document.write("</br>")

let percentage  = (marksObtained / totalMarks) * 100;

document.write("percentage :" + percentage + `%`)

document.write("<br>")

if(percentage >= 80) {
    document.write(" Grade : A-1" )
    document.write(" </br> " )
    document.write("Remarks : Exellent champ" )
}
else if (percentage >= 70) {
    document.write(" Grade : A" )
    document.write(" </br> " )
    document.write("Remarks : Good effort" )
}
else if (percentage >= 60) {
    document.write(" Grade : B" )
    document.write(" </br> " )
    document.write("Remarks : You need to improve" )
}
else{
    document.write(" Grade : Faild" )
    document.write(" </br> " )
    document.write("Remarks : `sorry` never give up" )
}

// ----------------------Question 07 --------------------

document.write("<h1> Guess Game </h1>")

var secretNumber = 7
var guessNumber = +prompt( "Guess the secret number is 1 to 10")

if(guessNumber === secretNumber){
    document.write('<h2>Bingo! Correct answer</h2>')
}else if(++guessNumber === secretNumber){
    document.write('<h2>Close enough to the correct answer</h2>')
}else{
    document.write('<h2>Wrong Answer</h2>')
    
}


// ----------------------Question 08 --------------------

let numberInput = +prompt(' Enter the number: ');
if(numberInput % 3 === 0){
        document.write(' The number is divisible by 3 ')

}else{
        document.write(' The number is not divisible by 3 ')
}
document.write("<br>")


// ----------------------Question 09 --------------------

let number = +prompt(" Enter the number ");

if (number % 2 === 0) {
    document.write(" Even Number ")
}else{
    document.write(" Odd Number ")
}


// ----------------------Question 10 --------------------


let tempreture = +prompt("Enter your Area Tempreture")

if (tempreture >= 40) {
    document.write("“It is too hot outside.”")
}
else if (tempreture >= 30) {
    document.write(`“The Weather today is Normal.”`)
}
else if (tempreture >= 20) {
    document.write(`“Today’s Weather is cool.”`)
}
else{
    document.write(`“OMG! Today’s weather is so Cool.”`)
}

// ----------------------Question 11 --------------------

var number1 = +prompt('Enter the Number1')
var number2 = +prompt('Enter the Number2')
var operator = prompt('Enter the arthemitic Operator +, -, *, /, %')

if (operator === "+"){
        var results = number1 + number2
        document.write( 'Result : ' + results)
}else if(operator === "-"){
        results = number1 - number2
        document.write('Result : ' + results)
}else if(operator === "*"){
         results = number1 * number2
        document.write('Result : ' + results)
}else if(operator === "/"){
         results = number1 / number2
        document.write('Result : ' + results)
}else if(operator === "%"){
 results = number1 % number2
        document.write('Result : ' + results)
}