const Discord = require('discord.js');
const ayarlar = require("../ayarlar.json")
exports.run = (client, message) => {
  
  const davet = new Discord.MessageEmbed()
  .setColor('#f6ff00')
  .setThumbnail('https://media.discordapp.net/attachments/720029424216440923/735255651638313061/727894683061321759.gif')
  .setDescription(`** BRK Bot Davet Linki Ve Destek Sunucusu **

**[Bot Davet](https://discord.com/api/oauth2/authorize?client_id=877628391031988266&permissions=261993005055&scope=bot)**
**[Destek Sunucusu](https://discord.gg/tahsineren)** 
**[Bot Sitesi](https://brkbot.glitch.me)**



`)
  message.channel.send(davet)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: "botdavet"
}