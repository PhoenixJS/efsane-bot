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
.setAuthor(`BRK Kullanıcı Komutları`, client.user.avatarURL())
.setThumbnail(message.author.displayAvatarURL({dynamic : true}))
.setImage('https://cdn.glitch.com/9d614440-7abd-4f7e-962c-3d7d43fd903e%2Fstandard.gif?v=1617453250882')
.setColor('#f6ff00')
.setDescription(`BRK botumuzu eklemek için \`${prefix}botdavet\` yazabilirsiniz.`)  
.addField(`<a:kalkan:8 __Profil Resmi__`,` \`${prefix}pp\` Avatarınızı Atar`,true)
.addField(` __Tavsiye__`,` \`${prefix}tavsiye\` Biz Yapımcılara Tavsiye Verirsiniz.`,true)
.addField(` __Bug Bildir__`,` \`${prefix}bug-bildir\` Botta Bug Varsa Biz Yapımcılara İletir.`,true)
.addField(` __İstek__`,` \`${prefix}istek\` İsteğinizi Belirtirsiniz.(SUNUCUDA)`,true)
.addField(` __Düello__`,` \`${prefix}düello <@üye>\` Düello Yaparsınız.`,true)
.addField(` __Mesaj Sayacı__`,` \`${prefix}mesaj-sayar\` Toplam Mesaj Sayınızı Gösterir.`,true)
.addField(` __Resim Sayacı__`,` \`${prefix}resim-sayar\` Toplam Resim Sayınızı Gösterir.`,true)
.addField(` __Küfür Sayacı__`,` \`${prefix}küfür-sayar\` Toplam Küfür Sayınızı Gösterir.`,true)
.addField(` __Reklam Sayacı__`,` \`${prefix}reklam-sayar\` Toplam Reklam Sayınızı Gösterir.`,true)
.addField(` __Kullanıcı Bilgi__`,` \`${prefix}kullanıcı-bilgi <@üye>\` Kullanıcı'nın Bilgilerini Gösterir.`,true)
.addField(` __Sunucu Bilgi__`,` \`${prefix}sunucu-bilgi\` Sunucu'nun Bilgilerini Gösterir.`,true)
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
    name: 'kullanıcı'
  }; 
  