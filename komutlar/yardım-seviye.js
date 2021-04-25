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
.setAuthor(`Spallers Seviye Komutları`, client.user.avatarURL())
.setThumbnail(message.author.displayAvatarURL({dynamic : true}))
.setImage('https://cdn.discordapp.com/attachments/767544528537649193/782343766446964746/standard_2.gif')
.setColor('#f6ff00')
.setDescription(` Spallers botumuzu eklemek için \`s*botdavet\` yazabilirsiniz.`)  
.addField(`<:sagok:778774307253518366> __Seviye Ayarlar__`,` \`s*seviye-ayarlar\` Seviye Ayarlarını Gösterir.`,true)
.addField(`<:sagok:778774307253518366> __Seviye Log__`,` \`s*seviye-log-ayarla <#kanal>\` Seviye Atlayınca Mesaj Gidecek Kanal.`,true)
.addField(`<:sagok:778774307253518366> __Seviye Rol__`,` \`s*seviye-rol\` İstenilen Seviyeye Gelince Verilecek Rol`,true)
.addField(`<:sagok:778774307253518366> __Seviye Sıfırla__`,` \`s*seviye-sıfırla\`  Seviye Sistemini Sıfırlarsınız.`,true)
.addField(`<:sagok:778774307253518366> __Seviye Sınır__`,` \`s*seviye-sınır\` Maksimum Kazanılanabilecek Seviyeyi Belirler.`,true)
.addField(`<:sagok:778774307253518366> __Seviye XP__`,` \`s*seviye-xp\`  Bir Mesaj Başına Verilecek Xp yi ayarlar.`,true)
.addField(`<:sagok:778774307253518366> __Seviye Top5__`,` \`s*seviye-top\` Sunucuda ki En yüksek 5 Kişiyi Gösterir`,true)
.addField(`<:sagok:778774307253518366> __Seviye Rolleri__`,` \`s*seviyerolleri\` Hangi Seviye de Rol Verilecek Onu Gösterir.`,true)
.addField(`<:sagok:778774307253518366> __Seviye Bilgi__`,` \`s*seviyebilgi\` Seviyenizi Gösterir.`,true)
.addField(`<:sagok:778774307253518366> __Bilgilendirme__`,` \`s*botdavet\` | Spallers'i Sunucunuza Davet Edersiniz\n \`sb!botbilgi\` | Botun İstatistiklerini Gösterir `)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["moderasyon","ayarlar"], 
    permLevel: 0
  };
  exports.help = {
    name: 'seviye'
  }; 
  //////**\n:white_small_square: seviye-ayarlar** : Sunucuda Aktif Olan Seviye Ayarlarını Gösterir.
//**:white_small_square: seviye-log** : Seviye Atlayınca Mesaj Gidecek Kanalı Ayarlarsınız.
//**:white_small_square: seviye-rol** : İstenilen Seviyeye Gelince Verilecek Rolü Ayarlar.
//**:white_small_square: seviye-sıfırla** : Mevcut Seviye Sistemini Sıfırlar
//**:white_small_square: seviye-sınır** : Maksimum Kazanılanabilecek Seviyeyi Belirler.
//**:white_small_square: seviye-xp** : Bir Mesaj Başına Verilecek Xp yi ayarlar.
//**:white_small_square: seviye-top** : Sunucuda ki En yüksek 5 Kişiyi Gösterir
//**:white_small_square: seviyerolleri** : Hangi Seviye de Rol Verilecek Onu Gösterir.
//**:white_small_square: seviye** : Seviyenizi Gösterir.`)