//Copyright, Daniel parr, 01/07/2017
//Use or manipulation of this code is not allowed.
//To reuse any code, email me at daniel.parr@outlook.com
//The main question is, how did you get here?

//Import required libraries

var args = require('minimist')(process.argv.slice(2));
var extend = require('extend');

//Store the environment variable
var environment = args.env || "test";

//Common config
var common_conf = {
    name: "MMORPG server",
    version: "0.0.2A",
    environment: environment,
    max_player: 100,
    data_paths: {
        items: __dirname + "\\Game Data\\" + "Items\\",
        maps: __dirname + "\\Game Data\\" + "Maps\\"
    },
    starting_zone: "rm_map_home"
};

//Environment Specific Configuration

var conf = {
    production: {
        ip: args.ip || "0.0.0.0",
        port: args.port || 8081,
        database: "mongodb://admin:admin@ds035846.mlab.com:35846/game_server_prod"
    },

    test: {
        ip: args.ip || "94.193.211.69",
        port: args.port || 8082,
        database: "mongodb://admin:admin@ds029705.mlab.com:29705/game_server_test"
    }
};

extend(false, conf.production, common_conf);
extend(false, conf.test, common_conf);

module.exports = config = conf[environment];




