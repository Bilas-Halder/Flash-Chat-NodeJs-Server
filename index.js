const express = require('express');
require('dotenv').config();
var http = require('http');
// const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

var server = http.createServer(app);

var io = require('socket.io')(server);

// const ObjectId = require('mongodb').ObjectId;
// const { ObjectID } = require('bson');



//middleWare
// app.use(cors());
app.use(express.json());


io.on('connection',(socket)=>{
    console.log('Connected...');
    console.log(socket.id,' has joined.');

    socket.on('/test',(msg)=>{
        console.log(msg);
    });

});

server.listen(port,'0.0.0.0',()=>{
    console.log('Server is Started...');
});