var express = require("express");
var app = express();
app.get("/", function (res, req) {
    res.send('<html><body><h1>Hello World</h1></body></html>');
});

app.post('/submit-data', function (res, req) {
    res.send('POST sendrequest');
});
app.put('/update-data', function (res, req) {
    res.send('PUT Request');
});

app.delete('/delete-data', function (res, req) {
    res.send('DELETE Request');
});

var server = app.listen(5000, function () {
    console.log('Node server is running ...');
});