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
.setAuthor(`Spallers Profil Komutları`, client.user.avatarURL())
.setThumbnail(message.author.displayAvatarURL({dynamic : true}))
.setImage('https://cdn.discordapp.com/attachments/767544528537649193/782343691221205052/standard.gif')
.setColor('#f6ff00')
.setDescription(` Spallers botumuzu eklemek için \`s*botdavet\` yazabilirsiniz.`)  
.addField(`<:sagok:778774307253518366> __Bayrak Ayarla__`,` \`s*bayrakayarla\` İstediğiniz Bayrağı Ayarlarsınız.`,true)
.addField(`<:sagok:778774307253518366> __Cinsiyet Ayarla__`,` \`s*cinsiyetayarla\` Cinsiyetinizi Ayarlarsınız.`,true)
.addField(`<:sagok:778774307253518366> __İsim Ayarla__`,` \`s*isimayarla\` İsminizi Ayarlarsınız.`,true)
.addField(`<:sagok:778774307253518366> __Soyisim Ayarla__`,` \`s*soyisimayarla\` Soyisminizi Ayarlarsınız.`,true)
.addField(`<:sagok:778774307253518366> __Yaş Ayarla__`,` \`s*yaşayarla\` Yaşınızı Ayarlarsınız.`,true)
.addField(`<:sagok:778774307253518366> __Favori Oyun Ayarla__`,` \`s*favorioyun\` Favori Oyununuzu Ayarlarsınız.`,true)
.addField(`<:sagok:778774307253518366> __Favori Şarkı Ayarla__`,` \`s*favorişarkı\` Favori Şarkınızı Ayarlarsınız.`,true)
.addField(`<:sagok:778774307253518366> __Profilim__`,` \`s*profilim\` Profilinize Bakarsınız.`,true)
.addField(`<:sagok:778774307253518366> __Bilgilendirme__`,` \`s*botdavet\` | Spallers'i Sunucunuza Davet Edersiniz\n \`s*istatistik\` | Botun İstatistiklerini Gösterir `)
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
  