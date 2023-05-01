module.exports = [{
    name:   "unhideall",
    $if:    "v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    $editIn[2ms; $channelcount on été reouvert (réinitialisé).]
    $forEachGuildChannel[1;{};unhideall;]
    Salon en cours de reouverture...
    $endif`
    
    },{
    type: "awaited",
    name: "unhideall",
    code: `
    $modifyChannelPerms[$guildid;$channelID;/viewchannel]`}]