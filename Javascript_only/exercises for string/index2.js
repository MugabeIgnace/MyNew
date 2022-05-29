
var company = "Coding Academy";  //Declare a variable name company and assign it to an initial value 'Coding Academy'.
console.log(company);   // Print the string on the browser console using console.log()
console.log(company.length);  //Print the length of the string on the browser console using console.log()
console.log(company.toUpperCase());  //Change all the string to capital letters using toUpperCase() method
console.log(company.toLowerCase());  //Change all the string to lowercase letters using toLowerCase() method

 // Cut(slice) out the first word of the string using slice, substr() or substring() method
console.log(company.slice(3, 5));
console.log(company.substring(4, 6));
// Use substr to slice out the phase because because because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
 var ne = 'You cannot end a sentence with because because because is a conjunction';
 console.log(ne.substring(31,55));
/* Check if the string contains a word Academy using includes() method*/
console.log(company.includes('Academy'));
// Split the string into array using split() method
console.log(company.split(''));
//Split the string Coding Academy at the space using split() method
console.log(company.split());

 //'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let technologyCompany = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' ;
console.log(technologyCompany.split(", "));

//Change Coding Academy to Microsoft Academy using replace() method.
console.log(company.replace('Coding Academy', 'Microsoft Academy'));

//What is the character code of A in 'Coding Academy' string using charCodeAt()
console.log(company.charCodeAt('A'));

//What is character at index 10 in 'Coding Academy' string use charAt() method.
console.log(company.charAt(10));

//Use indexOf to determine the position of the first occurrence of c in Coding Academy
console.log(company.indexOf('c'));

//Use lastIndexOf to determine the position of the last occurrence of c in Coding Academy.
console.log(company.lastIndexOf('c'));

//Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(ne.indexOf('because'));

//Use lastIndexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(ne.lastIndexOf('because'));

//Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(ne.search('because'));

//Use trim() to remove if there is trailing whitespace at the beginning and the end of a string.E.g ' Coding Academy '.
console.log(company.trim());

// Use startsWith() method with the string Coding Academy make the result true
console.log(company.startsWith('Coding Academy'));

//Use endsWith() method with the string Coding Academy make the result true
console.log(company.endsWith('Coding Academy'));

//Use match() method to find all the c’s in Coding Academy
console.log(company.match('c'));

//Use match() to count the number all because's in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(ne.match('because'));

// Use concat() and merge 'Coding' and 'Academy' to a single string, 'Coding Academy'
console.log(company.concat(''));

// Use repeat() method to print Coding Academy 5 times
console.log(company.repeat(5));

/*
Calculate the total annual income of the person by extract the numbers from the following text.
 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
*/
incomePerMonth = 5000;
bonusIncome = 10000;
onlineIncome_Monthly = 15000;

totalSalary = incomePerMonth * 12;
total_online_Income = onlineIncome_Monthly * 12;

total_annual_income = totalSalary + total_online_Income + bonusIncome;
console.log('His annual income are : ', + total_annual_income +' euro.');
