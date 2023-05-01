module.exports = [{
    name:"presetlogs",
    $if:"v4",
    code:`
$if[$checkContains[$getvar[owner];<@$authorID>]==true;$getvar[buyerID]==$authorID]
$channelSendMessage[$channelID;Les logs ont été configurées]

$setServerVar[joinleavelog;$get[joinleave]]
$setservervar[raidlog;$get[raid]]
$setservervar[channellog;$get[channel]]
$setservervar[boostlog;$get[boost]]
$setservervar[msglog;$get[msg]]
$setservervar[rolelog;$get[role]]
$setservervar[voicelog;$get[voice]]

$let[raid;$createChannel[$guildId;📁・logs-antiraid;text;yes;$get[id]]]
$let[joinleave;$createChannel[$guildId;📁・logs-join-leave;text;yes;$get[id]]] 
$let[channel;$createChannel[$guildId;📁・logs-salons;text;yes;$get[id]]]
$let[boost;$createChannel[$guildId;📁・logs-boosts;text;yes;$get[id]]]
$let[msg;$createChannel[$guildId;📁・logs-messages;text;yes;$get[id]]]
$let[voice;$createChannel[$guildId;📁・logs-voice;text;yes;$get[id]]]
$let[role;$createChannel[$guildId;📁・logs-rôles;text;yes;$get[id]]]

$modifyChannelPerms[$guildID;$get[id];-viewchannel]

$wait[1s]
$let[id;$createChannel[$guildId;Espace Logs;Category;yes]]
$endif


    
    `
},{
    type:"channelDelete",
    $if:"v4",
    code:`
    $if[$getServerVar[raidlog]==$channelID]
    $setservervar[raidlog;]
    $endif
    $if[$getservervar[joinleavelog]==$channelID]
    $setservervar[joinleavelog;]
    $endif
    $if[$getservervar[msglog]==$channelID]
    $setservervar[msglog;]
    $endif
    $if[$getservervar[channellog]==$channelID]
    $setservervar[channelog;]
    $endif
    $if[$getservervar[boostlog]==$channelID]
    $setservervar[boostlog;]
    $endif
    $if[$getservervar[voicelog]==$channelID]
    $setservervar[voicelog;]
    $endif
    $if[$getservervar[rolelog]==$channelID]
    $setservervar[rolelog;]
    $endif

    `
    }]