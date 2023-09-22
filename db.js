const mongoose = require('mongoose')
require('dotenv').config()

// const newSchema=mongoose.Schema({
// title:String,
// content:String
// })
// const App=mongoose.model('app',newSchema)
async function connect(username,password) {
    const url = `mongodb+srv://${username}:${password}@doodle-book.dkjgmaw.mongodb.net/DoodleBook`
    await mongoose.connect(url).then(() => {
        console.log('connected successfully')
    })
}
module.exports = connect;
