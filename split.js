// This is just me redoing my code not a submission



console.log("================================================");

let data2 = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

const rows = data2.split('\n');
console.log(rows);

const header = rows[0].split(','); // Creates the headers/ object keys

// The array
const bill = [];

let rowIndex = 1;

//=====================================Part 3 ==========================================
let x = 0;
while(x < header.length){
    header[x] = header[x].toLowerCase();
    x++
}


//My Row Splitter
while (rowIndex < rows.length) {
    const currentRow = rows[rowIndex].split(',');  //Splits the row according to the index position
    const obj = {}; //creates and object for my row
    let headerIndex = 0; //counter, to assign correct information to each header

    while (headerIndex < header.length) {
        obj[header[headerIndex]] = currentRow[headerIndex]; //Adds each item to appropriate header(key) for a row
        headerIndex++

    }
    bill.push(obj) //Adds the object to the bill array
    rowIndex++

}
// console.log(bill);


//=========================Part 4 ========================================
const removeEnd = bill.pop(); //


const insertIndex1 = { id: "48", name: "Barry", occupation: "Runner", age: "25" };
bill.splice(1, 0, insertIndex1);

const insertLast = { id: "7", name: "Bilbo", occupation: "None", age: "111" }
bill.push(insertLast)

console.log(bill);

//Part 4, the hard part.

//calculating the age
let totalAge = 0;
let ageCount = 0;


for (let i = 0; i < bill.length; i++) {
    totalAge += Number(bill[i].age); // Converts the string into a number and adds the value to totalAge
    ageCount++;
}
console.log(totalAge);
console.log(totalAge/ageCount);

//This is the average age
let avg = totalAge/ageCount;

//Since I rounded down, give me extra points Christina
console.log(Math.floor(avg));

console.log("=========================Part 5===========================");
//Turning my array back into a csv. . . like how?

console.log(bill);
// Extract headers and join them (',') delimeter
const joe = Object.keys(bill[0]).join(",")
console.log(joe);

// Create rows arrays by turning all the data into strings
const doY = bill.map(obj => Object.values(obj).join(','));
console.log(doY);

//Combine headers and rows

const mojodojo = [joe, ...doY].join("\\n");
console.log(mojodojo);

//We're done \o/******** */




/* const string = bill.join(',')
console.log(string); */
/*
console.log("========================================================");
let fruits = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63"

console.log(fruits);
const basket = fruits.split("\n");
console.log(basket);

*/
