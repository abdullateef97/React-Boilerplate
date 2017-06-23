const express = require('express');
const path = require('path')
let app = express();
const port = 3000;
app.use(express.static(path.join(__dirname,'public')));






app.listen(port,function(){
    console.log('connected to react on port 3000');
})

