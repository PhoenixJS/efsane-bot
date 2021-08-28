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
.setAuthor(`BRK Profil Komutları`, client.user.avatarURL())
.setThumbnail(message.author.displayAvatarURL({dynamic : true}))
.setImage('https://cdn.glitch.com/9d614440-7abd-4f7e-962c-3d7d43fd903e%2Fstandard.gif?v=1617453250882')
.setColor('#f6ff00')
.setDescription(` BRK botumuzu eklemek için \`${prefix}botdavet\` yazabilirsiniz.`)  
.addField(`<a:kalkan: __Bayrak Ayarla__`,` \`${prefix}bayrakayarla\` İstediğiniz Bayrağı Ayarlarsınız.`,true)
.addField(` __Cinsiyet Ayarla__`,` \`${prefix}cinsiyetayarla\` Cinsiyetinizi Ayarlarsınız.`,true)
.addField(` __İsim Ayarla__`,` \`${prefix}isimayarla\` İsminizi Ayarlarsınız.`,true)
.addField(` __Soyisim Ayarla__`,` \`${prefix}soyisimayarla\` Soyisminizi Ayarlarsınız.`,true)
.addField(` __Yaş Ayarla__`,` \`${prefix}yaşayarla\` Yaşınızı Ayarlarsınız.`,true)
.addField(` __Favori Oyun Ayarla__`,` \`${prefix}favorioyun\` Favori Oyununuzu Ayarlarsınız.`,true)
.addField(` __Favori Şarkı Ayarla__`,` \`${prefix}favorişarkı\` Favori Şarkınızı Ayarlarsınız.`,true)
.addField(` __Profilim__`,` \`${prefix}profilim\` Profilinize Bakarsınız.`,true)
.addField(` __Bilgilendirme__`,` \`${prefix}botdavet\` | BRK'yi Sunucunuza Davet Edersiniz\n \`${prefix}istatistik\` | Botun İstatistiklerini Gösterir `)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["moderasyon","ayarlar"], 
    permLevel: 0
  };
  exports.help = {
    name: 'profil'
  }; 
  