const Discord = require('discord.js');

const db = require("croxydb");

const ayarlar = require("../ayarlar.json")

exports.run = async (client, msg, args) => {
  if(db.fetch(`bakim`)) {
  const bakim = new Discord.MessageEmbed()
  .setColor("#f6ff00")
.setThumbnail(msg.author.displayAvatarURL({dynamic : true}))
  .setTitle('Üzgünüm Bot Bakımda')
  .addField('Bot Şuan Bakımdadır Lütfen Bekleyin.','Bot Ne Durumda Yada Botla İlgili Güncelleme Ve Duyurular İçin Destek Sunucumuza Gelmeyi Unutmayınız.')
  .addField('İşte Destek Sunucum',"[Destek Sunucusu](https://discord.gg/tuG87ZadFu)")
  .setFooter('Üzgünüm...')
  .setImage('https://lh3.googleusercontent.com/proxy/gAN4I19oqqabXd_VIiwg5or-ITh4XxJTRNJA1ot0EIHPiBpxC74Atj4wNIcFes1N3VcE8WnOk6fIN29BChqNbj4lj9dIF2jiI7MBV6U8v842LA')
if(msg.author.id != "477189482206986240") return message.channel.send(bakim)

}
        	 let karaliste = db.fetch(`ckaraliste.${msg.author.id}`)
 const westraben = new Discord.MessageEmbed()
 .setColor(`#f6ff00`)
 .setDescription(`<a:siren:778777832976416778> **${karaliste}** sebebiyle karalisteye alınmışsın!\nBeyaz listeye alınmak istiyorsan [BURAYA](https://discord.gg/tuG87ZadFu) gelebilirsin!`)
  if(karaliste) 
    return msg.channel.send(westraben)

if(!msg.member.hasPermission("ADMINISTRATOR")) return msg.channel.send(new Discord.MessageEmbed()

.setTitle(`Uyarı`)

.setDescription(`<a:siren:778777832976416778> Bu Komutu Kullanmak İçin; \`ADMINISTRATOR\` Yetkisine Sahip Olmalısın!`))

  if(args[0] == "sıfırla" || args[0] == "reset") {

    db.delete(`seviyexp${msg.guild.id}`)

    return msg.channel.send(`<a:tmdir:778774341357797378> | Seviye-XP sıfırlandı! Default: \`5\``);

  }

let sayı = args[0]

if(!sayı) return msg.channel.send("<a:siren:778777832976416778> Lütfen Bir Sayı Giriniz!")

if(sayı > 20) return msg.channel.send("<a:siren:778777832976416778> Max 20 Olarak Ayarlayabilirsin.")

db.set(`seviyexp${msg.guild.id}`, Math.floor(args[0]))

return msg.channel.send("<a:tmdir:778774341357797378> | Başarıyla Seviye Puanını \`" + args[0] + "\` Olarak Ayarladınız!")

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: [],

  permLevel: 0

};

exports.help = {

  name: 'seviye-xp'

};