

const fs = require('fs');
const chalk = require('chalk');

//owmner v card
global.ytname = "null" //ur yt chanel name
global.socialm = "GitHub: Classicclowwn" //ur github or insta name
global.location = "Nigeria" //ur location

//new
global.botname = '© CLOWN-MD' //ur bot name
global.ownernumber = ['2348163243259'] //ur owner number, dont add more than one
global.ownername = '© Classicclown' //ur owner name
global.websitex = "null"
global.wagc = "null"
global.themeemoji = '🪀'
global.wm = "Global Bot Inc."
global.botscript = 'https://github.com/Classicclowwn/GLOBAL-MD.git' //script link
global.packname = "Sticker By classicclowwn"
global.author = "GlobalTechInfo\n\n+923444844060"
global.creator = "923444844060@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["2348163243259"] // Premium User

//channel id
global.xchannel = {
	jid: '120363319098372999@newsletter'
	}

//bot sett
global.typemenu = 'v12' // menu type 'v1' => 'v12'
global.typereply = 'v4' // reply type 'v1' => 'v4'
global.autoblocknumber = '91' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code

global.listv = ['➜','☞','㉨','✪','✯','益','⊡','☆','ෆ','✎','⎆','⫹⫺','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆','֎','ᚏ','⸙','⧉']
global.tempatDB = 'database.json'

global.limit = {
	free: 100,
	premium: 999,
	vip: 'VIP'
}

global.uang = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	error: 'Error!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
	done: 'Done'
}

global.bot = {
	limit: 0,
	uang: 0
}

global.game = {
	suit: {},
	menfes: {},
	tictactoe: {},
	kuismath: {},
	tebakbom: {},
}

//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
