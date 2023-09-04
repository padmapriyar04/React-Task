const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/demo',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('Connection successful')
}).catch((error)=>{
    console.log("Connection failed")
})

const demoSchema = new mongoose.Schema({
    joke: String,
    punchline: String,
    id: Number
});
const demo = mongoose.model('Demo',demoSchema);
module.exports = demo;