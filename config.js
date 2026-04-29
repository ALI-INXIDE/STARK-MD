const fs = require('fs'),
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

global.session = "https://stark-pair.vercel.app";

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "STARK-MD==", // Add sess Id here especially when deploying on panels else use app.json and .env file...
    SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", // Add multiple numbers with country codes without (+), separated by comma
    ANTI_DELETE: process.env.ANTI_DELETE || "true", // ✅ only ONE, default = true
    AUTO_STATUS_VIEWS: process.env.AUTO_STATUS_VIEWS || "true",
    AUTO_STATUS_REACTS: process.env.AUTO_STATUS_REACTS || "true",
    AUTO_STATUS_EMOJIS: process.env.AUTO_STATUS_EMOJIS || "❤️,💀,🌚,🌟,🔥,❤️‍🩹,🌸,🍁,🍂,🦋,🍥,🍧,🍨,🍫,🍭,🎀,🎐,🎗️,👑,🚩,🇵🇰,🍓,🍇,🧃,🗿,🎋,💸,🧸,🦢,✨,🌾,🌊,⚡,🌏,🕸️,🎀,🪄,🌝,🌜,💫,🤍,🖤,🤎,💜,💙", // Input your custom emojis
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
    STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ STATUS VIEWED BY ROLEX-MD", // Custom message
    MODE: process.env.MODE || "public", // Options: private, public, inbox, groups
    TGTOKEN:process.env.TGTOKEN || "7672295852:AAG0SEMHbM1jhkpodxHspJuVT5tiAhXPPpI",
    OWNER_NUMBER: process.env.OWNER_NUMBER || "916291099062", // Only 1 owner number here, others add to sudo numbers
    OWNER_NAME: process.env.OWNER_NAME || "ROLEX", // Custom name
    PACK_AUTHOR: process.env.PACK_AUTHOR || "", // Custom
    PACK_NAME: process.env.PACK_NAME || "",
    PREFIX: process.env.PREFIX || ".",
    VERSION: process.env.VERSION || "9.0.0",
    ANTI_LINK: process.env.ANTI_LINK || "false", // true = kick, delete = delete, warn = warn
    ANTI_CALL: process.env.ANTI_CALL || "false",
    ANTIBAD: process.env.ANTIBAD || "false",
    BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Will be deleted if ANTIBAD is true
    ANTI_CALL_MSG: process.env.ANTI_CALL_MSG || "*📞 ᴄαℓℓ ɴσт αℓℓσωє∂ ιɴ тнιѕ ɴᴜмвєʀ уσυ ∂σɴт нανє ᴘєʀмιѕѕισɴ 📵*",
    AUTO_REACT: process.env.AUTO_REACT || "false",
    OWNER_REACT: process.env.OWNER_REACT || "false",
    BOT_NAME: process.env.BOT_NAME || "𓆩ု᪳𝐒𝐓𝐀𝐑𝐊-𝐌𝐃ှ᪳𓆪", // Don't change
    BOT_PIC: process.env.BOT_PIC || "https://files.catbox.moe/2ka956.jpg", // Don't change
    AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
    AUTO_BIO: process.env.AUTO_BIO || "false",
    AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "STARK MD ALIVE",
    WELCOME: process.env.WELCOME || "false",
    AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // true = bluetick all messages, commands = bluetick commands only
    AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Multiple country codes separated by comma
    PRESENCE: process.env.PRESENCE || "null", // typing, recording, online, null
    TIME_ZONE: process.env.TIME_ZONE || "kolkata", // Enter your timezone
};

// Auto-reload this config when file changes
let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(`Update '${__filename}'`);
    delete require.cache[file];
    require(file);
});
