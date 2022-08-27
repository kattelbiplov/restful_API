const express = require('express')
require("../src/database/connection");

const SurveyRank = require('../src/models/data');

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json);
app.get('/', (req, res) => {
    res.send("<h1>hehehhe</h1>")
})


app.post('/survey', async(req, res) => {
    try {
        const surveydata = new SurveyRank(req.body);
        console.log(req.body);
        const insertdata = await surveydata.save();
        res.send(insertdata)
    } catch (e) {
        console.log(e)
    }
})

app.listen(port, () => {
    console.log(`server is running in port ${port}`);
})