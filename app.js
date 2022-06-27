const port = process.env.port || 8000;
const path = require('path');
const express = require('express');
const app = express();

app.use(express.static('static'));
app.use(express.urlencoded());


app.get('/',(req , res)=>{
    const params = {}
    res.render('home.pug',params);
});

app.get('/contact',(req , res)=>{
    const params = {}
    res.render('contact.pug',params);
});

app.listen(port,()=>{
    console.log(`Dancing website running sucessfully on port ${port}`);
});