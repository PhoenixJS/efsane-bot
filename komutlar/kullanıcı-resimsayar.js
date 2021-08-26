const Discord = require('discord.js');
const ayarlar = require("../ayarlar.json")
const db = require('croxydb');

const moment = require('moment')
//DarkCode
const client = new Discord.Client();
exports.run = async(client, message, args) => {
  //DarkCode Kodu
//DarkCode Kodu
let user = message.mentions.users.first() || message.member
//DarkCode
let k =  db.fetch(`msayaraz_${message.guild.id}_${message.author.id}`) 
//DarkCode
let b =  db.fetch(`msayarfazla_${message.guild.id}_${message.author.id}`) 

if(!k) k = 0

if(!b)  b = 0 

let sonuc = k+b  

const resim = new Discord.MessageEmbed()
.setColor('#f6ff00')
.setDescription("<@!"+message.author.id+">,Toplam **"+sonuc+"** Mesajın İçinden , **"+k+"** Gif/Pp Atmış ")
message.channel.send(resim)
};
          
     
  
exports.conf = {

  enabled: true,

  guildOnly: true,

  aliases: [],

  permLevel: 0

};
//DarkCode
exports.help = {

  name: 'resim-sayar',

  description: '',

  usage: 'resim-sayar'

};