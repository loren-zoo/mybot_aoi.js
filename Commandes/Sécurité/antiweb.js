module.exports = [{
    name: "antiweb",
    aliases:"antiwehook",
    $if: "v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    $if[$message[1]==on]
    L'antiwebhook est maintenant __activé__
    $setServerVar[antiweb;on]
    $setServerVar[antiwebnmax;off]
    $endif
    $if[$message[1]==off]
    L'antiwebhook est maintenant __désactivé__
    $setServerVar[antiweb;off]
    $setServerVar[antiwebmax;off]
    $endif
    $if[$message[1]==max]
    L'antiwebhook est maintenant __activé__ **même pour les utilisateurs dans la whitelist**
    $setServerVar[antiweb;on]
    $setServerVar[antiwebmax;on]
    $endif
    $onlyif[$checkContains[$message[1];on;off;max]==true;L'option est invalide {delete:5s}]
    $endif
    
    
    `},{
        type: "webhookUpdate",
        $if: "v4",
        code:`
        $if[$getservervar[antiwebmax]==off]
        $if[$getservervar[web]==kick]
        $kick[$get[user];$guildID;à crée un webhook]
        $endif 
        $if[$getservervar[web]==ban]
        $ban[$guildID;$get[user];0;à crée un webhook]
        $endif
        $if[$getservervar[web]==derank]
        $takeRoles[$guildID;$authorID;$joinSplitText[;]]
        $textSplit[$replaceText[$userRoles[$authorID;$guildID;id;+;'];+;-];-]
        $onlyIf[$userRoleCount[$get[user]]>1;]
        $endif
        $onlyif[$checkContains[$getServerVar[wl];<@$get[user]>]==false;]
        $endif


        $if[$getservervar[antiwebmax]==on]
        $if[$getservervar[web]==kick]
        $kick[$get[user];$guildID;à crée un webhook]
        $endif 
        $if[$getservervar[web]==ban]
        $ban[$guildID;$get[user];0;à crée un webhook]
        $endif
        $if[$getservervar[web]==derank]
        $takeRoles[$guildID;$authorID;$joinSplitText[;]]
        $textSplit[$replaceText[$userRoles[$authorID;$guildID;id;+;'];+;-];-]
        $onlyIf[$userRoleCount[$get[user]]>1;]
        $endif
        $endif


        $if[$serverChannelExists[$getservervar[raidlog]]==true]
        $channelsendmessage[$getservervar[raidlog];{newEmbed:{description:Le membre <@$get[user]> (\`$get[user]\`) à été **$getservervar[web]** car il a crée un webhook sur le serveur}{color:$getservervar[color]}}]
        $endif

        $onlyif[$checkContains[$getvar[owner];<@$get[user]>]==false;]
        $onlyIf[$get[user]!=$ownerid;]
        $onlyIf[$get[user]!=$getvar[buyerID]]
        $onlyIf[$get[user]!=$clientid;]
        $let[user;$finduser[$getAuditLogs[1;;WEBHOOK_CREATE;$guildID;{executor.id}]]]
        $onlyif[$getservervar[antiweb]==on;]
        `
            
        },{
            type: "webhookUpdate",
            $if: "v4",
            code:`
            $if[$getservervar[antiwebmax]==off]
            $if[$getservervar[web]==kick]
            $kick[$get[user];$guildID;à crée un webhook]
            $endif 
            $if[$getservervar[web]==ban]
            $ban[$guildID;$get[user];0;à crée un webhook]
            $endif
            $if[$getservervar[web]==derank]
            $takeRoles[$guildID;$authorID;$joinSplitText[;]]
            $textSplit[$replaceText[$userRoles[$authorID;$guildID;id;+;'];+;-];-]
            $onlyIf[$userRoleCount[$get[user]]>1;]
            $endif
            $onlyif[$checkContains[$getServerVar[wl];<@$get[user]>]==false;]
            $endif


            $if[$getservervar[antiwebmax]==on]
            $if[$getservervar[web]==kick]
            $kick[$get[user];$guildID;à crée un webhook]
            $endif 
            $if[$getservervar[web]==ban]
            $ban[$guildID;$get[user];0;à crée un webhook]
            $endif
            $if[$getservervar[web]==derank]
            $takeRoles[$guildID;$authorID;$joinSplitText[;]]
            $textSplit[$replaceText[$userRoles[$authorID;$guildID;id;+;'];+;-];-]
            $onlyIf[$userRoleCount[$get[user]]>1;]
            $endif
            $endif


            $if[$serverChannelExists[$getservervar[raidlog]]==true]
            $channelsendmessage[$getservervar[raidlog];{newEmbed:{description:Le membre <@$get[user]> (\`$get[user]\`) à été **$getservervar[web]** car il a crée un webhook sur le serveur}{color:$getservervar[color]}}]
            $endif

            $onlyif[$checkContains[$getvar[owner];<@$get[user]>]==false;]
            $onlyIf[$get[user]!=$ownerid;]
            $onlyIf[$get[user]!=$getvar[buyerID]]
            $onlyIf[$get[user]!=$clientid;]
            $let[user;$finduser[$getAuditLogs[1;;WEBHOOK_UPDATE;$guildID;{executor.id}]]]
            $onlyif[$getservervar[antiweb]==on;]
            `
        },{
            type: "webhookUpdate",
            $if: "v4",
            code:`
            $if[$getservervar[antiwebmax]==off]
            $if[$getservervar[web]==kick]
            $kick[$get[user];$guildID;à crée un webhook]
            $endif 
            $if[$getservervar[web]==ban]
            $ban[$guildID;$get[user];0;à crée un webhook]
            $endif
            $if[$getservervar[web]==derank]
            $takeRoles[$guildID;$authorID;$joinSplitText[;]]
            $textSplit[$replaceText[$userRoles[$authorID;$guildID;id;+;'];+;-];-]
            $onlyIf[$userRoleCount[$get[user]]>1;]
            $endif
            $onlyif[$checkContains[$getServerVar[wl];<@$get[user]>]==false;]
            $endif


            $if[$getservervar[antiwebmax]==on]
            $if[$getservervar[web]==kick]
            $kick[$get[user];$guildID;à crée un webhook]
            $endif 
            $if[$getservervar[web]==ban]
            $ban[$guildID;$get[user];0;à crée un webhook]
            $endif
            $if[$getservervar[web]==derank]
            $takeRoles[$guildID;$authorID;$joinSplitText[;]]
            $textSplit[$replaceText[$userRoles[$authorID;$guildID;id;+;'];+;-];-]
            $onlyIf[$userRoleCount[$get[user]]>1;]
            $endif
            $endif


            $if[$serverChannelExists[$getservervar[raidlog]]==true]
            $channelsendmessage[$getservervar[raidlog];{newEmbed:{description:Le membre <@$get[user]> (\`$get[user]\`) à été **$getservervar[web]** car il a crée un webhook sur le serveur}{color:$getservervar[color]}}]
            $endif

            $onlyif[$checkContains[$getvar[owner];<@$get[user]>]==false;]
            $onlyIf[$get[user]!=$ownerid;]
            $onlyIf[$get[user]!=$getvar[buyerID]]
            $onlyIf[$get[user]!=$clientid;]
            $let[user;$finduser[$getAuditLogs[1;;WEBHOOK_DELETE;$guildID;{executor.id}]]]
            $onlyif[$getservervar[antiweb]==on;]
            `
        }]