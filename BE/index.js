import bodyParser, { json } from "body-parser";
import express from "express";
import fs from "node:fs"
const app = express();
const port = 8000;

// const data = [];

// app.get('/addData', (req, res) => {

//     data.push(Math.random())
//     res.send("successful!");
// })

// app.get('/getData', (req, res) => {
//     res.send(data);
// })

// const data = [];

// app.use(bodyParser.json());

// app.post('/addData', (req, res) => {
//     console.log(req.body, 'request');

//     data.push(req.body);
//     res.send(req.body)
// })

// app.get('/getData', (req, res) => {
//     res.send(data)
// })


app.post('/write', (req, res) => {
    const {body} = req;
    const data = new Uint8Array(Buffer.from(JSON.stringify(body)))
    fs.writeFile("./DATA.txt", data, 'utf8', (err, data) => {
    res.send('success!');
    })
})

app.get('/read', (req, res) => {

    fs.readFile("./DATA.txt", "utf8", function(err, data) {
        res.send(data);
      });
})
  
app.listen(port, () => {
    console.log(`My backend listening on port ${port}`)
})

