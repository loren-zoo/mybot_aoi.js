module.exports = [{
    name: "antiupdate",
    aliases:["antiuc","antiguild"],
    $if: "v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    $if[$message[1]==on]
    L'antiupdate est maintenant __activé__
    $setServerVar[antiuc;on]
    $setServerVar[antiucmax;off]
    $endif
    $if[$message[1]==off]
    L'antiupdate est maintenant __désactivé__
    $setServerVar[antiuc;off]
    $setServerVar[antiucmax;off]
    $endif
    $if[$message[1]==max]
    L'antiupdate est maintenant __activé__ **même pour les utilisateurs dans la whitelist**
    $setServerVar[antiuc;on]
    $setServerVar[antiucmax;on]
    $endif
    $onlyif[$checkContains[$message[1];on;off;max]==true;L'option est invalide {delete:5s}]
    $endif
    
        `},{
            type: "guildUpdate",
            $if: "v4",
            code:`
    $if[$getservervar[antiucmax]==off]
    $if[$getservervar[update]==kick]
    $kick[$get[user];$guildID;Modification du serveur]
    $endif 
    $if[$getservervar[update]==ban]
    $ban[$guildID;$get[user];0;Modification du serveur]
    $endif
    $if[$getservervar[update]==derank]
    $takeRoles[$guildID;$authorID;$joinSplitText[;]]
    $textSplit[$replaceText[$userRoles[$authorID;$guildID;id;+;'];+;-];-]
    $endif
    $setGuildName[$oldGuild[name]]
    $if[$serverChannelExists[$getservervar[raidlog]]==true]
    $channelsendmessage[$getservervar[raidlog];{newEmbed:{description:Le membre <@$get[user]> (\`$get[user]\`) s'est fait **$getServerVar[update]** car il a fait des modifications sur le serveur}{color:$getservervar[color]}}]
    $endif

    $onlyif[$checkContains[$getServerVar[wl];<@$get[user]>]==false;]
    
    $endif

    $if[$getservervar[antiucmax]==on]
    $if[$getservervar[update]==kick]
    $kick[$get[user];$guildID;Modification du serveur]
    $endif 
    $if[$getservervar[update]==ban]
    $ban[$guildID;$get[user];0;Modification du serveur]
    $endif
    $if[$getservervar[update]==derank]
    $takeRoles[$guildID;$authorID;$joinSplitText[;]]
    $textSplit[$replaceText[$userRoles[$authorID;$guildID;id;+;'];+;-];-]
    $endif
    $setGuildName[$oldGuild[name]]
    $if[$serverChannelExists[$getservervar[raidlog]]==true]
    $channelsendmessage[$getservervar[raidlog];{newEmbed:{description:Le membre <@$get[user]> (\`$get[user]\`) s'est fait **$getServerVar[update]** car il a fait des modifications sur le serveur}{color:$getservervar[color]}}]
    $endif
    $endif

   
    
    
    
    $onlyif[$checkContains[$getvar[owner];<@$get[user]>]==false;]
    $onlyIf[$get[user]!=$ownerid;]
    $onlyIf[$get[user]!=$clientid;]
    $let[user;$finduser[$getAuditLogs[1;;GUILD_UPDATE;$guildID;{executor.id}]]]
    $onlyif[$getservervar[antiupdate]==on;]
            
            `
        }]