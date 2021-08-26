const Discord = module.require('discord.js');
const db = require("croxydb");
const ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix
const client = new Discord.Client();
module.exports.run = async (client, message, args) => {
      if(db.fetch(`bakim`)) {
  const bakim = new Discord.MessageEmbed()
  .setColor("#f6ff00")
.setThumbnail(message.author.displayAvatarURL({dynamic : true}))
  .setTitle('Üzgünüm Bot Bakımda')
  .addField('Bot Şuan Bakımdadır Lütfen Bekleyin.','Bot Ne Durumda Yada Botla İlgili Güncelleme Ve Duyurular İçin Destek Sunucumuza Gelmeyi Unutmayınız.')
  .addField('İşte Destek Sunucum',"[Destek Sunucusu](https://discord.gg/kqaBAxkkuX)")
  .setFooter('Üzgünüm...')
  .setImage('https://lh3.googleusercontent.com/proxy/gAN4I19oqqabXd_VIiwg5or-ITh4XxJTRNJA1ot0EIHPiBpxC74Atj4wNIcFes1N3VcE8WnOk6fIN29BChqNbj4lj9dIF2jiI7MBV6U8v842LA')
if(message.author.id != "477189482206986240") return message.channel.send(bakim)

}
  
  
       let kanal = message.guild.channels.cache.get(args[0]);
       
       if(!kanal) {
         message.channel.send(`**  Sesli Çekiliş Yapmak İçin Kanal İdsini Giriniz. Doğru kullanım \`${prefix}dc KANAL ID\`**`)
       } 
        if(kanal) {
          const embed = new Discord.MessageEmbed()
          .setAuthor(message.guild.name, message.guild.iconURL())
          .setColor('#f6ff00')
          .setDescription("Şanslı Kişi: " + kanal.members.random().user ? kanal.members.random().user : "Kanalda Kimse Yok")
          .setTimestamp()
           .setFooter(`${client.user.tag} DC Sistemi`)
          message.channel.send(embed)
        }
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'dc'
};