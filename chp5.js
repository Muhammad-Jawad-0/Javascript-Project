// ---------------------------------------------chapter 05 --------------------------------------

// ----------------------Question 01  add --------------------
var num3 = 3;
var num5 = 5;

var result = num3 + num5 ;

console.log(result)

document.write(` sum of ` + num3 + ` and ` + num5 + ` is `+ result );

// ----------------------Question 02  subs --------------------

var result = num5 - num3 ;

console.log(result);

document.write(`<br></br> substraction of ` + num5 + ` , ` + num3 + ` is ` + result);

// ----------------------Question 02  multipli --------------------

var result = num5 * num3 ;

console.log(result);

document.write(`<br></br> Multiplication of ` + num5 + ` by ` + num3 + ` is ` + result);

// ----------------------Question 02  division --------------------

var result = num5 / num3 ;

console.log(result);

document.write(`<br></br> division of ` + num5 + ` / ` + num3 + ` is ` + result);

// ----------------------Question 02  modulus --------------------

var result = num5 ** num3 ;

console.log(result);

document.write(`<br></br> Modulus of ` + num5 + ` / ` + num3 + ` is ` + result);


// ----------------------Question 03 --------------------

var msg = `<br> value after variable declaration is undefined: ?? "`

var numbers = "<br> initial value: 5 ";

var incrementNumber = "<br> value after increment is: 6 "

var addNumber = "<br> value after addition is: 13 "

var decrementNumber = "<br> value after decrement is:12 "

var remainderNumber = "<br> The remender is: 0 "


document.write( msg , numbers , incrementNumber , addNumber , decrementNumber , remainderNumber )


// ----------------------Question 04 --------------------


let tickets = 600

var buyTickets = 600 * 5

document.write(" <br> Total cost to buy 5 Tickets to a movie is " + buyTickets + " PKR ");

// ----------------------Question 05 --------------------

 document.write(" <br> Table of 4 <br>")

 var table1 = 4 * 1;
 var table2 = 4 * 2;
 var table3 = 4 * 3;
 var table4 = 4 * 4;
 var table5 = 4 * 5;
 var table6 = 4 * 6;
 var table7 = 4 * 7;
 var table8 = 4 * 8;
 var table9 = 4 * 9;
 var table10 = 4 * 10;

 document.write(' Table of 4 ')
 document.write('<br>')
 document.write(4 , ' x 1 = ', 4*1 )
 document.write('<br>')
 document.write(4 , ' x 2 = ', 4*2 )
 document.write('<br>')
 document.write(4 , ' x 3 = ', 4*3 )
 document.write('<br>')
 document.write(4 , ' x 4 = ', 4*4 )
 document.write('<br>')
 document.write(4 , ' x 5 = ', 4*5 )
 document.write('<br>')
 document.write(4 , ' x 6 = ', 4*6 )
 document.write('<br>')
 document.write(4 , ' x 7 = ', 4*7 )
 document.write('<br>')
 document.write(4 , ' x 8 = ', 4*8 )
 document.write('<br>')
 document.write(4 , ' x 9 = ', 4*9 )
 document.write('<br>')
 document.write(4 , ' x 10 = ', 4*10 )

 document.write('<hr>')

// ----------------------Question 06 --------------------

document.write('<h2>Temperature Converter</h2> ')


let temperatureInDegree = 25;
// F= (C * 9/5) + 32

let temperatureInFahrenheight = (temperatureInDegree * 9/5) + 32;
document.write(temperatureInDegree,' C is ', temperatureInFahrenheight,' F ' )

document.write('<br>')

let fahrenheittem = 70;
// C= (F * 9/5) + 32

let celsius = (fahrenheittem - 32) * 5 / 9;
document.write(fahrenheittem,' F is ', celsius,' C ' )
document.write('<hr>')


// ----------------------Question 07 --------------------


document.write('<h2>Shopping Cart</h2>')

var item1 = 650
document.write('  Price of item 1 is ' + item1 )
document.write('<br>')
var quantity1 = 3

document.write(' Quantity of item 1 is ' + quantity1)
document.write('<br>')

var item2 = 100
document.write('Price of item 2 is ' + item2 )
document.write('<br>')

var quantity2 = 7

document.write(' Quantity of item 2 is ' + quantity2)
document.write('<br>')

var shippingcharges = 100
document.write(' Shipping Charges ', shippingcharges  )
document.write('<br>')


var total = (item1 * quantity1) + (item2 * quantity2) + (shippingcharges)

document.write( 'Total cost of order is ' , total )

document.write('<hr>')

// ----------------------Question 08 --------------------


document.write( "<h2>Marks Sheet </h2>" );
document.write('<br>');
var totalMarks = 980;
document.write('Total Marks : ', totalMarks);
document.write('<br>')
var MarksObtained = 804;
document.write('Marks obtained : ', MarksObtained);
document.write('<br>')

var percentage = MarksObtained / totalMarks * 100 ;
document.write('Percentage : ', percentage, '%');
document.write('<br>')



document.write('<hr>')

// ----------------------Question 09 --------------------

document.write(' <h2>Currency in PKR </h2>');

let dollar = 10;
let riyal = 25;

let pkr = dollar * 297 + riyal * 80;

document.write("total currency in pkr:" + pkr)

document.write(`<hr>`)

// ----------------------Question 10 --------------------


document.write('<h1>Calculations single expression </h1>')

var add = 5;
var multiply = 10;
var divide = 5;
var result = (add*10) /(2)
document.write(' Calculations in a single expression ', result)
document.write('<hr>')

// ----------------------Question 11 --------------------

document.write('<h2> Age Calculator</h2>')

var currentyear = 2023;
document.write("Current Year: " + currentyear)
document.write('<br>')

var birthYear = 2004;
document.write("Birth Year: " + birthYear)
document.write('<br>')

var yourage = 19
document.write("Your Age: " + yourage)
document.write('<hr>')

// ----------------------Question 12 --------------------


document.write('<h2> The Geometrizer </h2>')

var radiuscircle = 2016

document.write("Radius of a circle: ", radiuscircle )
document.write('<br>')

var circumference = 2*3.142*20;
document.write("The Circumference: " + circumference)
document.write('<br>')

var area = 3.142* 20*20
document.write("The area is: " + area)
document.write('<hr>')

// ----------------------Question 13 --------------------

document.write('<h1>The Lifetime Supply Calculator</h2>')
var snack = " Chocolate Chip"
document.write('Favorite snack:', snack)
document.write('<br>')

var age = " 15"
document.write('Current age:', age)
document.write('<br>')

var maxage = " 65"
document.write(' Estimate maximum age:', maxage)
document.write('<br>')

var perday = " 3"
document.write('amount of per day:', perday)
document.write('<br>')

var restLifeDay = (maxage - age)* perday
document.write('You will need ', restLifeDay ,' to last you until the ripe old age of',maxage)
