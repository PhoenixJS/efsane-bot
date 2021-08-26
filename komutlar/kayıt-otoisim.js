const discord = require('discord.js')
const db = require('croxydb');
const ayarlar = require("../ayarlar.json")
exports.run = async(client, message, args) => {

    if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`Bu Komudu Kullanabilmen İçin \`Sunucuyu Yönet\` Yetkisine Sahip Olmalısın!`);

if (args[0] === 'sıfırla') {
  let isim = db.fetch(`otoisim_${message.guild.id}`)
  if (!isim) return message.channel.send(`Oto İsim AYarlanmadığı İçimn Sıfırlanamaz!`)
  message.channel.send(`Oto İsim Sıfırlandı!`)
  db.delete(`otoisim_${message.guild.id}`)
  return;
}

let isim = args.slice(0).join(' ')
if (!isim) return message.channel.send(`İsim Belirtiniz!`)

db.set(`otoisim_${message.guild.id}`, isim)

message.channel.send(`Oto İsim \`${isim}\` Olarak Ayarlandı!`)
  
}
exports.conf = {
  name: true,
  guildonly: false,
  aliases: ['oto-isim'],
  permlevel: 0
}
exports.help = {
  name: 'otoisim'
}