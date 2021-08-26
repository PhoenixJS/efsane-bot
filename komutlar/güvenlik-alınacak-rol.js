const Discord = require("discord.js");
const db = require('croxydb');
const ayarlar = require("../ayarlar.json")
exports.run = async (bot, message, args) => {
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
    let c =
      message.mentions.roles.first() ||
      message.guild.roles.find(rol => rol.name === args[0]);
    if (!c) return message.channel.send("Lütfen bir rol belirtiniz!");
    db.set(`güvenlikalınacak_${message.guild.id}`, c.id);
    message.channel.send(
      `güvenlik Alınacak Rol = <@&${c.id}>!`
    );
   
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["security-remove-role"],
  permLevel: 3
};

module.exports.help = {
  name: "güvenlik-alınacak-rol",
  description: "güvenlik-rol",
  usage: "güvenlik-rol"
};
