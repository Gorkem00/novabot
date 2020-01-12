const Discord = require('discord.js');


exports.run = function(client, message) {
message.channel.send(
  "Loading !"
)
  message.channel.send(
  new Discord.RichEmbed()
    .setDescription("Ping:" + client.ping + " MS")
    .setColor("BLACK")
  )
    };
exports.conf = {
  enabled: true,//True => Komut açık, False => Komut kapalı
  guildOnly: false, //True => Sadece Servere Özel, False => Heryerde kullanılabilir
  aliases: [],//Komutun farklı kullanımları ÖR: !ping, !p
  permLevel: 0 //kimlerin kullanabileceğini  (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'ping',//Komutun adı (Komutu girerken lazım olucak)
  description: 'Botun gecikme süresini gösterir',//Komutun Açıklaması
  kategori: 'bot',// Komutun olduğu kategori. kategoriler: bot-yetkili-ayarlar-kullanıcı-eğlence
  usage: 'ping' //komutun kullanım şekli; ÖR: !ban @Kullanıcı
}
