const express = require('express');

//import express from 'express'

const app = express();

const port = 9000;

app.get('/', (req, res) => { 
    res.send("Hello world");

})

app.listen(port,()  => console.log(`App running on port:${port}`));

