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
.setThumbnail('https://cdn.discordapp.com/attachments/762400005562302514/785386641597530123/standard_5.gif')
.setImage("https://cdn.discordapp.com/attachments/767544528537649193/782343767943413810/standard_3.gif")
.setColor('#f6ff00')
.addField( `**╔═══════════◥◣❖◢◤════════════╗**`,
    ` **║ Bilgilendirme.**
**║ [Botu Davet Et](https://discord.com/oauth2/authorize?client_id=778778531018571776&scope=bot&permissions=8)**
**║ [Destek Sunucusu](https://discord.gg/3T5SHUD)**
**║ [Bot Sitesi](https://beautiful-sheer-session.glitch.me/index.html)**
**╚═══════════◥◣❖◢◤════════════╝**
   `)
.addField(`<a:yildiz:778774342640730112> __Kayıt Komutları__`,` \`s*kayıt\``,true)
.addField(`<a:yildiz:778774342640730112> __Seviye Komutları__`,` \`s*seviye\` `,true)
.addField(`<a:yildiz:778774342640730112> __Yetkili Komutları__`,` \`s*moderasyon\` `,true)
.addField(`<a:yildiz:778774342640730112> __Logo Komutları__`,` \`s*logo\` `,true)
.addField(`<a:yildiz:778774342640730112> __Botlist Komutları__`,` \`s*botlist\` `,true)
.addField(`<a:yildiz:778774342640730112> __Guard Komutları__`,` \`s*guard\` `,true)
.addField(`<a:yildiz:778774342640730112> __Gif Komutları__`,` \`s*gif\` `,true)
.addField(`<a:yildiz:778774342640730112> __Güvenlik Komutları__`,` \`s*güvenlik\` `,true)
.addField(`<a:yildiz:778774342640730112> __Davet Komutları__`,` \`s*davet\` `,true)
.addField(`<a:yildiz:778774342640730112> __Profil Komutları__`,` \`s*profil\` `,true)
.addField(`<a:yildiz:778774342640730112> __Kullanıcı Komutları__`,` \`s*kullanıcı\` `,true)
.addField(`<a:yildiz:778774342640730112> __Nsfw Komutları__`,` \`s*nsfw\` `,true)
.addField(`<a:yildiz:778774342640730112> __Hazır Sunucu Komutları__`,` \`s*sunucukur\` `,true)

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
  