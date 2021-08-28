const db = require("croxydb");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = fynx.prefix
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
let eklenti = new Discord.MessageEmbed()  
.setAuthor(`BRK Moderasyon Komutları`, client.user.avatarURL())
.setThumbnail(message.author.displayAvatarURL({dynamic : true}))
.setImage('https://cdn.glitch.com/9d614440-7abd-4f7e-962c-3d7d43fd903e%2Fstandard.gif?v=1617453250882')
.setColor('#f6ff00')
.setDescription(` BRK botumuzu eklemek için \`${prefix}botdavet\` yazabilirsiniz.`)
.addField(`<a:kalkan: __Jail Log__`,` \`${prefix}jail-kanal ayarla\` Jail Log Kanalını Ayarlarsınız.`,true)
.addField(` __Jail Yetkili Rol__`,` \`${prefix}jail-yetkilisi ayarla \` Sadece Kimler Jail Atabilir?`,true)
.addField(` __Jail Rolü__`,` \`${prefix}jail-rol ayarla \` Jail Verilecek Rol.`,true)
.addField(` __Jail__`,` \`${prefix}jail @üye <10s,10m,10h,10d> sebep \` Kişiye Jail Rolünü Verirsiniz.`,true)
.addField(` __Mute Log__`,` \`${prefix}mute-log #kanal \` Mute Log Kanalı Ayarlarsınız.`,true)
.addField(` __Mute Log Kapat__`,` \`${prefix}mute-log-kapat \` Mute Log Kanalını Sıfırlar.`,true)
.addField(` __Mute Yetkili Rol__`,` \`${prefix}mute-yetkili-rol <@rol> \` Sadece Kimler Mute Atabilir?`,true)
.addField(` __Mute Yetkili Rol Sil__`,` \`${prefix}muteyetki-sil \` Otomatik Selamlamayı Açar/Kapatır.`,true)
.addField(` __Mute__`,` \`${prefix}mute <@üye> <1s> <1m> <1h> <1d> \` Otomatik Selamlamayı Açar/Kapatır.`,true)
.addField(` __Sunucu Paneli__`,` \`${prefix}panel-kur\` Sunucu Kanallarını Açar`,true)
.addField(` __Paneli Kaldır__`,` \`${prefix}panel-sil\` Panel Kanallarını Siler`,true)
.addField(` __Bilgilendirme__`,` \`${prefix}botdavet\` | BRK'yi Sunucunuza Davet Edersiniz\n \`${prefix}istatistik\` | Botun İstatistiklerini Gösterir `)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["moderasyon3","ayarlar3"], 
    permLevel: 0
  };
  exports.help = {
    name: 'moderasyon3'
  }; 
  