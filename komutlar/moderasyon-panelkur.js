const Discord = require('discord.js');
const db = require('croxydb')
const ayarlar = require("../ayarlar.json")
const fynx = require
exports.run = async (client, message) => {
let prefix = ayarlar.prefix
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
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Yetkiniz Bulunmamaktadır!');
  let count = 0
   let voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
  for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  let panel = await db.fetch(`sunucupanel.${message.guild.id}`)
  if(panel) return message.channel.send(`Panel Zaten Ayarlanmış Silmek İçin; \`${prefix}panel-sil\``)
  
  
let every = message.guild.roles.cache.find(r => r.name === '@everyone')
 message.guild.channels.create(`${message.guild.name}`, { type: 'category', reason: 'Bilgi Kanalları!' }).then(kategori => {
       kategori.createOverwrite(every, {
       CONNECT: false,
     })
   
   message.guild.channels.create(`Toplam Üye • ${message.guild.memberCount}`, { type: 'voice', reason: 'İstatistik' }).then(toplamüye => {
    message.guild.channels.create(`Aktif Üye • ${message.guild.members.cache.filter(off => off.presence.status !== 'offline').size}`, { type: 'voice', reason: 'İstatistik' }).then(atkifüye => {
          message.guild.channels.create(`Botlar • ${message.guild.members.cache.filter(m => m.user.bot).size}`, { type: 'voice', reason: 'İstatistik' }).then(botlar => {
          message.guild.channels.create(`Rekor Aktiflik • ${message.guild.members.cache.filter(off => off.presence.status !== 'offline').size}`, { type: 'voice', reason: 'İstatistik' }).then(rekor => {
            message.guild.channels.create(`Son Üye •`, { type: 'voice', reason: 'İstatistik' }).then(son => {
               message.guild.channels.create(`Seslideki Üye • ${count}`, { type: 'voice', reason: 'İstatistik' }).then(ses => {
                     
                     
                     
                     
   toplamüye.setParent(kategori.id)  
    atkifüye.setParent(kategori.id)
    botlar.setParent(kategori.id)
    rekor.setParent(kategori.id)
    son.setParent(kategori.id)
  ses.setParent(kategori.id)  
})})})})})})})
  db.set(`sunucupanel.${message.guild.id}`, message.guild.members.cache.filter(off => off.presence.status !== 'offline').size)
    message.channel.send(`Sunucu panel için gerekli kanallar oluşturulup, ayarlamalar yapıldı!  \`(Oda isimlerini değiştirmeyin, çalışmaz!)\``)
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'panel-kur', 
  description: 'Botu yeniden başlatır',
  usage: 'reboot'
};