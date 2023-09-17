// ---------------------------------------------chapter 03 --------------------------------------

// ----------------------Question 01 --------------------

let age = 19;

alert(age);

// ----------------------Question 02 --------------------

var visitCount = localStorage.getItem('visitCount') || 0;

visitCount++;

localStorage.setItem('visitCount', visitCount);

document.write("You have visited this site " + visitCount + " times.\n");

// ----------------------Question 03 --------------------

let dateOfBirth = " \nMy birth year: 04 02 2004 \n"

document.write(dateOfBirth);

let dataType = " \ndatatype of my declared variable is number  "

document.write(dataType)
// ----------------------Question 04 --------------------

let visitor = "Muhammad Jawad";

let product = "T-shirt";

let quantity = 5

document.write(  visitor , " Ordered " ,  quantity , product ," On Xyz clothing store ");