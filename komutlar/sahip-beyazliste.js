const Discord = require('discord.js');
const db = require("croxydb");
const ayarlar = require('../ayarlar.json')
exports.run = async(cclient, message, args) => {

if(message.author.id !== "751717933700349972") return message.channel.send(" Bu komutu sadece sahiplerim kullanabilir.")

let cuser = message.mentions.users.first() || cclient.users.cache.get(args[0])
if(!cuser) return message.channel.send(" Bir kullanıcı belirtmelisin!")

message.channel.send(" **"+cuser.tag+"** kullanıcısı başarıyla karalisteden çıkarıldı.")
const westra = new Discord.MessageEmbed()
.setColor("#f6ff00")
.setTimestamp()
.setDescription(` **${cuser.tag}** kullanıcısı karalisteden çıkarıldı.`)
  cclient.channels.cache.get("880366764272254996").send(westra)
db.delete(`ckaraliste.${cuser.id}`)

}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'beyazliste',
    description: 'Türkiyenin Saatini Gösterir',
    usage: 'gç'
  };