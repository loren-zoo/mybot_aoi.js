module.exports = [{
    name:	"clean",
    $if:	"v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    $channelSendMessage[$channelID;J'ai bien supprimé tous les salons se nommant **$message[1]**\n (\`$sum[$getmessagevar[clean;$messageID];1]\` salons supprimé).
    $wait[2s]
    $forEachGuildChannel[1;{};clean;]
    $onlyif[$message[1]!=;Veuillez préciser l'element des salon a supprimé.]
    $onlyIf[$hasPerms[$guildid;$clientID;managechannel]==true;Je n'ai pas assez de permissions.]
    $endif


    `
    },{
    type:	"awaited",
    name:	"clean",
    $if:	"v4",
    code:`
    $if[$checkContains[$channelname;$message[1]]==true]
    $deletechannels[$channelID]
    $setMessageVar[clean;$sum[$getMessageVar[clean;$messageID];1];$messageID]
    $endif
    `}]