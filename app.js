const express = require('express')
var bodyParser = require('body-parser')
const app = express()

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies
const data = [
    "First Data",
    "Second Data"
]

app.get('/',(req,res)=> {
    let ul = "<ul>"
    ul += data.map((v)=>"<li>"+v+"</li>").join('')
    ul += "</ul>"
    let form = "<form action='/add' method='POST'>"+
                    "<input type='text' name='info'/>"+
                    "<input type='submit' name='submit' value='Add'/>"+
               "</form>"
    res.send("<h1>Hellow World!</h1> <br/>My first express App<br/>"+ul+form)
})  

app.post('/add',(req,res)=> {
    console.log(req)
    data.push(req.body.info)
    res.statusCode = 302;
    res.setHeader("Location", "/");
    res.end();
})

app.listen(3000, ()=> console.log("My first Exoress App running on port 3000"))