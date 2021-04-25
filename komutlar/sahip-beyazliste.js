const Discord = require('discord.js');
const db = require("croxydb");

exports.run = async(cclient, message, args) => {

if(message.author.id !== "477189482206986240") return message.channel.send("<:nope:779036675338010654> Bu komutu sadece sahiplerim kullanabilir.")

let cuser = message.mentions.users.first() || cclient.users.cache.get(args[0])
if(!cuser) return message.channel.send("<:nope:779036675338010654> Bir kullanıcı belirtmelisin!")

message.channel.send("<a:tmdir:778774341357797378> **"+cuser.tag+"** kullanıcısı başarıyla karalisteden çıkarıldı.")
const westra = new Discord.MessageEmbed()
.setColor("#f6ff00")
.setTimestamp()
.setDescription(`<a:tmdir:778774341357797378> **${cuser.tag}** kullanıcısı karalisteden çıkarıldı.`)
  cclient.channels.cache.get("781591808890896394").send(westra)
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