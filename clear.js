const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const token = config.token;
const prefix = config.prefix;

const embed = new Discord.RichEmbed()

client.on('ready', () => {
	console.log('Command clear is ready')
})

client.on('message', msg => {
	const args1 = msg.content.slice(prefix.length).trim().split(/ +/g);
	const command = args1.shift().toLowerCase();
	let args = msg.content.substring(prefix.lenght).split(" ")
	if(command === 'clear') {
		if(msg.member.roles.has('701151619835887757')) {
			if(!args[1]) {
				embed.setColor('#a5124f')
				embed.setDescription('**Ты не ввёл число**')

				msg.channel.send(embed)
			}
			msg.channel.bulkDelete(args[1])
		}
		else if(msg.member.roles.has('701151920840245299')) {
			if(!args[1]) {
				embed.setColor('#a5124f')
				embed.setDescription('**Ты не ввёл число**')

				msg.channel.send(embed)
			}
			msg.channel.bulkDelete(args[1])
		} 
		else {
			embed.setColor('#a5124f')
			embed.setDescription('**У тебя нет роли Moderator и/или Leader**')

			msg.channel.send(embed)
		}
	}
	
})
	

client.login(token)