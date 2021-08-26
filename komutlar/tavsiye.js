const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
const ayarlar = require('../ayarlar.json');
let tavsiye = args.join(" ").slice(0);
  const sebep2 = new Discord.MessageEmbed()
  .setDescription(` \`${message.author.username}\` **Tavsiyenizi Yazar mısınız ?**`)
  .setColor("#f6ff00")
  .setFooter(`BRK Bot Tavsiye Sistemi`)
  if(!tavsiye) return message.channel.send(sebep2);
let user = message.author.tag;
let userid = message.author.id;
let guild = message.guild.name;
let guildid = message.guild.id;
let kanal = message.channel.name;
let gonderilecek_kisi = bot.users.cache.get("627803211348312065")//rapor edilecek kişinin idsi
let embed = new Discord.MessageEmbed()
.setTitle("Tavsiye Bildiri")
.setThumbnail(bot.user.avatarURL())
.addField("Tavsiye", tavsiye)
.addField("Sunucu Adı", guild)
.addField("Sunucu ID", guildid)
.addField("Rapor Eden", user, true)
.addField("Rapor Eden ID", userid)
.setColor("GOLD")
   message.react("👍");


message.channel.send(" **| Tavsiyeniz Başarı İle Bot Sahibime İletildi. Teşekkür Ederiz. | :heart:**")
gonderilecek_kisi.send(embed).then(i => i.react("⏳"))

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0  
};

exports.help = {
  name: 'tavsiye',
  description: 'Çalışıp para kazanırsınız.',
  usage: 'prefix+bug-bildir <bug>'
}
