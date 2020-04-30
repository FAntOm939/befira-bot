const Discord = require('discord.js');
const client = new Discord.Client();
let config = require('./config.json')
let token = config.token;
let prefix = config.prefix;

const embed = new Discord.RichEmbed()

client.on('ready', () => {
	console.log('Command say is ready')
})

client.on('message', msg => {
	const args = msg.content.slice(prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
	if(command === "say") {
		if(msg.member.roles.has('701151619835887757')) {
			let text = args.join(" ");
			embed.setColor('#a5124f')
			embed.setDescription(text)

			msg.channel.send(embed)
		}else if(msg.member.roles.has('701151920840245299')) {
			let text = args.join(" ");
			embed.setColor('#a5124f')
			embed.setDescription(text)

			msg.channel.send(embed)
		}else {
			embed.setColor('#a5124f')
			embed.setDescription('**У тебя нет роли Moderator или Leader**')

			msg.channel.send(embed)
		}
	}
})

client.login(token)