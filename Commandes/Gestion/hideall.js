module.exports = [{
    name:   "hideall",
    $if:    "v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    $editIn[2ms; $channelcount on été fermé.]
    $forEachGuildChannel[1;{};hideall;]
    Salon en cours de fermeture...
    $endif`
    
    },{
    type: "awaited",
    name: "hideall",
    code: `
    $modifyChannelPerms[$guildid;$channelID;-viewchannel]`}]