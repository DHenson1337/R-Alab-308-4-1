// The raw data that I want to transform into a formmated array of objects
const rawData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
// console.log(rawData);

// Split the raw data into an array of rows  (.split ONLY Works on Strings)

const rows = rawData.split('\n'); //Splits all the Data into Rows from the `\n`
console.log(rows);
// const headers = rows[0].split(','); //Creates the header keys, where I want to store my info

//The Array all the information will be stored
const table = [];

//Lets me loop through the max number of rows and splits them!
let rowIndex = 1; //It's 1 so I can skip my headers

/* while (rowIndex < rows.length) {
const currentRow = rows[rowIndex].split(',') //Splits the row
const obj = {}; // creates and object for my row
let headerIndex = 0; //counter, to assign correct information to each header

//How i'll add the information to the headers
 while (headerIndex < headers.length){
  obj[headers[headerIndex]] = currentRow[headerIndex];  // Turns the headers object keys to store data
  headerIndex++;
 }

 table.push(obj); // Adds the object to the table
 rowIndex++;
}

console.log(table); */

//=================Practicing Sutff ===============================================
console.log("==================================================");

//Functions are a set of statements that preforms a task or calcualtes a value.

function greet(name, lastName) { //Name is a paramater of the greet function. A function can have multiple paramaters
    console.log(`Hello ` + name + ' ' + lastName); //Name is only accesiable within the function.
}

greet(`John`, `Smith`); // John is an argument in the greet function
greet(`Mary`, `Murder`);

console.log("");

function test(x){
console.log(x*2);
}

test(34.5);

// Creates a new line within a string of text \n
console.log("This is a \n new line test");

console.log(`This is a test for ${8-3} adding numbers into a strong without ,`);


const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num*2);

console.log(doubled);

const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];

// Use map to extract names
const namesArray = users.map(users => users.name);
const namesString = namesArray.join(`,`);
console.log(namesString);

console.log('');
console.log(`=====================Turning Array of Objects into a CSV============================`);

const books = [
    {Title: "Dungeon Crawler Care", Author: "Matt Dinamon", Year: "2006", Genre: "Fantasy"},
    {Title: "The Primal Hunter", Author: "Big Game Hunter", Year: "2012", Genre: "Fantasy"},
    {Title: "Mother of Learning", Author: "Eternal Time", Year: "2008", Genre: "Fantasy"}
]

//Extracts headers: EX: Tittle, Author, Year, Genre
const headers = Object.keys(books[0]).join(',')
console.log(headers);

//Create row of Arrays by turing the objects into strings (Excluding Keys)
const bookRows = books.map(obj => Object.values(obj).join(","));
console.log(bookRows);

//Combine headers and rows
const combination = [headers, ...bookRows].join(",");

console.log(combination);
