// ---------------------------------------------chapter 14 To 16 --------------------------------------


// ===========Q1==============//

let student = []
console.log(student)

// ===========Q2==============
let students = []
console.log(students)

// ===========Q3==============
let  strings = ['Asad','Raza','Zain','Jawad'] 
console.log(strings)

// ===========Q4==============
let number = ['1','2','3','4'] 
console.log(number)

// ===========Q5==============

let  boolean = ['true','false'] 
console.log(boolean)

// ===========Q6==============

let  mixedArray = ['Asad','Raza','1','6','true', 'false' ,'null',] 
console.log(mixedArray)

// ===========Q7==============//

let  mobileNetwork= ['telenor', 'ufone', 'zone', 'warid', 'jazz'] 
console.log(mobileNetwork)

// =============Q8==============//

let  education = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM','MS', 'M.Phil','PhD'] 
console.log(education)

// =============Q9==============//
document.write('<h1> Q9 </h1>')

let studentNames = ['Zain', 'Ali', 'Raza']
let studentScore = [290, 350, 400]
let totalMarks = 500

let percentage1 = (studentScore[0] / totalMarks) * 100;
document.write(' Score of  ' + studentNames[0]+ " is " + studentScore[0]+ " Percentage :" + percentage1 + "%") 
document.write('<br>')
let percentage2 = (studentScore[1] / totalMarks) * 100;
document.write(' Score of  ' + studentNames[1]+ " is " + studentScore[1]+ " Percentage :" + percentage2 + "%") 
document.write('<br>')
let percentage3 = (studentScore[2] / totalMarks) * 100;
document.write(' Score of  ' + studentNames[2]+ " is " + studentScore[2]+ " Percentage :" + percentage3 + "%") 


// ============ Q10 ===============//
document.write('<h1> Q11 </h1>')

let score = [320,230,480,120];

document.write('Scores of Students: ' + score + '<br>')

let orderSort = score.sort()
document.write('Ordered Scores of Student: ' + orderSort)

// ============ Q11 ===============//

document.write('<h1> Q12 </h1>')
document.write('<br>')

let cityNames = ['Karachi', 'Lahore', 'Islamabad', 'Quetta', 'Peshawar'];

document.write('Cities List: ' + cityNames + '<br>')
let selectedCities = cityNames.slice(2,4);
document.write('Selected Cities List: ' +selectedCities + '<br>' )

// ============ Q12 ===============//

document.write('<h1> Q13 </h1>')

let arr = ["This", "is", "my", "cat"]
document.write(arr.join(" , "))
document.write('<br>')
document.write(arr.join(" "))

// ============ Q13 ===============//
document.write('<h1> Q13 </h1>')

let array = [ " (FIFO-First " , " In " , "First Out" ]


document.write(1)


// ============ Q14 ===============//
document.write('<h1> Q14 </h1>')

let emptybox = []
emptybox.push('Keyborad')
emptybox.push('Mouse')
emptybox.push('Printer')
emptybox.push('Moniter')
document.write('Devices: ' + emptybox + '<br>')

let out= emptybox.shift('')
document.write('Out: ' + '<br>')
document.write( out + '<br>')
let out1= emptybox.shift('')
document.write('Out: ' + '<br>')
document.write( out1 + '<br>')
let out2= emptybox.shift('')
document.write('Out: ' + '<br>')
document.write( out2 + '<br>')
let out3= emptybox.shift('')
document.write('Out: ' + '<br>')
document.write( out3 + '<br>')

// ============ Q15 ===============


document.write('<h1> Q15 </h1>')

let emptyArray = []
emptyArray.push('Keyborad')
emptyArray.push('Mouse')
emptyArray.push('Printer')
emptyArray.push('Moniter')
document.write('Devices: ' + emptyArray + '<br>')

let out4= emptyArray.pop('')
document.write('Out: ' + '<br>')
document.write( out + '<br>')
let out5= emptyArray.pop('')
document.write('Out: ' + '<br>')
document.write( out1 + '<br>')
let out6= emptyArray.pop('')
document.write('Out: ' + '<br>')
document.write( out2 + '<br>')
let out7= emptyArray.pop('')
document.write('Out: ' + '<br>')
document.write( out3 + '<br>')