module.exports = [{
    name: "antiunban",
    $if: "v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    $if[$message[1]==on]
    L'antiunban est maintenant __activé__
    $setServerVar[antiunban;on]
    $setServerVar[antiunbanmax;off]
    $endif
    $if[$message[1]==off]
    L'antiunban est maintenant __désactivé__
    $setServerVar[antiunban;off]
    $setServerVar[antiunbanmax;off]
    $endif
    $if[$message[1]==max]
    L'antiunban est maintenant __activé__ **même pour les utilisateurs dans la whitelist**
    $setServerVar[antiunban;on]
    $setServerVar[antiunbanmax;on]
    $endif
    $onlyif[$checkContains[$message[1];on;off;max]==true;L'option est invalide {delete:5s}]
    $endif
    
    `},{
    type: "banRemove",
    $if: "v4",
    code:`
    $if[$getservervar[antiunbanmax]==off]
    $if[$getservervar[unban]==kick]
    $kick[$get[user];$guildID;pour avoir unban $usertag]
    $endif 
    $if[$getservervar[unban]==ban]
    $ban[$guildID;$get[user];0;pour avoir unban $usertag]
    $endif
    $if[$getservervar[unban]==derank]
    $takeRoles[$guildID;$authorID;$joinSplitText[;]]
    $textSplit[$replaceText[$userRoles[$authorID;$guildID;id;+;'];+;-];-]
    $endif
    $onlyif[$checkContains[$getServerVar[wl];<@$get[user]>]==false;]
    $endif

    $if[$getservervar[antiunbanmax]==on]
    $if[$getservervar[unban]==kick]
    $kick[$get[user];$guildID;pour avoir unban $usertag]
    $endif 
    $if[$getservervar[unban]==ban]
    $ban[$guildID;$get[user];0;pour avoir unban $usertag]
    $endif
    $if[$getservervar[unban]==derank]
    $takeRoles[$guildID;$authorID;$joinSplitText[;]]
    $textSplit[$replaceText[$userRoles[$authorID;$guildID;id;+;'];+;-];-]
    $endif
    $endif

    $ban[$guildID;$authorID;0; Antiunban activé]

    $if[$serverChannelExists[$getservervar[raidlog]]==true]
    $channelsendmessage[$getservervar[raidlog];{newEmbed:{description:Le membre <@$get[user]> (\`$get[user]\`) s'est fait **$getservervar[unban]** car il a débannit le membre **$usertag** <@$authorID> sur le serveur}{color:$getservervar[color]}}]
    $endif
    

    
    $onlyif[$checkContains[$getvar[owner];<@$get[user]>]==false;]
    $onlyIf[$get[user]!=$getVar[buyerID];]
    $onlyIf[$get[user]!=$ownerid;]
    $onlyIf[$get[user]!=$clientid;]
    $let[user;$finduser[$getAuditLogs[1;;MEMBER_BAN_REMOVE;$guildID;{executor.id}]]]
    $onlyif[$getservervar[antiunban]==on;]
    `
    }]