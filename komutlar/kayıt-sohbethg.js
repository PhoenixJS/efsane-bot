const discord = require('discord.js')
const db = require('croxydb');
const ayarlar = require("../ayarlar.json")
exports.run = async(client, message, args) => {
  let karaliste = db.fetch(`ckaraliste.${message.author.id}`)
 const westraben = new discord.MessageEmbed()
 .setColor(`RED`)
 .setDescription(` **${karaliste}** sebebiyle karalisteye alınmışsın!\nBeyaz listeye alınmak istiyorsan [BURAYA](https://discord.gg/kqaBAxkkuX) gelebilirsin!`)
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

 if (!message.member.hasPermission('ADMINISTRATOR'))
        return message.channel.send('> **Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın! **')
	

if (args[0] === 'sıfırla') {
  let kayıtsohbet = db.fetch(`kayıtsohbet_${message.guild.id}`)
  if (!kayıtsohbet) return message.channel.send(`Sohbete Yazı Zaten Ayarlanmadığı İçin Sıfırlanamaz! `)
  message.channel.send(` | **Sohbet Kanalı Başarıyla Sıfırlandı!**`)
  db.delete(`kayıtsohbet_${message.guild.id}`)
  return;
}

  if (args[0] === 'ayarla') {
let kanal = message.mentions.channels.first()
if(!kanal) return message.channel.send(` | **Sohbet Kanalını Belirtmelisin!** `)

db.set(`kayıtsohbet_${message.guild.id}`, kanal.id)

message.channel.send(` | **Birisi Kayıt Olunca Hoşgeldin Mesajını ${kanal}'a Atacağım!**`)
  }
}
exports.conf = {
  name: true,
  guildonly: false,
  aliases: [],
  permlevel: 0
}
exports.help = {
  name: 'kayıt-mesaj'
}