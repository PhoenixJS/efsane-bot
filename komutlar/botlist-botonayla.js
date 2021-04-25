const Discord = require('discord.js');
const db = require('croxydb');


module.exports.run = async (client, message, args) => {
  let karaliste = db.fetch(`ckaraliste.${message.author.id}`)
 const westraben = new Discord.MessageEmbed()
 .setColor("#f6ff00")
 .setDescription(`<a:siren:778777832976416778> **${karaliste}** sebebiyle karalisteye alınmışsın!\nBeyaz listeye alınmak istiyorsan [BURAYA](https://discord.gg/tuG87ZadFu) gelebilirsin!`)
  if(karaliste) 
    return message.channel.send(westraben)
  
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
  let kanal = await db.fetch(`westrabasvuruyapılacakkanal_${message.guild.id}`);
  let kanal2 = await db.fetch(`westrabasvurugidecekkanal_${message.guild.id}`);
  let kanal3 = await db.fetch(`westralogkanal_${message.guild.id}`);
  let westrabasvurugidecekkanal = await db.fetch(`westrabasvurugidecekkanal_${message.guild.id}`, kanal2.id);
let westralogkanal = await db.fetch(`westralogkanal_${message.guild.id}`, kanal3.id);
 let westrabotlistyetkilisi = db.fetch(`westrabotlistyetkilirol_${message.guild.id}`)
   if(!message.member.roles.cache.has(westrabotlistyetkilisi)) return message.channel.send(`<a:siren:778777832976416778> Bu komutu kullanabilmen için <@&${westrabotlistyetkilisi}> adlı role sahip olman lazım!`)
	let botisim = args[0]
  let sahip = args[1]
	let log = westralogkanal //  Bot Eklendi / Onaylandı / Rededildi Kanalı
	
	if (!botisim) return message.channel.send(`<a:siren:778777832976416778> Botun ID'sini yazmalısın.`).then(x => x.delete({timeout: 3000}))
  	if (!sahip) return message.channel.send(`<a:siren:778777832976416778> Bot sahibinin ID'sini yazmalısın.`).then(x => x.delete({timeout: 3000}))
  message.delete()
   const westrabumbeyyyy = new Discord.MessageEmbed()
    .setColor(`GREEN`)
    .setFooter(`Spallers BotList Sistemi`)
    .setTimestamp()
    .setDescription(`<a:okk:778774339259859002> <@${sahip}> adlı kişinin <@${botisim}> adlı botu onaylandı. \nOnaylayan yetkili: ${message.author}`)
		client.channels.cache.get(log).send(westrabumbeyyyy);
		message.channel.send(`<a:okk:778774339259859002> Botu onayladınız.`).then(x => x.delete({timeout: 3000}))
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'botonayla', 
  description: "Sunucuya eklenen botu reddeder.",
  usage: 'botreddet <bot ismi> - <sebep>'
};