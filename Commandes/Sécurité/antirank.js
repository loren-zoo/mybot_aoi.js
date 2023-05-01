module.exports = [{
    name: "antirank",
    $if: "v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    $if[$message[1]==on]
    L'antirankest maintenant __activé__
    $setServerVar[antirank;on]
    $setServerVar[antirankmax;off]
    $endif
    $if[$message[1]==off]
    L'antirank est maintenant __désactivé__
    $setServerVar[antirank;off]
    $setServerVar[antirankmax;off]
    $endif
    $if[$message[1]==max]
    L'antirank est maintenant __activé__ **même pour les utilisateurs dans la whitelist**
    $setServerVar[antirank;on]
    $setServerVar[antirankmax;on]
    $endif
    $onlyif[$checkContains[$message[1];on;off;max]==true;L'option est invalide {delete:5s}]
    $endif
    
    `},{
    type: "memberUpdate",
    $if: "v4",
    code:`
    $if[$getservervar[antirankmax]==off]
    $if[$getservervar[rank]==kick]
    $kick[$get[user];$guildID;Rank un membre]
    $endif 
    $if[$getservervar[rank]==ban]
    $ban[$guildID;$get[user];0;Rank un membre]
    $endif
    $if[$getservervar[rank]==derank]
    $takeRoles[$guildID;$authorID;$joinSplitText[;]]
    $textSplit[$replaceText[$userRoles[$authorID;$guildID;id;+;'];+;-];-]
    $endif

    $onlyif[$checkContains[$getServerVar[wl];<@$get[user]>]==false;]
    $endif
    

    $if[$getservervar[antirankmax]==on]
    $if[$getservervar[rank]==kick]
    $kick[$get[user];$guildID;Rank un membre]
    $endif 
    $if[$getservervar[rank]==ban]
    $ban[$guildID;$get[user];0;Rank un membre]
    $endif
    $if[$getservervar[rank]==derank]
    $takeRoles[$guildID;$authorID;$joinSplitText[;]]
    $textSplit[$replaceText[$userRoles[$authorID;$guildID;id;+;'];+;-];-]
    $endif
    $endif
    
    $if[$serverChannelExists[$getservervar[raidlog]]==true]
    $channelsendmessage[$getservervar[raidlog];{newEmbed:{description:Le membre <@$get[user]> (\`$get[user]\`) à été **$getServerVar[rank]** car il a essayé de rank <@$authorID> sur le serveur}{color:$getservervar[color]}}]
    $endif


    $onlyif[$checkContains[$getvar[owner];<@$get[user]>]==false;]
    $onlyIf[$get[user]!=$getvar[buyerID];]
    $onlyIf[$get[user]!=$clientid;]
    $onlyIf[$authorID!=$ownerID;]
    $let[user;$finduser[$getAuditLogs[1;;MEMBER_ROLE_UPDATE;$guildID;{executor.id}]]]
    $onlyif[$newMember[roles]!=;]
    $onlyIf[$oldMember[roles]!=$newMember[roles];] 
    $onlyif[$getservervar[antirank]==on;]
    
    
    `
    }]  