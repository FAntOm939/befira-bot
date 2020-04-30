const Discord = require('discord.js');
const Client = new Discord.Client();
let config = require('./config.json')
let token = config.token;
let prefix = config.prefix;

Client.on('ready', () => {
	console.log("Command ban is ready")
})

Client.on('message', message => {
	if(!message.guild) return;
	if(message.author === client.user) return;
	if(!message.content)
})