const Discord = require('discord.js');

const db = require("croxydb");

exports.run = async (client, message, args) => {
  
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
        	 let karaliste = db.fetch(`ckaraliste.${message.author.id}`)
 const westraben = new Discord.MessageEmbed()
 .setColor("#f6ff00")
 .setDescription(`<a:siren:778777832976416778> **${karaliste}** sebebiyle karalisteye alınmışsın!\nBeyaz listeye alınmak istiyorsan [BURAYA](https://discord.gg/tuG87ZadFu) gelebilirsin!`)
  if(karaliste) 
    return message.channel.send(westraben)

let kanal = await db.fetch(`seviyekanal${message.guild.id}`)

let xp = await db.fetch(`seviyexp${message.guild.id}`)

let sınır = await db.fetch(`seviyesınır${message.guild.id}`)

let kanal1 = [];

  if(kanal) kanal1 = `<a:dnya:778787223847829504> **Açık!**`

  if(!kanal) kanal1 = `<a:dnya:778787223847829504> **Kapalı!**`

  let xp1 = [];

  if(xp) xp1 = `<a:dnya:778787223847829504> \`${xp}\``

  if(!xp) xp1 = `<a:dnya:778787223847829504> **Ayarlanmamış! Default: \`250\`**`

let sınır1 = [];

  if(sınır) sınır1 = `<a:dnya:778787223847829504> \`${sınır}\``

  if(!sınır) sınır1 = `<a:dnya:778787223847829504> **Ayarlanmamış! Default: \`5\`**`

message.channel.send(new Discord.MessageEmbed()

.setColor("#f6ff00")

.setTitle(`${message.guild.name} Sunucusuna Ait Seviye Ayarları!`)   

.addField(`**Seviye-Log**`, `${kanal1}`)

.addField(`**Mesaj Başı Verilecek Xp**`, `${xp1}`)     

.addField(`**Kaç Puan Seviye Atlama**`, `${sınır1}`))

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: [],

  permLevel: 0

};

exports.help = {

  name: 'seviye-ayarlar'

};