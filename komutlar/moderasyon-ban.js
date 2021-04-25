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
	let rol = db.fetch(`banrol_${message.guild.id}`)
	if(!message.member.roles.cache.has(rol)&& !message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('Ban yetkili rolü ayarlanmamış veya <@&' + rol + '> Rolüne sahip değilsin.')
	let banlog = db.fetch(`banlog_${message.guild.id}`)
	if(!banlog) return message.channel.send('Ban log sistemi ayarlanmamış.')
    let user = message.mentions.users.first()
    let sebep = args.slice(1).join(' ') || "Belirtilmemiş."
     if(!user) return message.channel.send('<a:siren:778777832976416778> ``Bir kişi etiketlemelisin.``')
     if(user.id === message.author.id) return message.channel.send('<a:siren:778777832976416778> ``Kendini banlayamazsın.``')
     if(user.id === client.user.id) return message.channel.send('<a:siren:778777832976416778> ``Botu banlayamazsın.``')
  if(user.id === message.guild.ownerID) return message.channel.send('<a:siren:778777832976416778> ``Sunucu sahibini banlayamazsın.``')
    if (!message.guild.member(user).bannable) return message.reply('<a:siren:778777832976416778> ``Bu kişinin rolü senden üstte veya `Üyeleri yasakla` yetkisine sahip.``');

   message.channel.send('<@'+ user.id + '> Kişisini **'+ sebep+ '** Sebebiyle banlamak istediğine eminmisin ?').then(async m => {
   	 m.react('✅').then(r =>{ 

   const tamam = (reaction,user) => reaction.emoji.name == '✅' && user.id == message.author.id;
      const tamam2 = m.createReactionCollector(tamam)

   tamam2.on('collect', async (r)=>{
  message.guild.members.cache.get(user.id).ban({
  	reason: `${sebep}`
          })
      let embed = new Discord.MessageEmbed()
    .setColor('#f6ff00')
    .setThumbnail(message.author.displayAvatarURL({dynamic : true}))
    .setTitle('Kişi banlandı')
    .addField('<:ban:778787183842426900> Yetkili', `${message.author.tag}`)
    .addField('<:ban:778787183842426900> Banlanan kişi', user)
    .addField('<:ban:778787183842426900> Sebep', sebep)
    client.channels.cache.get(banlog).send(embed)
       })
    })
    await m.react('❌').then(r =>{ 

   const tamam = (reaction,user) => reaction.emoji.name == '❌' && user.id == message.author.id;
      const tamam2 = m.createReactionCollector(tamam)

   tamam2.on('collect', async (r)=>{
     m.delete()
message.channel.send('<a:tmdir:778774341357797378> | **Banlama İşlemi Başarıyla İptal Edildi.**')
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
	name: "ban"
}