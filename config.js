const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "9121695808";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_20_42_10_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE5LFxuICAgICAgICA2NixcbiAgICAgICAgMTY2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzksXG4gICAgICAgIDg4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDY1LFxuICAgICAgICAyMjksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTYzLFxuICAgICAgICA0OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAzMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDg1LFxuICAgICAgICA4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDM2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDkzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAzMixcbiAgICAgICAgMjUzLFxuICAgICAgICA5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDYsXG4gICAgICAgIDc0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDcsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDUyLFxuICAgICAgICAyMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQwLFxuICAgICAgICAyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxODUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDQ0LFxuICAgICAgICA2NSxcbiAgICAgICAgNThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjI5LFxuICAgICAgICAyMixcbiAgICAgICAgMzMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODEsXG4gICAgICAgIDc5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDQyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA0NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDQyLFxuICAgICAgICAxNixcbiAgICAgICAgOTYsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTU2LFxuICAgICAgICA5NixcbiAgICAgICAgMjMyLFxuICAgICAgICAyOCxcbiAgICAgICAgODYsXG4gICAgICAgIDg5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMixcbiAgICAgICAgMTU4LFxuICAgICAgICA5LFxuICAgICAgICA5OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDEzLFxuICAgICAgICA1MixcbiAgICAgICAgMTE3LFxuICAgICAgICAxNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA1LFxuICAgICAgICAxODksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjIwLFxuICAgICAgICA0NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDg1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTMxLFxuICAgICAgICA5MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzksXG4gICAgICAgIDY5LFxuICAgICAgICA5NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDgxLFxuICAgICAgICA0NSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY5LFxuICAgICAgICA2NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxODcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjExLFxuICAgICAgICAzMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNTksXG4gICAgICAgIDI5LFxuICAgICAgICA4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTA3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAzNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA5OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTc4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDI1MixcbiAgICAgICAgODksXG4gICAgICAgIDExOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDg3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTAxLFxuICAgICAgICA3LFxuICAgICAgICA3MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDI4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDg4LFxuICAgICAgICA0MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDY4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjksXG4gICAgICAgIDI0MixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTgxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTIxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkhGVXJCcUdPaHBNdktQMUF0VlRIa2ZEK1gxTVVmQ01OcDVlWlFudWNkL009XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInJnYzZQOGwwUjB1ejRmaFZnNWM1Z1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjE0NDlkZjItN2MyNS00MGU1LWE2NTEtNjM1NTc1ZjBmNTNlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0MyxcbiAgICAgIDIwMyxcbiAgICAgIDI0OCxcbiAgICAgIDMsXG4gICAgICAxMDksXG4gICAgICAxMTYsXG4gICAgICAxNixcbiAgICAgIDIwNixcbiAgICAgIDkzLFxuICAgICAgMTkyLFxuICAgICAgNDMsXG4gICAgICAxNDQsXG4gICAgICAzMCxcbiAgICAgIDEzNixcbiAgICAgIDU3LFxuICAgICAgOSxcbiAgICAgIDI0NSxcbiAgICAgIDE2NCxcbiAgICAgIDQ1LFxuICAgICAgNjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQsXG4gICAgICA1OCxcbiAgICAgIDI0LFxuICAgICAgMTIsXG4gICAgICA2NSxcbiAgICAgIDIwOCxcbiAgICAgIDUwLFxuICAgICAgMTgyLFxuICAgICAgMTY2LFxuICAgICAgMTE1LFxuICAgICAgMjQ2LFxuICAgICAgMTAyLFxuICAgICAgMTI1LFxuICAgICAgMTg0LFxuICAgICAgODEsXG4gICAgICAxNDUsXG4gICAgICA2NixcbiAgICAgIDYzLFxuICAgICAgNzYsXG4gICAgICAxNzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiU0s5MkRGQUpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMjE2OTU4MDg6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJCZXRhbWFydGVjaFwiLFxuICAgIFwibGlkXCI6IFwiNDA5NzQwMDQ3ODUyNzE6MTVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTEM4aWVJSUVNSzBpcmtHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJYVTJBVzFndjUvMEhqbTc5bEw5K3F0YkloRzFZY0tLY2FndTdSNVAxRFc4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInMvay9UYTBzZUdWdnNVZm1OdFlQcmgzYkxsYm9RRXk3c3BhbGVNd3lHSzE3RVVDL1hhSXhhaXBhclFtdXJlTVBwdUpnOHRlU2FVQVhRYnRtTlEya0N3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInhLWHQxZzM2TmF5cjAyNmgvNnZ4MldmRUw2T0dOcVh5czUzcGw5VnR5NUE4UjAvYlJqZEtlbnhCQjBzQmNEK2hxckhuSndjZXhJVE1tWU9zSkRvZEJBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMjE2OTU4MDg6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDExMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwMzIwOTY1XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ==",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
