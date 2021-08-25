const db = require("croxydb");
const Discord = require('discord.js');
const spallers = require("../ayarlar.json");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix
exports.run = async (client, message, args) => { 
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
let eklenti = new Discord.MessageEmbed()  
.setAuthor('Spallers Yardım Menüsü',message.author.displayAvatarURL({dynamic : true}))
.setThumbnail('')
.setImage("https://cdn.glitch.com/9d614440-7abd-4f7e-962c-3d7d43fd903e%2Fstandard.gif?v=1617453250882")
.setColor('#f6ff00')
.addField( `**╔═══════════◥◣❖◢◤════════════╗**`,
    ` **║ Bilgilendirme.**
**║ [Botu Davet Et](https://discord.com/oauth2/authorize?client_id=778778531018571776&scope=bot&permissions=8)**
**║ [Destek Sunucusu](https://discord.gg/aloysha)**
**║ [Bot Sitesi]()**
**╚═══════════◥◣❖◢◤════════════╝**
   `)
.addField(`<a:Cizgi:835661237471150080>__Kayıt Komutları__`,` \`${prefix}kayıt\``,true)
.addField(`<a:Cizgi:835661237471150080>__Seviye Komutları__`,` \`${prefix}seviye\` `,true)
.addField(`<a:Cizgi:835661237471150080>__Yetkili Komutları__`,` \`${prefix}moderasyon\` `,true)
.addField(`<a:Cizgi:835661237471150080>__Logo Komutları__`,` \`${prefix}logo\` `,true)
.addField(`<a:Cizgi:835661237471150080> __Botlist Komutları__`,` \`${prefix}botlist\` `,true)
.addField(`<a:Cizgi:835661237471150080> __Guard Komutları__`,` \`${prefix}guard\` `,true)
.addField(`<a:Cizgi:835661237471150080> __Gif Komutları__`,` \`${prefix}gif\` `,true)
.addField(`<a:Cizgi:835661237471150080> __Güvenlik Komutları__`,` \`${prefix}güvenlik\` `,true)
.addField(`<a:Cizgi:835661237471150080> __Davet Komutları__`,` \`${prefix}davet\` `,true)
.addField(`<a:Cizgi:835661237471150080> __Profil Komutları__`,` \`${prefix}profil\` `,true)
.addField(`<a:Cizgi:835661237471150080> __Kullanıcı Komutları__`,` \`${prefix}kullanıcı\` `,true)
.addField(`<a:Cizgi:835661237471150080> __Nsfw Komutları__`,` \`s*nsfw\` `,true)
.addField(`<a:Cizgi:835661237471150080> __Hazır Sunucu Komutları__`,` \`s*sunucukur\` `,true)

.addField(`╔═══════════◥◣❖◢◤════════════╗`,
`**║  \`${prefix}botdavet\` __Botu Davet Edebilirsiniz!__**
**║  \`${prefix}istatistik\` __İstatistiklerini Göre Bilirsiniz.__**
**║ \`${prefix}tavsiye\` __Bizlere Tavsiye Verirsiniz.__**
**║ \`${prefix}bug-bildir\` __Bot Hatalarını Bildirirsiniz.__**
**╚═══════════◥◣❖◢◤════════════╝**
`)
message.channel.send(eklenti)
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["yardım","help"], 
    permLevel: 0
  };
  exports.help = {
    name: 'yardım'
  }; 
  