use('sigmaLearn')

// Insert a few documents into the course collection.
db.getCollection('courses').insertMany([
    {
        "_id": "668cb9577cf44d30dc74dc73",
        "name": "Python",
        "price": 2500
    },
    {
        "_id": "668cb9577cf44d30dc74dc74",
        "name": "Java",
        "price": 2200
    },
    {
        "_id": "668cb9577cf44d30dc74dc75",
        "name": "C++",
        "price": 2300
    },
    {
        "_id": "668cb9577cf44d30dc74dc76",
        "name": "Ruby",
        "price": 2100
    },
    {
        "_id": "668cb9577cf44d30dc74dc77",
        "name": "PHP",
        "price": 2000
    },
    {
        "_id": "668cb9577cf44d30dc74dc78",
        "name": "Swift",
        "price": 2400
    },
    {
        "_id": "668cb9577cf44d30dc74dc79",
        "name": "Go",
        "price": 2500
    },
    {
        "_id": "668cb9577cf44d30dc74dc7a",
        "name": "Kotlin",
        "price": 2600
    },
    {
        "_id": "668cb9577cf44d30dc74dc7b",
        "name": "Rust",
        "price": 2700
    }
]);

// Print a message to the output window.
print("PlayGround created successfully!!");
