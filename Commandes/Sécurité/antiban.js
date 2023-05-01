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
    type: "banAdd",
    $if: "v4",
    code:`
    $if[$getservervar[antibanmax]==off]
    $if[$getservervar[ban]==kick]
    $kick[$get[user];$guildID;pour avoir ban $usertag]
    $endif 
    $if[$getservervar[ban]==ban]
    $ban[$guildID;$get[user];0;pour avoir ban $usertag]
    $endif
    $if[$getservervar[ban]==derank]
    $takeRoles[$guildID;$authorID;$joinSplitText[;]]
    $textSplit[$replaceText[$userRoles[$authorID;$guildID;id;+;'];+;-];-]
    $endif
    $onlyif[$checkContains[$getServerVar[wl];<@$get[user]>]==false;]
    $endif

    $if[$getservervar[antibanmax]==on]
    $if[$getservervar[ban]==kick]
    $kick[$get[user];$guildID;pour avoir ban $usertag]
    $endif 
    $if[$getservervar[ban]==ban]
    $ban[$guildID;$get[user];0;pour avoir ban $usertag]
    $endif
    $if[$getservervar[ban]==derank]
    $takeRoles[$guildID;$authorID;$joinSplitText[;]]
    $textSplit[$replaceText[$userRoles[$authorID;$guildID;id;+;'];+;-];-]
    $endif
    $endif


    $unban[$guildID;$authorID]
    $if[$serverChannelExists[$getservervar[raidlog]]==true]
    $channelsendmessage[$getservervar[raidlog];{newEmbed:{description:Le membre <@$get[user]> (\`$get[user]\`) s'est fait **$getservervar[ban]** car il a bannit le membre **$usertag** <@$authorID> sur le serveur}{color:$getservervar[color]}}]
    $endif
    
    
   
    
    $onlyif[$checkContains[$getvar[owner];<@$get[user]>]==false;]
    $onlyIf[$get[user]!=$getVar[buyerID];]
    $onlyIf[$authorID!=$ownerID;]
    $onlyIf[$get[user]!=$clientid;]
    $let[user;$finduser[$getAuditLogs[1;;MEMBER_BAN_ADD;$guildID;{executor.id}]]]
    $onlyif[$getservervar[antiban]==on;]
    `
    
    }]