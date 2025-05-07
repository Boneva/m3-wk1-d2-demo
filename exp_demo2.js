var express = require('express');
var app = express();

app.get('/hello', function(res, res){
    res.setEncoding("Hello World!");
})

app.listen(3000);


