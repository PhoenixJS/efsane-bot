const Discord = require('discord.js');
const db = require('croxydb')
const ayarlar = require("../ayarlar.json")
exports.run = async (client, message) => {
    let karaliste = db.fetch(`ckaraliste.${message.author.id}`)
 const westraben = new Discord.MessageEmbed()
 .setColor("#f6ff00")
 .setDescription(` **${karaliste}** sebebiyle karalisteye alınmışsın!\nBeyaz listeye alınmak istiyorsan [BURAYA](https://discord.gg/kqaBAxkkuX) gelebilirsin!`)
  if(karaliste) 
    return message.channel.send(westraben)
  
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
	if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Yetkiniz Bulunmamaktadır!');
    let toplamuye = message.guild.channels.cache.find(x =>(x.name).startsWith("Toplam Üye •"))
   let aktifüye = message.guild.channels.cache.find(x =>(x.name).startsWith("Aktif Üye •"))
   let botlar = message.guild.channels.cache.find(x =>(x.name).startsWith("Botlar •"))
   let rekor = message.guild.channels.cache.find(x =>(x.name).startsWith("Rekor Aktiflik •"))
   let son = message.guild.channels.cache.find(x =>(x.name).startsWith("Son Üye •"))
   let ses = message.guild.channels.cache.find(x =>(x.name).startsWith("Seslideki Üye •"))
   let sunucu = message.guild.channels.cache.find(x =>(x.name).startsWith(`${message.guild.name}`));
   sunucu.delete()
 toplamuye.delete()
  aktifüye.delete()
  botlar.delete()
  rekor.delete()
  son.delete()
  ses.delete()
   
  db.delete(`sunucupanel.${message.guild.id}`)
    message.channel.send(`Panel Sıfırlandı`)
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'panel-sil', 
  description: 'Botu yeniden başlatır',
  usage: 'reboot'
};