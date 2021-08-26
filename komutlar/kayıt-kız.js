const discord = require('discord.js')
const db = require('croxydb');
const ayarlar = require("../ayarlar.json")
exports.run = async(client, message, args) => {
    let karaliste = db.fetch(`ckaraliste.${message.author.id}`)
 const westraben = new discord.MessageEmbed()
 .setColor("#f6ff00")
 .setDescription(`**${karaliste}** sebebiyle karalisteye alınmışsın!\nBeyaz listeye alınmak istiyorsan [BURAYA](https://discord.gg/kqaBAxkkuX) gelebilirsin!`)
  if(karaliste) 
    return message.channel.send(westraben)
  
    if(db.fetch(`bakim`)) {
  const bakim = new discord.MessageEmbed()
  .setColor("#f6ff00")
.setThumbnail(message.author.displayAvatarURL({dynamic : true}))
  .setTitle('Üzgünüm Bot Bakımda')
  .addField('Bot Şuan Bakımdadır Lütfen Bekleyin.','Bot Ne Durumda Yada Botla İlgili Güncelleme Ve Duyurular İçin Destek Sunucumuza Gelmeyi Unutmayınız.')
  .addField('İşte Destek Sunucum',"[Destek Sunucusu](https://discord.gg/kqaBAxkkuX)")
  .setFooter('Üzgünüm...')
  .setImage('https://lh3.googleusercontent.com/proxy/gAN4I19oqqabXd_VIiwg5or-ITh4XxJTRNJA1ot0EIHPiBpxC74Atj4wNIcFes1N3VcE8WnOk6fIN29BChqNbj4lj9dIF2jiI7MBV6U8v842LA')
if(message.author.id != "627803211348312065") return message.channel.send(bakim)

}
let n = db.fetch(`tagg.${message.guild.id}`);
let tag = db.fetch(`tag.${message.guild.id}`);
let kayıtsohbet = db.fetch(`kayıtsohbet_${message.guild.id}`)
let kanal = db.fetch(`kayıtkanal_${message.guild.id}`)
let alınacakrol = db.fetch(`alınacakrol_${message.guild.id}`)
let kızrol = db.fetch(`kızrol_${message.guild.id}`)
let kayıtçı = db.fetch(`kayıtçırol_${message.guild.id}`)  
if(!message.member.roles.cache.has(kayıtçı)) return message.channel.send(`Bu komudu kullanabilmen için <@&${kayıtçı}> adlı role sahip olman lazım!`)
if(message.channel.id !== kanal) return message.channel.send(`Bu komudu sadece <#${kanal}> adlı kanalda kullanabilirsin!`)
if (!kızrol) return message.channel.send(`Sunucuda kız rolü ayarlanmadığı için komut kullanılamaz!`)
let member = message.mentions.members.first();
if (!member) return message.channel.send(` Kız olarak kayıt edeceğin kullanıcıyı belirtmelisin!`)
let isim = args[1]
if (!isim) return message.channel.send(` İsmini belirtmelisin!`)
let yaş = args[2]
if (!yaş) return message.channel.send(` Yaşını belirtmelisin!`)
if(isim && member) member.setNickname(`${n} ${isim} | ${yaş}`); 
if(isim && !n) member.setNickname(`${isim} | ${yaş}`);
member.roles.remove(alınacakrol)
member.roles.add(kızrol) 
const kayıtolan = message.mentions.members.first() || message.guild.members.cache.get(args[0]) //üyeyi çekiyoruz yani hem etiket hemde id ile olur.
db.add(`kızpuan_${message.author.id}`, 1)
const hg = new discord.MessageEmbed()
.setColor('#f6ff00')
.setDescription('KAYIT BİLGİLERİN ŞUNLAR ;')
.addField( `**Kaydın Başarıyla Yapıldı! **`,
    ` **Kayıt Edilen Kişi: ${kayıtolan}**
      **Kayıt Eden Yetkili: ${message.author}**
      **Kayıt İşleminde Verilen Rol: <@&${kızrol}>**
      **Kayıt İşleminde Alınan Rol: <@&${alınacakrol}>**
      **Eski İsim: ${tag} İsim | Yaş**
      **Yeni İsim: ${tag} ${isim} | ${yaş}** 
   `)
.setFooter(`TAG Ayarlanmadıysa Undefined Yazması Normaldir!`);        
message.guild.channels.cache.get(kayıtsohbet).send(hg);
  
const başarılı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} | Kız Kayıt`)
.setColor("#f6ff00")
.setDescription(` Kız olarak kayıt edilen kullanıcı: ${member} \n Kız olarak kayıt eden yetkili: <@!${message.author.id}>`)
.addField(`Kullanıcının ismi:`, `${isim}`, true)
.addField(`Kullanıcının yaşı:`, `${yaş}`, true)
.setThumbnail(message.author.displayAvatarURL({dynamic : true}))
.setFooter(`BRK Kayıt Sistemi`)
message.channel.send(başarılı)
db.add(`kayıtsayı_${message.author.id}`, 1)
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['k'],
  permlevel: 0
}
exports.help = {
  name: 'kız',
  description: 'kız olarak kayıt eder',
  usage: '!kız @kullanıcı isim yaş'
}