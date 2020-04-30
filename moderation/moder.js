const Discord = require('discord.js');
const Client = new Discord.Client();
let config = require('./config.json')
let token = config.token;
let prefix = config.prefix;

Client.on('ready', () => {
	console.log("Moderation is ready")
})

Client.on('message', async message => {
	let msg = message.content.toLowerCase();
	let badWords = ["Бля", "Блять", "Пизда", "пизда", "бля", "блять", "Блядунья", "блядунья", "Пидорас", "пидорас", "пидор", "Пидор", "Мамкаёб", "мамкаёб", "Пидорасина", "пидорасина", "Ебать", "ебать", "трехмандоблядская", "Трехмандоблядская", "пиздопроебина", "Пиздопроебина", "Ёпта", "ёпта", "Ёптыть", "ёптыть", "Пиздец", "пиздец", "Ахуеть", "ахуеть"];
	let foundInText = false;
	for(var i in badWords) {
		if(msg.includes(badWords[i].toLowerCase())) foundInText=true;
	}
	if(foundInText) {
		message.delete();
		const embed = new Discord.MessageEmbed()
		embed.setColor('#a5124f')
		embed.setDescription("А-та-та, " + message.author.username + ", плохие словечки используем")
		message.author.send(embed)
	}
})

Client.login(token)