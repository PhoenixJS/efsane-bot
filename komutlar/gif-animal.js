const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json")
const db = require('croxydb');

module.exports.run = async (bot, message, args) => {
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

let replies = ["https://cdn.discordapp.com/attachments/733640065200160768/737280791993779206/tenor_3.gif","https://cdn.discordapp.com/attachments/733640065200160768/737280895995740210/tenor_7.gif","https://cdn.discordapp.com/attachments/733640065200160768/737280900022140938/tenor_2.gif","https://cdn.discordapp.com/attachments/733640065200160768/737280920800722984/tenor_9.gif","https://cdn.discordapp.com/attachments/733640065200160768/737280921689915411/tenor_10.gif","https://cdn.discordapp.com/attachments/733640065200160768/737280924563275776/tenor.gif","https://cdn.discordapp.com/attachments/733640065200160768/737280929311096842/tenor_5.gif","https://cdn.discordapp.com/attachments/733640065200160768/737280944016457748/tenor_1.gif","https://cdn.discordapp.com/attachments/733640065200160768/737280945195057193/tenor_6.gif","https://cdn.discordapp.com/attachments/733640065200160768/737281583412805712/tenor_8.gif","https://cdn.discordapp.com/attachments/733640065200160768/737281572826382336/tenor_4.gif","https://cdn.discordapp.com/attachments/733640065200160768/737282276320084118/tenor_2.gif","https://cdn.discordapp.com/attachments/733640065200160768/737282249422143488/tenor_3.gif","https://cdn.discordapp.com/attachments/733640065200160768/737282243113910292/tenor_4.gif","https://cdn.discordapp.com/attachments/733640065200160768/737282207579635722/tenor.gif","https://cdn.discordapp.com/attachments/733640065200160768/737282195185467473/tenor_5.gif","https://cdn.discordapp.com/attachments/733640065200160768/737282604176506910/tenor.gif","https://cdn.discordapp.com/attachments/733640065200160768/737282625747681410/tenor_1.gif","https://cdn.discordapp.com/attachments/733640065200160768/737282660250157122/tenor_4.gif","https://cdn.discordapp.com/attachments/733640065200160768/737282929633525851/tenor_11.gif","https://cdn.discordapp.com/attachments/733640065200160768/737282757188911174/tenor_7.gif","https://cdn.discordapp.com/attachments/733640065200160768/737282947119579216/tenor_9.gif","https://cdn.discordapp.com/attachments/733640065200160768/737282750385487932/tenor_5.gif","https://cdn.discordapp.com/attachments/733640065200160768/737282940760883210/tenor_10.gif","https://cdn.discordapp.com/attachments/733640065200160768/737282991348252683/tenor_13.gif"];

let result = Math.floor((Math.random() * replies.length));

let gifembed = new Discord.MessageEmbed()

.setTitle(" **Animal Gif ** ;")

.setColor("#f6ff00")

.setFooter(`${message.author.tag} `, message.author.avatarURL)

.setImage(replies[result]);

message.channel.send(gifembed);

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['gif-animal','hayvan','gifanimal','animalgif'],

  permLevel: 0

};

exports.help = {

  name: 'animal-gif',

  description: 'Darknes Code',

  usage: 'animal'

};