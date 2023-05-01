module.exports = [{
    name: "antibot",
    $if: "v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    $if[$message[1]==on]
    L'antibot est maintenant __activé__
    $setServerVar[antibot;on]
    $setServerVar[antibotmax;off]
    $endif
    $if[$message[1]==off]
    L'antibot est maintenant __désactivé__
    $setServerVar[antibot;off]
    $setServerVar[antibotmax;off]
    $endif
    $if[$message[1]==max]
    L'antibot est maintenant __activé__ **même pour les utilisateurs dans la whitelist**
    $setServerVar[antibot;on]
    $setServerVar[antibotmax;on]
    $endif
    $onlyif[$checkContains[$message[1];on;off;max]==true;L'option est invalide {delete:5s}]
    $endif
    
    
    
    `},{
    type: "join",
    $if: "v4",
    code:`
    $if[$getservervar[antibotmax]==off]
    $if[$getservervar[bot]==kick]
    $kick[$get[user];$guildID;Invite un bot]
    $endif 
    $if[$getservervar[bot]==ban]
    $ban[$guildID;$get[user];0;Invite un bot]
    $endif
    $if[$getservervar[bot]==derank]
    $takeRoles[$guildID;$authorID;$joinSplitText[;]]
    $textSplit[$replaceText[$userRoles[$authorID;$guildID;id;+;'];+;-];-]
    $endif
    $ban[$guildID;$authorID;0;Antibot]
    
    $onlyif[$checkContains[$getServerVar[wl];<@$get[user]>]==false;]
    $endif


    $if[$getservervar[antibotmax]==on]
    $if[$getservervar[bot]==kick]
    $kick[$get[user];$guildID;Invite un bot]
    $endif 
    $if[$getservervar[bot]==ban]
    $ban[$guildID;$get[user];0;Invite un bot]
    $endif
    $if[$getservervar[bot]==derank]
    $takeRoles[$guildID;$authorID;$joinSplitText[;]]
    $textSplit[$replaceText[$userRoles[$authorID;$guildID;id;+;'];+;-];-]
    $endif
    $ban[$guildID;$authorID;0;Antibot]
    $endif

    $if[$serverChannelExists[$getservervar[raidlog]]==true]
    $channelsendmessage[$getservervar[raidlog];{newEmbed:{description:Le membre <@$get[user]> (\`$get[user]\`) a été **$getServerVar[bot]** car il a tenté d'inviter le robot <@$authorID> sur le serveur}{color:$getservervar[color]}}]
    $endif
    $onlyIf[$authorID!=$ownerID;]
    $onlyif[$checkContains[$getvar[owner];<@$get[user]>]==false;]
    $onlyIf[$get[user]!=$getvar[buyerID];]
    $onlyIf[$get[user]!=$clientid;]
    $let[user;$finduser[$getAuditLogs[1;;BOT_ADD;$guildID;{executor.id}]]]
    $onlyif[$getservervar[antibot]==on;]
    `
    
    }]