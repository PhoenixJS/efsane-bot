const Discord = require('discord.js');
const DabiImages = require("dabi-images");
const DabiClient = new DabiImages.Client();
const data = require('croxydb')


exports.run = async (client, message, args) => {
if(message.channel.nsfw == false) return message.channel.send(new Discord.MessageEmbed()
                                                              .setTitle('Bir hata oldu!')
.setImage('https://cdn.discordapp.com/attachments/773087334140739597/773546087504019486/Adsz.png')
                                                              .setDescription(`${message.author} **Kanal __NSFW__ olarak aktif değil. Kontrol et!**`).
          setColor('#00001'))
if(await data.fetch(`slm.${message.author.id}.${message.guild.id}.ass`)) return message.channel.send(new Discord.MessageEmbed().setColor('#00001').setDescription(`**2 saniyenin altında hızlı kullanamazsın!**`));
DabiClient.nsfw.hentai.feet().then(json => {
message.channel.send(new Discord.MessageAttachment(json.url));
data.set(`slm.${message.author.id}.${message.guild.id}.feet`, 'spallers');
setTimeout(() => {
data.delete(`slm.${message.author.id}.${message.guild.id}.feet`)
}, 2000);
})
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'hentai-feet'
};