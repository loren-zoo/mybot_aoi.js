module.exports = [{
    name:   "lockall",
    $if:    "v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    $editIn[2ms; $channelcount on été fermé.]
    $forEachGuildChannel[1;{};lockall;]
    Salon en cours de fermeture...
    $endif`
    
    },{
    type: "awaited",
    name: "lockall",
    code: `
    $modifyChannelPerms[$guildid;$channelID;-sendmessage]`}]