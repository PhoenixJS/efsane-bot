const db = require("croxydb");
const Discord = require('discord.js');
const data = require 
const ayarlar = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = ayarlar.prefix
    let karaliste = db.fetch(`ckaraliste.${message.author.id}`)
 const westraben = new Discord.MessageEmbed()
 .setColor("#f6ff00")
 .setDescription(` **${karaliste}** sebebiyle karalisteye alınmışsın!\nBeyaz listeye alınmak istiyorsan [BURAYA](https://discord.gg/kqaBAxkkuX) gelebilirsin!`)
  if(karaliste) 
    return message.channel.send(westraben)
  if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setColor('#f6ff00').setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png').setImage('https://cdn.glitch.com/0c8ef551-5187-48a8-9daf-f2cc35630f21%2Fyoneticigif.gif').setTitle('Bir hata oldu!').setDescription(`• \`${prefix}isim-tag\` **kullanmak için,** \`Yönetici\` **yetkisine sahip olman gerekiyor.**`));

if(!args[0])  return message.channel.send(new Discord.MessageEmbed().setColor('#f6ff00').setTitle('Bir hata oldu!').setDescription(`${message.author} Bir **TAG** ve ya **SIMGE** koymayı unuttunuz.`));
if(args[0] === 'kapat') {
data.delete(`tagg.${message.guild.id}`);
return message.channel.send(new Discord.MessageEmbed().setTitle('Bir hata oldu!').setColor('#f6ff00').setDescription('Mesaj tag sistemi başarıyla kapatıldı.'));
} else {
data.set(`tagg.${message.guild.id}`, args[0]);
return message.channel.send(new Discord.MessageEmbed().setTitle('Başarılı!').setColor('#f6ff00').setDescription(`Mesaj tag sistemini başarıyla \`${args[0]}\` olarak seçtiniz.`));
}
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'isim-tag'
};