const express = require('express')
const app = express()

/*
    For the purpose of making the testing easier, we've just put this
    in a seperate file.
*/
const myLib = require('./lib')


app.get('/', (req, res) => res.send(myLib.helloWorld()))
console.log("HELLO WORLD");
app.listen(6000, () => console.log('Example app listening on port 6000!'))

