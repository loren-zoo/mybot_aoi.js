module.exports = [{
    name:   "unlockall",
    $if:    "v4",
    code:`$if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    $editIn[2ms; $channelcount on été fermé.]
    $forEachGuildChannel[1;{};unlockall;]
    Salon en cours de fermeture...

    $endif`
    
    },{
    type: "awaited",
    name: "unlockall",
    code: `
    $modifyChannelPerms[$guildid;$channelID;/sendmessage]`}]