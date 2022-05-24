const Discord = require("discord.js");
const Enmap = require("enmap");
const config = require("./config.json")

const client = new Discord.Client({
    shards: "auto", // 1800+ ,
    allowedMentions: {
      parse: ["roles", "users"],
      repliedUser: false,
    },
    failIfNotExists: false,
    presence: {
      activity: {
        name: `DM für Support 🔥 | ${config.prefix}help`, 
        type: "STREAMING", 
        url: "https://twitch.tv/2icecube"
      },
      status: "idle"
    },
    restTimeOffset: 0,
    partials: ["CHANNEL", "MESSAGE", "REACTION"],
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MEMBERS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.DIRECT_MESSAGES,
    ]
});
client.modmailDb = new Enmap({
    name: "Modmail-Database",
    //dataDir: "./databases/modmail" //create the folder(s)
});
client.settings = new Enmap({
    name: "Settings-Database",
    //dataDir: "./databases/settings" //create the folder(s)
});
client.login(config.token)
client.on("ready", () => {
    console.log(`${client.user.tag} ist online!`);
})

require("./modmail")(client);