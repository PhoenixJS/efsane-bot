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
.addField(` __Ban Log__`,` \`${prefix}ban-log\` Ban Log Kanalı Ayarlarsınız.`,true)
.addField(` __Ban Yetkili Rol__`,` \`${prefix}ban-yetkili-rol\` Sadece Kimler Banlayabilir?`,true)
.addField(` __Ban__`,` \`${prefix}ban <@üye> <sebep>\` Kişiyi Banlarsınız.`,true)
.addField(` __Ban Kaldır__`,` \`${prefix}unban <KişiID> <Sebep> \` Belirtiğiniz Kişinin Banını Açar.`,true)
.addField(` __Ban Affı__`,` \`${prefix}banaffı \` Bütün Yasaklıların Banını Açar.`,true)
.addField(` __Kick Log__`,` \`${prefix}kick-log\`  Kick Log Kanalı Ayarlarsınız.`,true)
.addField(` __Kick Yetkili Rol__`,` \`${prefix}kick-yetkili-rol\` Sadece Kimler Kick Atabilir?`,true)
.addField(` __Kick__`,` \`${prefix}kick <@üye> <sebep> \` Kişiyi Sunucudan Kicklersiniz.`,true)
.addField(` __Moderasyon3__`,` \`${prefix}moderasyon3 \` | Moderasyon Menüsünün Devamı.`,true)
.addField(` __Bilgilendirme__`,` \`${prefix}botdavet\` | BRK'yi Sunucunuza Davet Edersiniz\n \`${prefix}istatistik\` | Botun İstatistiklerini Gösterir `)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["moderasyon2","ayarlar2"], 
    permLevel: 0
  };
  exports.help = {
    name: 'moderasyon2'
  }; 
  