const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const token = config.token;
const prefix = config.prefix;

client.on('ready', () => {
	console.log('Mute/Unmute is ready')
})

client.on('message', msg => {
	const args = msg.content.slice(prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
	const embed = new Discord.RichEmbed()
	if(command === 'mute') {
		if(msg.member.permissions.has('MANAGE_ROLES')) {
			let user = msg.mentions.members.first();
			if(!user) {
				embed.setColor('#a5124f')
				embed.setDescription('**Человек не был упомянут**')
				msg.channel.send(embed);
				return;
			}
			else {
				user.addRole('701991941667029004')
				embed.setColor('#a5124f')
				embed.setAuthor(`Был замучен ${user.displayName}`, 'https://i.imgur.com/CG5VxxT.png')
				embed.addField(name='Замутил', value=msg.author.username, true)
				if(!msg.content.split(" ")[2]) {
					embed.addField(name='Причина', value='Причина не указана', true)
				}else {
					embed.addField(name='Причина', value=msg.content.split(" ")[2], true)
				}
				msg.channel.send(embed);
			}
		}	
	}	
	if(command === 'unmute') {
		if(msg.member.permissions.has('MANAGE_ROLES')) {
			let user = msg.mentions.members.first();
			if(!user) {
				embed.setColor('#a5124f')
				embed.setDescription('**Человек не был упомянут**')
				msg.channel.send(embed);
				return;
			}
			else {
				user.removeRole('701991941667029004')
				embed.setColor('#a5124f')
				embed.setAuthor(`Был размучен ${user.displayName}`, 'https://i.imgur.com/cUvbL8b.png')
				embed.addField(name='Размутил', value=msg.author.username, true)
				if(!msg.content.split(" ")[2]) {
					embed.addField(name='Причина', value='Причина не указана', true)
				}
				else {
					embed.addField(name='Причина', value=msg.content.split(" ")[2], true)
				}
				msg.channel.send(embed)
			}
		}
	}
})

client.login(token)
