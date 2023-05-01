module.exports =  [{
    name: "blrank add",
    aliases:"blrank",
    $if: "v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    $channelsendmessage[$channelID;**$usertag[$get[blrank]]** est maintenant blrank]
    $setServerVar[blrank;$getServerVar[blrank],<@$findUser[$message[1]]>]
    $onlyIf[$checkContains[$getServerVar[blrank];<@$get[blrank]>]!=true;**$usertag[$get[blrank]]** est déjà blrank]
    $let[blrank;$findUser[$message[1];no]]
    $onlyif[$message[1]!=;Argument invalide{delete:5s}]]
    $endif

    `},{
    name: "blrank del",
    $if: "v4",
    code:`    
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    $channelsendmessage[$channelID;**$usertag[$get[blrank]]** n'est plus blrank]
    $setServerVar[blrank;$replaceText[$getServerVar[blrank];,<@$findUser[$message[1]]>;]]
    $onlyIf[$checkContains[$getServerVar[blrank];<@$get[blrank]>]!=false;**$usertag[$get[blrank]]** n'est pas blrank]
    $let[blrank;$findUser[$message[1];no]]
    $onlyif[$message[1]!=;Argument invalide{delete:5s}]
    $endif


    `
    },{
    name: "blrank list",
    $if: "v4",
    code:`    
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    $color[1;$getservervar[color]]
    $title[1;Blrank]
    $description[1;$replaceText[$getServerVar[blrank];,;
    ]
    $onlyif[$getservervar[blrank]!=;Aucun membre blrank enregistré \n**\`$getservervar[prefix]blrank add <mention>\`**]
    $endif

    `
    },{
    type: "memberUpdate",
    $if: "v4",
    code:`
    
    $if[$serverChannelExists[$getservervar[raidlog]]==true]
    $channelsendmessage[$getservervar[raidlog];{newEmbed:{description:<@$get[user]> (\`$get[user]\`) à donné un rôle à $usertag (\`$authorID\`) qui était blrank. }{color:$getservervar[color]}}]
    $endif

    $takeRoles[$guildID;$authorID;$joinSplitText[;]]
    $textSplit[$replaceText[$userRoles[$authorID;$guildID;id;+;'];+;-];-]
    $onlyif[$checkContains[$getservervar[wl];<@$get[user]>]==false;]
    $onlyif[$checkContains[$getvar[owner];<@$get[user]>]==false;]
    $onlyIf[$get[user]!=$getvar[buyerID];]
    $onlyIf[$get[user]!=$clientid;]
    $let[user;$finduser[$getAuditLogs[1;;MEMBER_ROLE_UPDATE;$guildID;{executor.id}]]]
    $onlyif[$newMember[roles]!=;]
    $onlyIf[$oldMember[roles]!=$newMember[roles];] 
    $onlyif[$checkContains[$getServerVar[blrank];<@$authorID>]==true;]
    $onlyif[$getservervar[blrank]!=;]
    `
    }]