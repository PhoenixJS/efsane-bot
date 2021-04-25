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
.setImage('https://cdn.discordapp.com/attachments/767544528537649193/782343668857307166/standard_1.gif')
.setColor('#f6ff00')
.setDescription(` Spallers botumuzu eklemek için \`s*botdavet\` yazabilirsiniz.`)
.addField(`<:sagok:778774307253518366> __Jail Log__`,` \`s*jail-kanal ayarla\` Jail Log Kanalını Ayarlarsınız.`,true)
.addField(`<:sagok:778774307253518366> __Jail Yetkili Rol__`,` \`s*jail-yetkilisi ayarla \` Sadece Kimler Jail Atabilir?`,true)
.addField(`<:sagok:778774307253518366> __Jail Rolü__`,` \`s*jail-rol ayarla \` Jail Verilecek Rol.`,true)
.addField(`<:sagok:778774307253518366> __Jail__`,` \`s*jail @üye <10s,10m,10h,10d> sebep \` Kişiye Jail Rolünü Verirsiniz.`,true)
.addField(`<:sagok:778774307253518366> __Mute Log__`,` \`s*mute-log #kanal \` Mute Log Kanalı Ayarlarsınız.`,true)
.addField(`<:sagok:778774307253518366> __Mute Log Kapat__`,` \`s*mute-log-kapat \` Mute Log Kanalını Sıfırlar.`,true)
.addField(`<:sagok:778774307253518366> __Mute Yetkili Rol__`,` \`s*mute-yetkili-rol <@rol> \` Sadece Kimler Mute Atabilir?`,true)
.addField(`<:sagok:778774307253518366> __Mute Yetkili Rol Sil__`,` \`s*muteyetki-sil \` Otomatik Selamlamayı Açar/Kapatır.`,true)
.addField(`<:sagok:778774307253518366> __Mute__`,` \`s*mute <@üye> <1s> <1m> <1h> <1d> \` Otomatik Selamlamayı Açar/Kapatır.`,true)
.addField(`<:sagok:778774307253518366> __Sunucu Paneli__`,` \`s*panel-kur\` Sunucu Kanallarını Açar`,true)
.addField(`<:sagok:778774307253518366> __Paneli Kaldır__`,` \`s*panel-sil\` Panel Kanallarını Siler`,true)

.addField(`<:sagok:778774307253518366> __Bilgilendirme__`,` \`s*botdavet\` | Spallers'i Sunucunuza Davet Edersiniz\n \`s*istatistik\` | Botun İstatistiklerini Gösterir `)
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
  