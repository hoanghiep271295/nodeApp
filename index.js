var http = require('http');
var readtext = require('./readtext.js');
var writetext = require('./writetext.js');
var express = require('express');
var server = http.createServer(function (req, res) {
    readtext.read('text.txt', (data) => {
        if (req.url === "/") {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(`<html><body><p>This is home Page. ${data}</p></body></html>`);
            res.end();
        }
        if (req.url === "/chat") {
            console.log("chat");
        }
    });
});

server.listen(5000);