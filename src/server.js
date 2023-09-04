const express = require('express')
const DB = require('./mongoose_connect')
const axios = require('axios')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.get('/fetch_joke', async (req, res) => {
    try {
        
        const no_of_jokes = 3;

        for (let i = 0; i < no_of_jokes; i++) {
            const fetched_data = await axios.get('https://official-joke-api.appspot.com/random_joke');
            const output = fetched_data.data;

            // Create a new joke instance inside the loop
            const newJoke = {
                joke: output.setup,
                punchline: output.punchline,
                id: i
            };
            const addData = new DB(newJoke);
            await addData.save();
        }
        console.log("Jokes fetched and saved successfully...");
        const data_sent = await DB.find({});
        res.json(data_sent); 
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
    
});
app.listen(3000, () => {
    console.log("App successfully started...");
});
