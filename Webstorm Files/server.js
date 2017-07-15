//Copyright, Daniel parr, 01/07/2017
//Use or manipulation of this code is not allowed.
//To reuse any code, email me at daniel.parr@outlook.com
//The main question is, how did you get here?

//Import Required Libraries

require(__dirname + '/Resources/config.js');
var fs = require('fs');
var net = require('net');
require('./packet.js')

//Load the initializers
var init_files = fs.readdirSync(__dirname + "/Initializers");
init_files.forEach(function(initFile){
    console.log('Loading Initializer: ' + initFile);
    require(__dirname + "/Initializers/" + initFile);
});

//Load the models
var model_files = fs.readdirSync(__dirname + "/Models");
model_files.forEach(function(modelFile){
    console.log('Loading Model: ' + modelFile);
    require(__dirname + "/Models/" + modelFile);
});

//Load model_files maps
maps = {};
var map_files = fs.readdirSync(config.data_paths.maps);
map_files.forEach(function(mapFile){
    console.log('Loading Map: ' + mapFile);
    var map = require(config.data_paths.maps + mapFile);
    maps[map.room] = map
});

net.createServer(function(socket){
    console.log("socket connected");
    var c_inst = new require('./client.js');
    var thisClient = new c_inst();
    thisClient.socket = socket;
    thisClient.initiate();

    socket.on('error', thisClient.error);

    socket.on('end', thisClient.end);

    socket.on('data', thisClient.data);

}).listen(config.port);

console.log();
console.log("------ Server is starting ------");
console.log();
console.log("Server: " + config.name);
console.log("Initialization Completed, Server has started on port: " + config.port);
console.log("Server IP: "+ config.ip);
console.log("Environment: " + config.environment);
console.log("Server version: " + config.version);
console.log("Max players: " + config.max_player);
console.log();
console.log("------ Server is now live ------");
console.log();