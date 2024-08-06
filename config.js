lconst fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "2347088575126" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347088575126";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_48_08_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxODYsXG4gICAgICAgIDYxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDM0LFxuICAgICAgICAxODksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDk1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDQyLFxuICAgICAgICA5NixcbiAgICAgICAgMTAxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTksXG4gICAgICAgIDExNSxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1MixcbiAgICAgICAgNTksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTc2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMjUsXG4gICAgICAgIDU1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjE3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODAsXG4gICAgICAgIDk4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjI4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTcxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTU4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQzLFxuICAgICAgICA0MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDczLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDcyLFxuICAgICAgICAzMSxcbiAgICAgICAgNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxODMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDg5LFxuICAgICAgICAzNixcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxLFxuICAgICAgICAxNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTI4LFxuICAgICAgICA0NixcbiAgICAgICAgNDgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTA3LFxuICAgICAgICA4MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNjksXG4gICAgICAgIDE2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTMxLFxuICAgICAgICA2M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDQyLFxuICAgICAgICAwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTU0LFxuICAgICAgICA2OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTAxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTkyLFxuICAgICAgICAzNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTg1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQwLFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOSxcbiAgICAgICAgMjUyLFxuICAgICAgICAzNixcbiAgICAgICAgMTY4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODMsXG4gICAgICAgIDIxMixcbiAgICAgICAgODksXG4gICAgICAgIDI3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDQzLFxuICAgICAgICA4OCxcbiAgICAgICAgMzksXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTMwLFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDg4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA2MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTc0LFxuICAgICAgICA0NixcbiAgICAgICAgOTMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA5NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTkyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDksXG4gICAgICAgIDk5LFxuICAgICAgICAxODksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTksXG4gICAgICAgIDE5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDM2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjE0LFxuICAgICAgICA4NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDI4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA5LFxuICAgICAgICA3MCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDQyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDgzLFxuICAgICAgICA0MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMixcbiAgICAgICAgMTMxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaExjVVRjMnFPTUh1b20vajBuQXhhWHFLbm1WTTR4TkYvODhKS3N3eVpGQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ3MDg4NTc1MTI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxMUFEM0UyODY0QjA5MzMyMkIwRkUyNzMyOTZENjkwRlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI5MjY4OTlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwieW9RVW13N19TQ09JVF9ONnp3N3hCd1wiLFxuICBcInBob25lSWRcIjogXCIzNDkyOTQyNi02ZDIyLTQxY2YtOTMxNS1jOWZkOTlhNmFjYzFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTcsXG4gICAgICAzNyxcbiAgICAgIDE2OSxcbiAgICAgIDE1NSxcbiAgICAgIDExMSxcbiAgICAgIDQ0LFxuICAgICAgMTk5LFxuICAgICAgMTY5LFxuICAgICAgMzcsXG4gICAgICA2OCxcbiAgICAgIDc2LFxuICAgICAgNDQsXG4gICAgICAxMDAsXG4gICAgICAxODcsXG4gICAgICAxNjgsXG4gICAgICA5MCxcbiAgICAgIDE5NyxcbiAgICAgIDE0MSxcbiAgICAgIDE4MCxcbiAgICAgIDEwOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3LFxuICAgICAgMTYyLFxuICAgICAgMjIyLFxuICAgICAgMTQ1LFxuICAgICAgMjE5LFxuICAgICAgNyxcbiAgICAgIDE3MyxcbiAgICAgIDIwOCxcbiAgICAgIDgxLFxuICAgICAgMjI5LFxuICAgICAgMjgsXG4gICAgICAxMDYsXG4gICAgICAxLFxuICAgICAgMjA0LFxuICAgICAgMTcwLFxuICAgICAgMTA1LFxuICAgICAgMTQzLFxuICAgICAgNjQsXG4gICAgICAxNTksXG4gICAgICAxODVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNENORlRCMk1cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwODg1NzUxMjY6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjc0MDc5MjI3NjIxNDgwOjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT1NsbHBjR0VLcU94N1VHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJpUVprNXFxSkpoZUl4Q1dWK0ZjUEtPVDg3ODhIcDJmM1laZ1ZvMVVnWjBvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImtUZjdYcHljdGhlSklnSVg2MFRsQ1cvZkJJRjIrMWYrNkFXQWdZQ2FZdDRPME83YmZ4N1dWTzlUbzlvMVpGc1N5b1ArK2ZjUTZHVzZKNHpYVUxSNUFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlpLeXNKUjZnVWwzL21MdTVkRTUyNFNmcWN0bytjWEl4U042QnZwczNWaVEwcGRwbGs4MTkxR0Z2OHd1RDFRRm4ydmphQW9udUduLytIdmVOOFMzMmp3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwODg1NzUxMjY6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjkyNjg5M1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
