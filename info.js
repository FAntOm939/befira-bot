const Discord = require('discord.js');
const client = new Discord.Client();
let config = require('./config.json')
let token = config.token;
let prefix = config.prefix;

client.on('ready', () => {
	console.log("Command info is ready")
})

client.on('message', msg => {
	const args = msg.content.slice(prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
	if(command === 'info') {
		const embed = new Discord.RichEmbed()
			embed.setColor('#a5124f')
			embed.setTitle('Инфо о боте')
			embed.attachFiles(['./Befira_Colour.png'])
			embed.setAuthor('Befira', 'attachment://Befira_Colour.png')
			embed.setThumbnail('attachment://Befira_Colour.png')
			embed.addFields(
				{ name: 'Автор бота', value: 'kun_kun', inline: true},
				{ name: 'Версия бота', value: 'Pre-Alpha 1.1.2', inline: true},
				{ name: 'Steam автора бота', value: 'https://steamcommunity.com/id/kun_kun69/', inline: false}
			)
			embed.setTimestamp()
			embed.setFooter('Befira');
		msg.channel.send(embed)
	}
})

client.login(token)