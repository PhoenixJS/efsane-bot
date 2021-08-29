const Discord = require('discord.js');
const db = require('croxydb');
const moment = require('moment')
const client = new Discord.Client();
const ayarlar = require("../ayarlar.json")
exports.run = async(client, message, args) => {

let user = message.mentions.users.first() || message.member
let k =  db.fetch(`reklam_${message.guild.id}_${message.author.id}`) 
const mesaj = new Discord.MessageEmbed()
.setColor('#f6ff00')
.setDescription("<@!"+message.author.id+">, Bu Sunucuda Toplam **"+k+"** Kere Reklam Yapmışsın!")
message.channel.send(mesaj)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'reklam-sayar',
  description: '',
  usage: 'mesaj-sayar'
};