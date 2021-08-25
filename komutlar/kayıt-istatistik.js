const Discord = require("discord.js");
const db = require('croxydb');
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {//splashen
  let kişi = message.mentions.users.first() || message.member
  let erkek = db.get(`erkekpuan_${message.author.id}`);
  let kız = db.get(`kızpuan_${message.author.id}`);
let toplam = erkek+kız
var embed = new Discord.MessageEmbed()
.setThumbnail(message.author.displayAvatarURL({dynamic : true}))
.setColor('#f6ff00')
.setDescription(`
●▬▬▬  **Kayıt İstatistikleri** ▬▬▬●

           > <a:sag:835661239664902164>     • \`Yetkili\` • **${kişi}**
           > <a:sag:835661239664902164>     • \`Toplam Üye Kayıt Sayısı\` • **${toplam}**
           > <a:sag:835661239664902164>     • \`Toplam Erkek Kayıt Sayısı\` • **${erkek}**
           > <a:sag:835661239664902164>    • \`Toplam Kadın Kayıt Sayısı\` • **${kız}**
              
●▬▬▬  **Kayıt  İstatistikleri** ▬▬▬●




`)
.setImage('')
message.reply(embed)

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'toplam-kayıt'
};