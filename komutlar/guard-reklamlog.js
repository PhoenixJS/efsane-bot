const db = require('croxydb');
        const Discord = require("discord.js") 
exports.run = (client, message) => {
    let karaliste = db.fetch(`ckaraliste.${message.author.id}`)
 const westraben = new Discord.MessageEmbed()
 .setColor("#f6ff00")
 .setDescription(`<a:siren:778777832976416778> **${karaliste}** sebebiyle karalisteye alınmışsın!\nBeyaz listeye alınmak istiyorsan [BURAYA](https://discord.gg/tuG87ZadFu) gelebilirsin!`)
  if(karaliste) 
    return message.channel.send(westraben)
   
       if(db.fetch(`bakim`)) {
  const bakim = new Discord.MessageEmbed()
  .setColor("#f6ff00")
.setThumbnail(message.author.displayAvatarURL({dynamic : true}))
  .setTitle('Üzgünüm Bot Bakımda')
  .addField('Bot Şuan Bakımdadır Lütfen Bekleyin.','Bot Ne Durumda Yada Botla İlgili Güncelleme Ve Duyurular İçin Destek Sunucumuza Gelmeyi Unutmayınız.')
  .addField('İşte Destek Sunucum',"[Destek Sunucusu](https://discord.gg/tuG87ZadFu)")
  .setFooter('Üzgünüm...')
  .setImage('https://lh3.googleusercontent.com/proxy/gAN4I19oqqabXd_VIiwg5or-ITh4XxJTRNJA1ot0EIHPiBpxC74Atj4wNIcFes1N3VcE8WnOk6fIN29BChqNbj4lj9dIF2jiI7MBV6U8v842LA')
if(message.author.id != "477189482206986240") return message.channel.send(bakim)

}
    let reklam = db.fetch(`reklam.${message.guild.id}.durum`)
  const member3 = new Discord.MessageEmbed()
  .setColor('#f6ff00')
  .setDescription(`<a:siren:778777832976416778> **HATA** <a:siren:778777832976416778> - Bu sunucuda yetkili değilsin.`)
        if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send(member3)
    const member = new Discord.MessageEmbed()
.setColor('#f6ff00')
.setDescription(`<a:siren:778777832976416778> **HATA** <a:siren:778777832976416778> - Bir kanal etiketle.`)
      if(reklam) {
        let kanal = message.mentions.channels.first()
        if(!kanal) return message.channel.send(member)
      db.set(`reklam.${message.guild.id}.kanal`,kanal.id)
      message.channel.send(`<a:tmdir:778774341357797378> **Başarılı ile reklam log kanalı ayarlandı.** `).then(l => {
      l.delete({timeout: 5000})
    })
    }else{
     message.channel.send(`<a:tmdir:778774341357797378> **Reklam engel açık değil.**`).then(l => {
      l.delete({timeout: 5000})
    })
    }
    }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["reklam-log"],
  permLevel: 0
};

exports.help = {
  name: 'reklamlog',
  description: 'Spallers',
  usage: 'Spallers'
}