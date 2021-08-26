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

let replies = ["https://cdn.discordapp.com/attachments/699339066029768796/736983333254332456/1.gif","https://cdn.discordapp.com/attachments/699339066029768796/737156529278550046/10.gif","https://cdn.discordapp.com/attachments/699339066029768796/736983248021749775/6.gif","https://cdn.discordapp.com/attachments/699339066029768796/736983242271359067/5.gif","https://cdn.discordapp.com/attachments/699339066029768796/736983236260921455/8.gif","https://cdn.discordapp.com/attachments/699339066029768796/736983217856315483/3.gif","https://cdn.discordapp.com/attachments/699339066029768796/736983211619516447/2-2.gif","https://cdn.discordapp.com/attachments/699339066029768796/736978634031759400/40.gif","https://cdn.discordapp.com/attachments/699339066029768796/736978111043731476/a_204c3f0f05cbef57c6297ee3f230f22a.gif","https://cdn.discordapp.com/attachments/699339066029768796/736978069038039050/f5a91c2c25a6a082f8ecafc826c13760.gif","https://cdn.discordapp.com/attachments/699339066029768796/736977973688795237/2.gif","https://cdn.discordapp.com/attachments/699339066029768796/736977934375583926/a_bf8ac566a856ad839d310e919ba15791.gif","https://cdn.discordapp.com/attachments/699339066029768796/736977911831330886/image0-7.gif","https://cdn.discordapp.com/attachments/699339066029768796/736977867811979324/a_c21ae57fdd3ad6ac99cd038b6a5aa1e4.gif","https://cdn.discordapp.com/attachments/699339066029768796/736148143678291968/15.gif","https://cdn.discordapp.com/attachments/699339066029768796/735864299024810155/20200723_142037.gif","https://cdn.discordapp.com/attachments/699339066029768796/735910966792945764/image0.gif","https://cdn.discordapp.com/attachments/699339066029768796/735910962762350642/image0.gif","https://cdn.discordapp.com/attachments/699339066029768796/735194170230308904/a_0690a3032ce9908e230d7f71dd9a6988_1.gif","https://cdn.discordapp.com/attachments/699339066029768796/734965436663464076/a_4f5d107e5160642113337218f63a6441.gif","https://cdn.discordapp.com/attachments/699339066029768796/734965350357008384/a_8f2bce5f3a3312e7e95236a39ea70efe.gif","https://cdn.discordapp.com/attachments/699339066029768796/734965015739629599/image0-6.gif","https://cdn.discordapp.com/attachments/699339066029768796/732175141567725639/image0.gif","https://cdn.discordapp.com/attachments/699339066029768796/730498782265081876/bab3.gif","https://cdn.discordapp.com/attachments/699339066029768796/730499512602329198/14.gif","https://media.discordapp.net/attachments/751141856385171556/751160435096420353/image0.gif","https://media.discordapp.net/attachments/751141856385171556/751338384185753630/a_f30d374c5d9a89b6a9db3d441ddcf9cd.gif","https://media.discordapp.net/attachments/751141856385171556/751417366101098496/IemuE9.gif","https://media.discordapp.net/attachments/751141856385171556/751417409910341773/onedeepduru_baby_gifs17.gif","https://media.discordapp.net/attachments/751141856385171556/751417718703390840/64880e491759c1d727b37f1e5c34bfe7.gif"];

let result = Math.floor((Math.random() * replies.length));

let gifembed = new Discord.MessageEmbed()

.setTitle("Baby Gif ")
    
.setColor("#f6ff00")

.setFooter(`${message.author.tag} `, message.author.avatarURL)

.setImage(replies[result]);

message.channel.send(gifembed);

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['gif-baby','baby-gif','gifbaby','babygif'],

  permLevel: 0

};

exports.help = {

  name: 'baby-gif',

  description: 'Darknes Code',

  usage: 'baby'

};