//Copyright, Daniel parr, 01/07/2017
//Use or manipulation of this code is not allowed.
//To reuse any code, email me at daniel.parr@outlook.com
//The main question is, how did you get here?

var now = require('performance-now');
var _ = require('underscore');

module.exports = function(){

    var client = this;

    //Initialization
    this.initiate = function(){
        //Send the connection handshake packet to the client.
        client.socket.write(packet.build(["HELLO", now().toString()]));
        console.log('client initiated')
    };

    //Client Methods
    this.enterroom = function(selected_room){
        maps[selected_room].clients.forEach(function(otherClient){
            otherClient.socket.write(packet.build(["ENTER", client.user.username, client.user.pos_x, client.user.pos_y, client.user.health, client.user.attack, client.user.defense, client.user.gold, client.user.crystals, client.user.level]))
        })
        maps[selected_room].clients.push(client);
    };

    this.broadcastroom = function(packetData){

        maps[client.user.current_room].clients.forEach(function(otherClient){

            if(otherClient.user.username != client.user.username){
                otherClient.socket.write(packetData);
            };

        })

    };

    //Socket Stuff
    this.data = function(data){
        packet.parse(client, data);
    };

    this.error = function(err){
        console.log("client error " + err.toString());
    };

    this.end = function(){
        console.log("client closed");
        c.user.save();
    };
}