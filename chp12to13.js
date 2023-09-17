// ---------------------------------------------chapter 12 To 13 --------------------------------------


// ================ Q1=====================
document.write('<h1> Q1</h1>') 

var userInput = prompt("Enter Something")
var code = userInput.charCodeAt()

// alert(code) 
if (code >= 97 && code <= 122 ){
    alert('You have type a small letter')

}
if(code >= 65 && code <= 90){
    alert('You have type a capital letter')
}
if ( code >= 48 && code <= 57){
    alert('You have type a number')

}

// ================ Q2=====================

document.write('<h1> Q2</h1>') 

var integers1 = +prompt('Enter the first integar')
var integers2 = +prompt('Enter the second integar')
if(integers1 > integers2 ){
    document.write( integers1 + " is greater than " + integers2 )
}else if (integers2 > integers1){
    document.write( integers2 + " is greater than " + integers1 )
}else if( integers1 == integers2){
    document.write( integers1 + " is equal to " + integers2 )

}
// ================ Q3=====================

document.write('<h1> Q3</h1>') 

var userInput = +prompt('Enter the user Input')
if( userInput > 0){
    document.write( 'The number is positive')
}else if (userInput < 0){
    document.write(' The number is negative')
}else if(userInput == 0){
    document.write('The value is Zero')
}
// ================ Q4=====================
document.write('<h1> Q4</h1>') 

var name = prompt('Take character')
if(name == "a"){
    document.write("a is a vowel")
}else if(name == "e"){
    document.write("e is a vowel")
}else if(name == "i"){
    document.write("i is a vowel")
}else if(name == "o"){
    document.write("o is a vowel")
}else if (name == "u"){
    document.write("u is a vowel")
}


// ================ Q5=====================

document.write('<h1> Q5</h1>')

var correctPassword = 446258 
var userPassword = +prompt("Enter user password")
if(userPassword === " "){
    document.write('Please Enter pasword')
}else if (userPassword === correctPassword){
    document.write('correct password')
}else if (userPassword !== correctPassword){
    document.write('Incorrect Password')
}



// ================ Q6=====================

document.write('<h1> Q6</h1>')

var greeting;
var hour = 13
if (hour < 18 ){
    greeting = 'Good day';
    alert(greeting)

}else{
    greeting = 'Good Evening'
    alert(greeting)
}
   
// ================ Q7=====================
document.write('<h1> Q7</h1>')

var clock = prompt('Enter time')
var time = 1900
if(time >= '0000' && time < 1200){
    alert('Good Morning')
}else if (time >= 1200 && time < 1700){
    alert('Good Evening')
}else if (time >= 1700 && time < 2100){
    alert('Good Evening')
}else if(time >= 2100 && time < 2359){
    alert('Good Night')
}else{
    alert('Good Night')
}
console.log(clock)