const Discord = require('discord.js')
const db = require("croxydb");
const ayarlar = require('../ayarlar.json')
exports.run = (client, message, args) => {
let prefix = ayarlar.prefix
      if(db.fetch(`bakim`)) {
  const bakim = new Discord.MessageEmbed()
  .setColor("#f6ff00")
.setThumbnail(message.author.displayAvatarURL({dynamic : true}))
  .setTitle('Üzgünüm Bot Bakımda')
  .addField('Bot Şuan Bakımdadır Lütfen Bekleyin.','Bot Ne Durumda Yada Botla İlgili Güncelleme Ve Duyurular İçin Destek Sunucumuza Gelmeyi Unutmayınız.')
  .addField('İşte Destek Sunucum',"[Destek Sunucusu](https://discord.gg/kqaBAxkkuX)")
  .setFooter('Üzgünüm...')
  .setImage('https://lh3.googleusercontent.com/proxy/gAN4I19oqqabXd_VIiwg5or-ITh4XxJTRNJA1ot0EIHPiBpxC74Atj4wNIcFes1N3VcE8WnOk6fIN29BChqNbj4lj9dIF2jiI7MBV6U8v842LA')
if(message.author.id != "627803211348312065") return message.channel.send(bakim)

}
  
  if(message.author.id != "627803211348312065") return //Bot sahip id
  
  if(!args[0]) return message.channel.send(`**Bakım modunu açmak için ${prefix}bakım aç**`)
  
  if(args[0] === 'aç') {
    if(db.fetch(`bakim`)) return message.channel.send('**Bakım modu zaten açık**')
    message.channel.send(' | **Bakım modu açıldı.**')
    db.set(`bakim`, 'acik')
  }
  if(args[0] === 'kapat'){
    if(!db.fetch(`bakim`)) return message.channel.send('**Bakım modu zaten kapalı.**')
    message.channel.send('| **Bakım modu kapatıldı.**')
    db.delete(`bakim`)
  }
  
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'bakım'
}


///////////////////////////////////////

/////////////