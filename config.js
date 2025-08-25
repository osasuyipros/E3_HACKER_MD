const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "E3_HACKER_MD~E3_HACKER_MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0gyNmdLbThSSTZ3WnMrai85ejJHQlRsWWJ0VmNrSVFocUYyZjJjeE4zdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibXFQQk9MRWprNExsQmVONi96SEEya2ZUMTJzTzU2U0JDcndqSDdLN0JYND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjQk5UZWxNdU5RWEVEZ3UvVGFVMmV4TFRlbHk0U2lnbzFEcHYwNy8yalZBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiMnJzWkdEeEthWUdrc01xcmZJc1F1V2J2TElJMGJBUHdRZ2lESHhDVUVrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZIcXg3aFAxT004bkdFQXRqdkN2dVZ0c0ZiL0RFcW95c3F4dFN2YjR6MFU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilp1Y0F5WElOaXNxbE0vQVpHMnRydkkwVGR5Zy9GbkFzZi9IbXNMeENWaXM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTVA2b3Z2aG5JZVpTMzJhNEZEeGkwK3NWV0w1UVRHaUt3NEFmcDYyYW9WST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmxlRnczUzlweUxyS25GZWpEcyt5RTVMcUt3YWo1N1ZweURSdWs2emdCbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkcrMTYxbEFjcmw5Zm44S0RMejE5L3I2ZzNFZGw1a09GOXdmWjFCTmpoSitnc1MyNHczL2NydDZibERmUjBqTTlEZ2t0MzdtOWpJSWx5L3dsR3FPMmdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQwLCJhZHZTZWNyZXRLZXkiOiJjcFMxWTVXbGNaK1ViQzhRNitzbjVBOUNzYkxsdWdxd0dqY0lpT3pDOWxZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDgxMTQ1MjYyNjdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOUFDNTAyNERDOTgzNjk0Q0IxMjI1NERGQTNCOUNBM0QifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NjE2MDM2NH0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0ODExNDUyNjI2N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI2OTBFRDNFRDNBRDM0NTlFMkQyMjhEQkFGQTRDNzIxNiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU2MTYwMzY1fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJDOTFFSzkyTCIsIm1lIjp7ImlkIjoiMjM0ODExNDUyNjI2NzoxMEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLigrHisaTDmOKCtOKCscmG4rGkIOC4v+KCruKCtSIsImxpZCI6Ijg2NTM1NTM4MDA4MjUwOjEwQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTkhkMEFrUTVNS3p4UVlZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoidXhLVnF4SWJoYU1DdnRtcE10Y3J5eFlHNkxham5xN1BCWDFQLzVlc2NDVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiaEtEcW40V0dkTzkzb2dJQWc1dmRJN2tVbzR5UzBQTkFmZEc3UDRkU0w1NkF3ZnJkS1ZEM2lET0c5cm1FandITzkzdHFLcDREUEFONGpPMWUrSE53Qnc9PSIsImRldmljZVNpZ25hdHVyZSI6ImNvMmJIV01YQU5vNTNVcmRCbEtKdFNkbjArdWhGWjhLSHYxMXdBcEY2YXZVam8xRG1tbFppTUhxN3NjeGNQOVlSNE9QbElVSzh6VENTbG9mMWM2M2dRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0ODExNDUyNjI2NzoxMEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJic1NsYXNTRzRXakFyN1pxVExYSzhzV0J1aTJvNTZ1endWOVQvK1hySEFsIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQklJRFE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTYxNjAzNjAsImxhc3RQcm9wSGFzaCI6IjJHNEFtdSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBT1ljIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY 𝙀3_𝙃𝘼𝘾𝙆𝙀𝙍_𝙈𝘿 ♥️☺️*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "true",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/fe8cry.png",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "E3_HACKER_MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "𝙀3_𝙃𝘼𝘾𝙆𝙀𝙍_𝙈𝘿",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "2348114536267",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*E3_HACKER_MD Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ E3_HACKER_MD Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/fe8cry.png",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Apni Had May Raho Batmeez Insan 🫣",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "true",
// false or true for anti bad words  
MODE: process.env.MODE || "private",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "true",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "false",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "true"
// make it true for auto recoding 
};
