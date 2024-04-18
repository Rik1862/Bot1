global.owner = ['6282139677593']  
global.mods = ['6282139677593'] 
global.prems = ['6282139677593']
global.nameowner = 'RK'
global.numberowner = '6282139677593'
global.mail = 'su285959@gmail.com' 
global.gc = 'https://whatsapp.com/channel/0029VaBl0VOAInPsCK1JJG3A'
global.instagram = 'https://www.instagram.com/kiyxzxy?igsh=MTV1dmFub3BjY2phOA=='
global.wm = '© RK'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made With'
global.author = 'Bot WhatsApp'
global.maxwarn = '2' // Peringatan maksimum

//INI WAJIB DI ISI!//
global.lann = 'b8hWo6Dp' 
//Daftar terlebih dahulu https://api.betabotz.eu.org

//INI OPTIONAL BOLEH DI ISI BOLEH JUGA ENGGA//
global.btc = 'sYOQyJPu'
//Daftar https://api.botcahx.eu.org 

global.APIs = {   
  lann: 'https://api.betabotz.eu.org',
  btc: 'https://api.botcahx.eu.org'
}
global.APIKeys = { 
  'https://api.betabotz.eu.org': 'b8hWo6Dp', 
  'https://api.botcahx.eu.org': 'sYOQyJPu'
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
