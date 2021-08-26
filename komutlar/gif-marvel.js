const Discord = require("discord.js");
const db = require('croxydb');
const ayarlar = require("../ayarlar.json")
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

let replies = ["https://images-ext-1.discordapp.net/external/swb3EgqWY4fLoNqYyk0o5jflgZzLY1KhI6yV4kwLVyU/https/media.discordapp.net/attachments/709695085398458440/750411469970997400/tenor-3.gif","https://media.discordapp.net/attachments/709695085398458440/750423711676628992/black.gif","https://media.discordapp.net/attachments/709695085398458440/750423712838320288/sa.gif","https://media.discordapp.net/attachments/709695085398458440/750423713148698624/giphy-3.gif","https://media.discordapp.net/attachments/709695085398458440/750423744433881158/453991ae10259a9c0d430041225bf417.gif","https://media.discordapp.net/attachments/709695085398458440/750423745281130537/5a509e0229a53f6dbea3574a726a3c04.gif","https://media.discordapp.net/attachments/709695085398458440/750423779959635968/tenor_2.gif","https://media.discordapp.net/attachments/709695085398458440/750423780618272839/tenor_1-1.gif","https://media.discordapp.net/attachments/709695085398458440/750423781293555733/edd829b344faac5a19767f0deac1e4a1.gif","https://media.discordapp.net/attachments/709695085398458440/750423817439936512/JoyfulColorlessFlatfish-size_restricted.gif","https://media.discordapp.net/attachments/709695085398458440/750423818865999882/81440.gif","https://media.discordapp.net/attachments/709695085398458440/750423819360927935/200-1.gif","https://media.discordapp.net/attachments/709695085398458440/750423842945630410/tenor-2.gif","https://media.discordapp.net/attachments/709695085398458440/750423843260334130/tenor-1.gif","https://media.discordapp.net/attachments/709695085398458440/750423843578839090/6a97a33fd255a81bd9dc406249e515d5.gif","https://media.discordapp.net/attachments/709695085398458440/750423874558230578/5s11.gif","https://media.discordapp.net/attachments/709695085398458440/750423875073998955/9d9325a240e1c981de2a9375221457c6.gif","https://media.discordapp.net/attachments/709695085398458440/750423875657007184/db1f83903fc1e986fc71a5f24287f182.gif","https://media.discordapp.net/attachments/709695085398458440/750423912114028544/DisloyalMildGermanshepherd-size_restricted.gif","https://media.discordapp.net/attachments/709695085398458440/750423912114028544/DisloyalMildGermanshepherd-size_restricted.gif","https://media.discordapp.net/attachments/709695085398458440/750423912822603957/giphy-2.gif","https://media.discordapp.net/attachments/709695085398458440/750423913137307658/giphy-20.gif","https://media.discordapp.net/attachments/709695085398458440/750423930220839054/tenor_1.gif"];

let result = Math.floor((Math.random() * replies.length));

let gifembed = new Discord.MessageEmbed()

.setTitle(" Marvel Gif  ;")

.setColor("#f6ff00")

.setFooter(`${message.author.tag} `, message.author.avatarURL)

.setImage(replies[result]);

message.channel.send(gifembed);

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['gif-marvel','marvel-gif','gifmarvel','marvelgif'],

  permLevel: 0

};

exports.help = {

  name: 'marvel-gif',

  description: 'Darknes Code',

  usage: 'marvel'

};