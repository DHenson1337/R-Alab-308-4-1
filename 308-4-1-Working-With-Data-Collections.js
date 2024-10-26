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


//My Row Splitter
while (rowIndex < rows.length) {
const currentRow = rows[rowIndex].split(',') //Splits the row according to index position
const obj = {}; // creates and object for my row
let headerIndex = 0; //counter, to assign correct information to each header

//How i'll add the information to the headers (I don't leave till the row is done)
 while (headerIndex < headers.length){ // for current data cycles 0 - 3
  obj[headers[headerIndex]] = currentRow[headerIndex];  // Adds each item to apporpriate header(key) for a row
  headerIndex++;
 }

 table.push(obj); // Adds the object to the table
 rowIndex++;
}

console.log(table);



// =====================Rough Draft for Part 1 =============================

/*
const rows1 = rows[1].split(','); //Splits each row by the, so I can assign to each key.
const rows2 = rows[2].split(',');
const rows3 = rows[3].split(',');
const rows4 = rows[4].split(',');
// console.log(rows);



// Create Objects to store each row of data
let convertRow1 = {};
let convertRow2 = {};
let convertRow3 = {};
let convertRow4 = {};



//Test to split another row of data




// Loop through the headers array
let i = 0; // Index for headers
while (i < headers.length) {
    convertRow1[headers[i]] = rows1[i]; // Assign each value to the corresponding header
  i++; 
}
i = 0;

while (i < headers.length) {
    convertRow2[headers[i]] = rows2[i]; // Assign each value to the corresponding header
  i++; 
}

i = 0;
while (i < headers.length) {
    convertRow3[headers[i]] = rows3[i]; // Assign each value to the corresponding header
  i++; 
}

i = 0;
while (i < headers.length) {
    convertRow4[headers[i]] = rows4[i]; // Assign each value to the corresponding header
  i++; 
}



// Output the result
// console.log(convertRow1);
// console.log(convertRow2);
// console.log(convertRow3);
// console.log(convertRow4);


//Empty array to store processed information (Once Finished)
const table = [convertRow1,convertRow2,convertRow3, convertRow4];
console.log(table);

// Gonna attempt to clean this so it looks nicer but leaving it commented to show my work!

*/
