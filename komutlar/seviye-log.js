const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require("croxydb");
exports.run = async (client, message, args) => {
  if(db.fetch(`bakim`)) {
  const bakim = new Discord.MessageEmbed()
  .setColor("#f6ff00")
.setThumbnail(message.author.dsplayAvatarURL({dynamic : true}))
  .setTitle('Üzgünüm Bot Bakımda')
  .addField('Bot Şuan Bakımdadır Lütfen Bekleyin.','Bot Ne Durumda Yada Botla İlgili Güncelleme Ve Duyurular İçin Destek Sunucumuza Gelmeyi Unutmayınız.')
  .addField('İşte Destek Sunucum',"[Destek Sunucusu](https://discord.gg/kqaBAxkkuX)")
  .setFooter('Üzgünüm...')
  .setImage('https://lh3.googleusercontent.com/proxy/gAN4I19oqqabXd_VIiwg5or-ITh4XxJTRNJA1ot0EIHPiBpxC74Atj4wNIcFes1N3VcE8WnOk6fIN29BChqNbj4lj9dIF2jiI7MBV6U8v842LA')
if(message.author.id != "477189482206986240") return message.channel.send(bakim)

}
        	 let karaliste = db.fetch(`ckaraliste.${message.author.id}`)
 const westraben = new Discord.MessageEmbed()
 .setColor("#f6ff00")
 .setDescription(`**${karaliste}** sebebiyle karalisteye alınmışsın!\nBeyaz listeye alınmak istiyorsan [BURAYA](https://discord.gg/kqaBAxkkuX) gelebilirsin!`)
  if(karaliste) 
    return message.channel.send(westraben)

 if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed()

.setTitle(`Uyarı`)

.setDescription(`Bu Komutu Kullanmak İçin; \`ADMINISTRATOR\` Yetkisine Sahip Olmalısın!`))

  
  if(!args[0])  return message.channel.send(new Discord.MessageEmbed().setColor('#f6ff00').setDescription(`> **Seviye Sisteminde ne yapmak istediğini belirtmedin**`))

  

   if(args[0] == "sıfırla") {

    db.delete(`seviyekanal${message.guild.id}`)

    return message.channel.send(` | **Seviye-Log sıfırlandı!**`);

  }

    

    

   if (args[0] == "ayarla") {

      let akanal =

        message.mentions.channels.first() ||

        message.guild.channels.cache.find(ff => ff.name === args.slice(1).join(" "));

      db.set(`seviyekanal${message.guild.id}`, akanal.id);

      message.channel.send(`<a:tmdir:778774341357797378> | Seviye Log Kanalı Ayarlandı! Ayarlanan Kanal: <#${akanal.id}> **Sıfırlamak için** q!seviye-log sıfırla`)           

    }

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: [],

  permLevel: 0

};

exports.help = {

  name: 'seviye-log'

};