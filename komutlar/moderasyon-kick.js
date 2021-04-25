const Discord = require('discord.js');
const db = require('croxydb');

exports.run = async(client, message, args) => {
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
	let rol = db.fetch(`kickrol_${message.guild.id}`)
	if(!message.member.roles.cache.has(rol)&& !message.member.hasPermission("KICK_MEMBERS")) return message.channel.send('<:nope:779036675338010654> ``Kick Yetkili Rolü Ayarlanmamış Veya <@&' + rol + '> Rolüne sahip değilsin.``')
	let kicklog = db.fetch(`kicklog_${message.guild.id}`)
	if(!kicklog) return message.channel.send('<:nope:779036675338010654> ``Kick Log Sistemi Ayarlanmamış.``')
    let user = message.mentions.users.first()
    let sebep = args.slice(1).join(' ') || "Belirtilmemiş."
     if(!user) return message.channel.send('<a:siren:778777832976416778> ``Bir kişi etiketlemelisin.``')
     if(user.id === message.author.id) return message.channel.send('<a:siren:778777832976416778> ``Kendini Kickleyemezsin``')
     if(user.id === client.user.id) return message.channel.send('<a:siren:778777832976416778> ``Botu Kickleyemezsin``')
  if(user.id === message.guild.ownerID) return message.channel.send('<a:siren:778777832976416778> ``Sunucu sahibini Kickleyemessin Zaten Yetkim Yetmez :)``')
    if (!message.guild.member(user).bannable) return message.reply('<a:siren:778777832976416778> ``Bu kişinin rolü senden üstte veya `Üyeleri yasakla` yetkisine sahip.``');

   message.channel.send('<@'+ user.id + '> Kişisini **'+ sebep+ '** Sebebiyle Kicklemek istediğine eminmisin ?').then(async m => {
   	 m.react('✅').then(r =>{ 

   const tamam = (reaction,user) => reaction.emoji.name == '✅' && user.id == message.author.id;
      const tamam2 = m.createReactionCollector(tamam)

   tamam2.on('collect', async (r)=>{
  message.guild.members.cache.get(user.id).kick({
  	reason: `${sebep}`
          })
      let embed = new Discord.MessageEmbed()
    .setColor("#f6ff00")
    .setThumbnail(message.author.displayAvatarURL({dynamic : true}))
    .setTitle('Bir Kişi Kick Yedi')
    .addField('Yetkili', `${message.author.tag}`)
    .addField('Kicklenen Kişi', user)
    .addField('Sebep', sebep)
    client.channels.cache.get(kicklog).send(embed)
       })
    })
    await m.react('❌').then(r =>{ 

   const tamam = (reaction,user) => reaction.emoji.name == '❌' && user.id == message.author.id;
      const tamam2 = m.createReactionCollector(tamam)

   tamam2.on('collect', async (r)=>{
     m.delete()
message.channel.send('<a:tmdir:778774341357797378> | **Kickleme İşlemi Başarıyla İptal Edildi**')
      })
    })
 })
} 
 
exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases:[],
	permlevel: 0
};

exports.help = {
	name: "kick"
}