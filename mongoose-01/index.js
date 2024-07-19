const mongoose = require('mongoose');
const User = require('./User');

mongoose.connect('mongodb://localhost:27017/sigmaLearn')

const createUser = async () => {
    try {
        // const user = new User({ name: 'Ben', age: 17 });
        // await user.save();

        const user = await User.create({
            name: 'Ben129',
            age: 34,
            email: "TEST01@test.com"
        });

        console.log(user);
    } catch (e) {
        console.log(e.message)
    }
}
const findUser = async () => {
    try {
        const user = await User.where("name").equals("Kyle").select("age");
        console.log(user);
    } catch (e) {
        console.log(e.message);
    }
}
findUser();
// createUser();