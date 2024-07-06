//requiring fs module
const fs = require('fs');

// fs module allows you to perform operations such as reading, writing, updating, and deleting files and directories. It can be used both synchronously and asynchronously.

//Syncronously means it stop the further execution of the code until the fs operation is performed
//Asyncronously means it stacks the operation and and executes the code and completes the operation in the backend.

//writingFile
//both syncronous and asyncronous way replacess the file if already exists
console.log("start-1")
fs.writeFileSync("write1.txt", "Entering write1.txt")
console.log("end-1")

console.log("start-2")
fs.writeFile("write2.txt", "Entering write2.txt", () => {
    console.log("write2.txt created succssfully!!")
})
console.log("end-2")

//reading the data
let data = fs.readFileSync("write1.txt");
console.log(data.toString())

fs.readFile("write2.txt", (error, data) => {
    console.log(error, data.toString())
})

//Apending files
fs.appendFileSync("write1.txt", " This is the appended text")

fs.appendFile("write2.txt", " This is the appended text", (error, data) => {
    console.log(error, data)
})

//Deleting files
fs.writeFileSync("delete1.txt", "This will be deleted")
fs.writeFileSync("delete2.txt", "This will be deleted")
fs.unlinkSync("delete1.txt")
fs.unlink("delete2.txt", (error, data) => {
    console.log("File deleted successfully!");
})