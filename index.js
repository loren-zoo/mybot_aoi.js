const fs = require ("fs")
const aoijs = require("aoi.js")
const { AoiVoice, PlayerEvents, PluginName, Cacher, Filter } = require("@akarui/aoi.music");
const config = require('./config.js');
const bot = new aoijs.Bot(config.Bot);
const files = fs.readdirSync('./Loader').filter(file => file.endsWith('.js'))
files.forEach(x => {
  require(`./Loader/${x}`)(bot)
});


require('./Handler/Variables.js')(bot)
require('./Handler/Callbacks.js')(bot) 
require('./Handler/Statut.js')(bot) 
require('./Handler/antiCrash.js')(bot)

bot.readyCommand({
code:`
$log[Informations
- $serverCount guilds
- $allMembersCount membres
- $usertag[$clientID]]


`})
// $sendWebhookMessage[1094982310123815053;SMeHUvndVM9GyqUZy9ASDzgLru6_ofKIUFzGOVXUtzQmmi9heoLHjg-CkBtuYIpBEJZT;\`$username[$clientid]\` viens de se connecter ! <@$getvar[buyerID]>]

const voice = new AoiVoice(bot, {
  searchOptions: {
      soundcloudClientId: "Soundcloud ID",
      youtubegl: "US",
  },
  requestOptions: {
      offsetTimeout: 0,
      soundcloudLikeTrackLimit: 200,
  },
});


voice.addEvent(PlayerEvents.TRACK_START);
voice.addEvent(PlayerEvents.TRACK_END);

voice.addPlugin(PluginName.Cacher, new Cacher("memory" /* or "disk" */));
voice.addPlugin(PluginName.Filter, new Filter({
    filterFromStart: false,
}));




bot.command ({
  name: "<@$clientID>",
  nonPrefixed : true,
  code: ` 
  Mon prefix est \`$getservervar[prefix]\`
  $onlyIf[$noMentionMessage==;]
  `})


