const Discord = require('discord.js');
const Client = new Discord.Client();
let config = require('./config.json')
let token = config.token;
let prefix = config.prefix;

Client.on('ready', () => {
	console.log("Hentai is ready")
})

Client.on('message', msg => {
	const args = msg.content.slice(prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
	if(command === 'hentai') {
		const embed = new Discord.MessageEmbed()
		embed.setColor('#a5124f')
		embed.setImage('https://i.imgur.com/24WEjdX.png')
		msg.channel.send(embed)
	}
})

Client.login(token)