const db = require("croxydb");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
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
.setAuthor(`Spallers Moderasyon Komutları`, client.user.avatarURL())
.setThumbnail(message.author.displayAvatarURL({dynamic : true}))
.setImage('https://cdn.discordapp.com/attachments/767544528537649193/782343691221205052/standard.gif')
.setColor('#f6ff00')
.setDescription(` Spallers botumuzu eklemek için \`s*botdavet\` yazabilirsiniz.`)  
.addField(`<:sagok:778774307253518366> __Ejderha__`,` \`s*ejderha <yazi>\` Ejderha Logo Atar`,true)
.addField(`<:sagok:778774307253518366> __Vip__`, `\`s*vip <yazi>\` Vip Logo Atar`,true)
.addField(`<:sagok:778774307253518366> __Alev__`,`\`s*alev <yazi>\` Alev Logo Atar`,true)
.addField(`<:sagok:778774307253518366> __Gemi__`,`\`s*gemi <yazi>\` Gemi Logo Atar`,true)
.addField(`<:sagok:778774307253518366> __Duckets__`,` \`s*duckets <yazi>\` Duckets Logo Atar`,true)
.addField(`<:sagok:778774307253518366> __Buz__`,` \`s*buz <yazi>\` Buz Logo Atar`,true)
.addField(`<:sagok:778774307253518366> __Arrow__`,` \`s*arrow <yazi>\` Arrow Logo Atar`,true)
.addField(`<:sagok:778774307253518366> __Neon__`,` \`s*neon <yazi>\` Neon Logo Atar`,true)
.addField(`<:sagok:778774307253518366> __Fx__`,` \`s*fx <yazi>\` Fx Logo Atar`,true)
.addField(`<:sagok:778774307253518366> __Mekanik__`,` \`s*mekanik <yazi>\` Mekanik Logo Atar`,true)
.addField(`<:sagok:778774307253518366> __Metal__`,` \`s*metal <yazi>\` Metal Logo Atar`,true)
.addField(`<:sagok:778774307253518366> __Punk__`,` \`s*punk <yazi>\` Punk Logo Atar`,true)
.addField(`<:sagok:778774307253518366> __Sci-fi__`,` \`s*sci-fi <yazi>\`Sci-fi logo atar.`,true)
.addField(`<:sagok:778774307253518366> __Siyah__`,` \`s*siyah <yazi>\`Siyah logo atar.`,true)
.addField(`<:sagok:778774307253518366> __Taş__`,` \`s*taş <yazi>\`Taş logo atar.`,true)
.addField(`<:sagok:778774307253518366> __Bilgilendirme__`,` \`s*botdavet\` | Spallers'i Sunucunuza Davet Edersiniz\n \`s*istatistik\` | Botun İstatistiklerini Gösterir `)
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
  