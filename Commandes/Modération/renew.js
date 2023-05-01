module.exports =({
name: "nuke",
aliases: ["renew"],
$if:    "v4",
code: `
$if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
$channelSendMessage[$getUserVar[channelnuke];<@$authorID>, Salon recrée]
$wait[1s]
$deleteChannel[$get[channel]]
$setUserVar[channelnuke;$cloneChannel[$get[channel];$channelName[$get[channel]];yes]]
$let[channel;$mentionedChannels[1;yes]]
$onlyBotPerms[managechannel;Je n'ai pas les permissions nécessaires pour gérer ce salon]
$endif

`
})