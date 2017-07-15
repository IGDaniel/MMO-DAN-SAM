//Copyright, Daniel parr, 01/07/2017
//Use or manipulation of this code is not allowed.
//To reuse any code, email me at daniel.parr@outlook.com
//The main question is, how did you get here

var Parser = require('binary-parser').Parser;
var StringOptions = {length: 99, zeroTerminated:true};

module.exports = PacketModels = {
    header: new Parser().skip(1)
        .string("command", StringOptions),

    login: new Parser().skip(1)
        .string("command", StringOptions)
        .string("username", StringOptions)
        .string("password", StringOptions),

    register: new Parser().skip(1)
        .string("command", StringOptions)
        .string("username", StringOptions)
        .string("password", StringOptions),

    pos: new Parser().skip(1)
        .string("command", StringOptions)
        .int32le("target_x", StringOptions)
        .int32le("target_y", StringOptions),

    health: new Parser().skip(1)
        .string("command", StringOptions)
        .int32le("health", StringOptions),

    attack: new Parser().skip(1)
        .string("command", StringOptions)
        .int32le("attack", StringOptions),

    defense: new Parser().skip(1)
        .string("command", StringOptions)
        .int32le("defense", StringOptions),

    gold: new Parser().skip(1)
        .string("command", StringOptions)
        .int32le("gold", StringOptions),

    crystals: new Parser().skip(1)
        .string("command", StringOptions)
        .int32le("crystals", StringOptions),

    level: new Parser().skip(1)
        .string("command", StringOptions)
        .int32le("level", StringOptions)
}
