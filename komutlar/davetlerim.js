const discord = require('discord.js')
const ayarlar = require("../ayarlar.json")
const db = require('croxydb');

exports.run = async(client, message, args) => {
  let karaliste = db.fetch(`ckaraliste.${message.author.id}`)
 const westraben = new discord.MessageEmbed()
 .setColor(`RED`)
 .setDescription(`**${karaliste}** sebebiyle karalisteye alınmışsın!\nBeyaz listeye alınmak istiyorsan [BURAYA](https://discord.gg/kqaBAxkkuX) gelebilirsin!`)
  if(karaliste) 
    return message.channel.send(westraben)

        if(db.fetch(`bakim`)) {
  const bakim = new discord.MessageEmbed()
  .setColor("#f6ff00")
.setThumbnail(message.author.displayAvatarURL({dynamic : true}))
  .setTitle('Üzgünüm Bot Bakımda')
  .addField('Bot Şuan Bakımdadır Lütfen Bekleyin.','Bot Ne Durumda Yada Botla İlgili Güncelleme Ve Duyurular İçin Destek Sunucumuza Gelmeyi Unutmayınız.')
  .addField('İşte Destek Sunucum',"[Destek Sunucusu](https://discord.gg/kqaBAxkkuX)")
  .setFooter('Üzgünüm...')
  .setImage('https://lh3.googleusercontent.com/proxy/gAN4I19oqqabXd_VIiwg5or-ITh4XxJTRNJA1ot0EIHPiBpxC74Atj4wNIcFes1N3VcE8WnOk6fIN29BChqNbj4lj9dIF2jiI7MBV6U8v842LA')
if(message.author.id != "627803211348312065") return message.channel.send(bakim)

}

  let davetlerim = await db.fetch(`davet_${message.author.id}_${message.guild.id}`)
  var user = message.mentions.users.first() || message.author;

const embed = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())
.setTitle(`${client.user.username} - Davetlerim`)
.setColor('#f6ff00')
.setDescription(`Davet Sayım: **${davetlerim ? davetlerim : "0"}**`)
.setThumbnail(user.avatarURL())
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
message.channel.send(embed) 

}
exports.conf = {
  name: true,
  guildonly: false,
  aliases: [],
  permlevel: 0
}
exports.help = {
  name: 'davetlerim'
}