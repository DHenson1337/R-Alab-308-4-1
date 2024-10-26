// The raw data that I want to transform into a formmated array of objects
const rawData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
// console.log(rawData);

// Split the raw data into an array of rows  (.split ONLY Works on Strings)

const rows = rawData.split('\n'); //Splits all the Data into Rows from the `\n`
const headers = rows[0].split(','); //Creates the header keys, where I want to store my info

//The Array all the information will be stored
const table = [];

//Lets me loop through the max number of rows and splits them!
let rowIndex = 1; //It's 1 so I can skip my headers

while (rowIndex < rows.length) {
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

console.log(table);