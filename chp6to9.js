// ---------------------------------------------chapter 06 To 09 --------------------------------------

// ----------------------Question 01 --------------------
document.write("<h1>Result</h1>")

 var a = 11;
document.write("The Value of a is" + a)

document.write("<br>")

document.write("-----------------------------------")


document.write("<br>")

document.write("The value of ++a is: " + +a);

document.write("<br>")

document.write("Now The value of a is: " + a);

document.write("<br>")



document.write("<br>")

document.write("The value of a++ is: " + a++);

document.write("<br>")

document.write("Now The value of a is: " + a);

document.write("<br>")



document.write("<br>")

document.write("The value of --a is: " + --a);

document.write("<br>")

document.write("Now The value of a is: " + a);

document.write("<br>")
document.write("<br>")


document.write("The value of a-- is:" + a--);
document.write("<br>")
document.write("Now The value of a is: " + a);


// ----------------------Question 02 --------------------

document.write("<br></br>");

var a = 2;
var b = 1;

document.write("a is " + a);
document.write("<br></br>");
document.write("b is " + b);
document.write("<br></br>");

var result= --a - --b + ++b + b-- ;
              1 -   0 +   1 + 1
document.write("Result is " + result)
document.write("<br>")
document.write("<br>")

// ----------------------Question 03 --------------------

let fullName = prompt("Enter your full Name");

document.write(fullName);

document.write("<br>")
document.write("<br>")

// ----------------------Question 04 --------------------

var whichTable = prompt("please you take one number for a table")

var number = prompt("Write on the table")
console.log(whichTable , " x 1 = " , number*1)
console.log(whichTable , " x 2 = " , number*2)
console.log(whichTable , " x 3 = " , number*3)
console.log(whichTable , " x 4 = " , number*4)
console.log(whichTable , " x 5 = " , number*5)
console.log(whichTable , " x 6 = " , number*6)
console.log(whichTable , " x 7 = " , number*7)
console.log(whichTable , " x 8 = " , number*8)
console.log(whichTable , " x 8 = " , number*9)
console.log(whichTable , " x 10 = " , number*10)

document.write(whichTable * number)


// ----------------------Question 05 --------------------

var subject1 = prompt('subject no.1')
var subject2 = prompt('subject no.2')
var subject3 = prompt('subject no.3')

var totalMarks = 100

var marks1 = prompt('marks no 1')
var marks2 = prompt('marks no 2')
var marks3 = prompt('marks no 3')

var percentage1 = ((marks1 / totalMarks))* 100 
var percentage2 = ((marks2 / totalMarks))* 100 
var percentage3 = ((marks3 / totalMarks))* 100 

document.write(subject1 + "  " + totalMarks + "  " + marks1  + "  " + percentage1 + "%<br>" )
document.write(subject2 + "  " + totalMarks + "  " + marks2  + "  " + percentage2 + "%<br>" )
document.write(subject3 + "  " + totalMarks + "  " + marks3  + "  " + percentage3 + "%<br>"  )
