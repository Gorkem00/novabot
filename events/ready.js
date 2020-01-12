const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../config.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.tag} ismi ile giriş yapıldı!`);
  console.log(`${client.users.size} kullanıcı, ${client.guilds.size} sunucu!!`);
  const link = "https://discordapp.com/oauth2/authorize?client_id="+client.user.id+"&scope=bot&permissions=8";
  console.log(`Davet linkim : [${link}]`)
  client.user.setStatus("dnd");
  /*
  client.user.setStatus("dnd");
  dnd : Rahatsız Etmeyin (Do not distrub) (kırmızı)
  online : Çevrimiçi (yeşil)
  offline : Görünmez / Çevrımdışı (Gri)
  idle : Boşta (sarı)
  */

    setInterval(function() {



        client.user.setGame("⚡️ 7/24 Aktif ⚡️ Hizmetinizdeyim ⚡️");



        }, 2 * 2500);
}
