/*
Sort the array using sort() method
Reverse the array without reverse method
Reverse the array using reverse() method
Slice out the first 3 companies from the array
Slice out the last 3 companies from the array
Slice out the middle IT company or companies from the array
Remove the first IT company from the array
Rem
Print the number of companies in the arrayove the middle IT company or companies from the array
Remove the last IT company from the array
Remove all IT companies
*/
var new_1 = Array(); // Declare an empty array;
var new_2 = [0, 8, 3.4, 1, 9]; // Declare an array with more than 5 number of items
console.log(new_2.length);  // Find the length of your array
/* 
Get the first item, the middle item and the last item of the array 
*/
let lastNumber = new_2.length - 1;
let middleNumber = lastNumber / 2;
console.log(new_2[0]);
console.log(new_2[middleNumber]);
console.log(new_2[lastNumber]);
/*
Declare an array called mixedDataTypes,
put different data types and in your array and the array size should be greater than 5
*/
const mixedDataTypes = ['Munich', 78, true, 1.5, {
    task: 'Workout',
    time: '31/5/2022 16:30',
    completed: true
}, null];
/*
Declare an array variable name itCompanies and assign initial values 
Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon.
*/
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
console.log(itCompanies); // Print the array using console.log()
console.log(itCompanies.length); // print the number of companies in the array
/*
Print the first company, middle and last company
*/
let lastIndex = itCompanies.length - 1;
let middleIndex = lastIndex / 2;
console.log(itCompanies[0]);
console.log(itCompanies[middleIndex]);
console.log(itCompanies[lastIndex]);
console.log(itCompanies); // Print out each company
/* change array to UpperCase */
var itCompanies_inUpperCase = String.prototype.toUpperCase.apply(itCompanies).split(",");
console.log(itCompanies_inUpperCase);

/* Print the array like as a sentence:
 Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
 */
console.log(itCompanies.toString() + '', 'are big IT companies');
/*
Check if a certain company exists in the itCompanies array.
 If it exist return the company else return a company is not found.
*/
find_company = itCompanies.includes('IBM');
if (find_company === true) {
    console.log('IBM');
} else {
    console.log('a company is not found');
}
// Filter out companies which have more than one 'o' without the filter method
let new_itCompanies = [];
for (let i = 0; i < itCompanies.length; i++) {
    if (itCompanies[i].includes('o') || itCompanies[i].includes('O')) {
        new_itCompanies.push(itCompanies[i]);
    }
}
console.log(new_itCompanies);

