//Using database if not present then creating one
use('sigmaLearn')

//creating collection
db.createCollection('books')

//inserting data into database collection
/*
    db.books.insertOne({
        name: "Life of PI",
        author: "Yann Martel",
        publication: "HarperCollins"
    })
*/

// creation
//inserting many data to database in the form of collection of arrays
/*
db.books.insertMany([
    {
        "name": "Life of PI",
        "author": "Yann Martel",
        "publication": "HarperCollins"
    },
    {
        "name": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "publication": "J.B. Lippincott & Co."
    },
    {
        "name": "1984",
        "author": "George Orwell",
        "publication": "Secker & Warburg"
    },
    {
        "name": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "publication": "Charles Scribner's Sons"
    },
    {
        "name": "Moby-Dick",
        "author": "Herman Melville",
        "publication": "Harper & Brothers"
    },
    {
        "name": "War and Peace",
        "author": "Leo Tolstoy",
        "publication": "The Russian Messenger"
    },
    {
        "name": "Pride and Prejudice",
        "author": "Jane Austen",
        "publication": "T. Egerton, Whitehall"
    },
    {
        "name": "The Catcher in the Rye",
        "author": "J.D. Salinger",
        "publication": "Little, Brown and Company"
    },
    {
        "name": "The Hobbit",
        "author": "J.R.R. Tolkien",
        "publication": "George Allen & Unwin"
    },
    {
        "name": "Brave New World",
        "author": "Aldous Huxley",
        "publication": "Chatto & Windus"
    }
]
)
*/

//Read operation on database
let a = db.books.find({ name: "Life of PI" })
console.log(a)

// Update Operation 
db.books.updateOne({ name: "Life of PI" }, { $set: { name: "Life Of PI" } })

// Delete Operation
db.books.deleteOne({ name: "Life Of PI" })