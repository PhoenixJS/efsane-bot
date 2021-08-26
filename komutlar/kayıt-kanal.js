const discord = require('discord.js')
const db = require('croxydb');
const ayarlar = require("../ayarlar.json")
exports.run = async(client, message, args) => {
let prefix = ayarlar.prefix
    let karaliste = db.fetch(`ckaraliste.${message.author.id}`)
 const westraben = new discord.MessageEmbed()
 .setColor("#f6ff00")
 .setDescription(` **${karaliste}** sebebiyle karalisteye alınmışsın!\nBeyaz listeye alınmak istiyorsan [BURAYA](https://discord.gg/kqaBAxkkuX) gelebilirsin!`)
  if(karaliste) 
    return message.channel.send(westraben)
  
    if(db.fetch(`bakim`)) {
  const bakim = new discord.MessageEmbed()
  .setColor("#f6ff00")
.setThumbnail(message.author.displayAvatarURL({dynamic : true}))
  .setTitle('Üzgünüm Bot Bakımda')
  .addField('Bot Şuan Bakımdadır Lütfen Bekleyin.','Bot Ne Durumda Yada Botla İlgili Güncelleme Ve Duyurular İçin Destek Sunucumuza Gelmeyi Unutmayınız.')
  .addField('İşte Destek Sunucum',"[Destek Sunucusu](https://discord.gg/kqaBAxkkuX)")
  .setFooter('Üzgünüm...')
  .setImage('https://lh3.googleusercontent.com/proxy/gAN4I19oqqabXd_VIiwg5or-ITh4XxJTRNJA1ot0EIHPiBpxC74Atj4wNIcFes1N3VcE8WnOk6fIN29BChqNbj4lj9dIF2jiI7MBV6U8v842LA')
if(message.author.id != "627803211348312065") return message.channel.send(bakim)

}

    
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);


if(args[0] === "sıfırla") {
const sıfırlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`${client.user.username} | Kayıt kanal sıfırlama komutu.`)
.setColor("#f6ff00")
.setDescription(` Kayıt olunacak kanal başarıyla sıfırlandı!`)
.setThumbnail(client.user.avatarURL)
.setFooter(`BRK`)
message.channel.send(sıfırlandı)
db.delete(`kayıtkanal_${message.guild.id}`)
return;
}

let kanal = message.mentions.channels.first();   
if (!kanal) {
  const ayarlanmadı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} | Kayıt kanal ayarlama komutu.`)
.setColor("#f6ff00")
.setDescription(` Kayıt olunacak kanalı belirtiniz!`)
.setThumbnail(client.user.avatarURL())
.setFooter(`BRK`)
message.channel.send(ayarlanmadı)
}
db.set(`kayıtkanal_${message.guild.id}`, kanal.id)
const ayarlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} | Kayıt kanal ayarlama komutu.`)
.setColor("#f6ff00")
.setDescription(` Kayıt olunacak kanal ${kanal} olarak ayarlandı!`)
.setThumbnail(client.user.avatarURL())
.setFooter(`BRK`)
message.channel.send(ayarlandı)
  
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['kayıtkanal', 'kkanal', 'k-kanal'],
  permlevel: 0
}
exports.help = {
  name: 'kayıt-kanal',
  description: 'Kayıt Olunacak Kanalı Ayarlar',
  usage: `kayıt-kanal #kanal`
}