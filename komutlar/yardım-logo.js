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
.setAuthor(`BRK Logo Komutları`, client.user.avatarURL())
.setThumbnail(message.author.displayAvatarURL({dynamic : true}))
.setImage('https://cdn.glitch.com/9d614440-7abd-4f7e-962c-3d7d43fd903e%2Fstandard.gif?v=1617453250882')
.setColor('#f6ff00')
.setDescription(` BRK botumuzu eklemek için \`${prefix}botdavet\` yazabilirsiniz.`)  
.addField(` __Ejderha__`,` \`${prefix}ejderha <yazi>\` Ejderha Logo Atar`,true)
.addField(` __Vip__`, `\`${prefix}vip <yazi>\` Vip Logo Atar`,true)
.addField(` __Alev__`,`\`${prefix}alev <yazi>\` Alev Logo Atar`,true)
.addField(` __Gemi__`,`\`${prefix}gemi <yazi>\` Gemi Logo Atar`,true)
.addField(` __Duckets__`,` \`${prefix}duckets <yazi>\` Duckets Logo Atar`,true)
.addField(` __Buz__`,` \`${prefix}buz <yazi>\` Buz Logo Atar`,true)
.addField(` __Arrow__`,` \`${prefix}arrow <yazi>\` Arrow Logo Atar`,true)
.addField(` __Neon__`,` \`${prefix}neon <yazi>\` Neon Logo Atar`,true)
.addField(` __Fx__`,` \`${prefix}fx <yazi>\` Fx Logo Atar`,true)
.addField(` __Mekanik__`,` \`${prefix}mekanik <yazi>\` Mekanik Logo Atar`,true)
.addField(` __Metal__`,` \`${prefix}metal <yazi>\` Metal Logo Atar`,true)
.addField(` __Punk__`,` \`${prefix}punk <yazi>\` Punk Logo Atar`,true)
.addField(` __Sci-fi__`,` \`${prefix}sci-fi <yazi>\`Sci-fi logo atar.`,true)
.addField(` __Siyah__`,` \`${prefix}siyah <yazi>\`Siyah logo atar.`,true)
.addField(` __Taş__`,` \`${prefix}taş <yazi>\`Taş logo atar.`,true)
.addField(` __Bilgilendirme__`,` \`${prefix}botdavet\` | BRK'yi Sunucunuza Davet Edersiniz\n \`${prefix}istatistik\` | Botun İstatistiklerini Gösterir `)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["logo","ayarlar"], 
    permLevel: 0
  };
  exports.help = {
    name: 'logo'
  }; 
  