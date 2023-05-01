module.exports = ({
    name:   "channellog",
    $if: "v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]  
    Le salon <#$get[channel]> sera maintenant utilisé pour envoyer les logs de __salons__.
    $setServerVar[channellog;$get[channel]]
    $onlyIf[$serverChannelExists[$get[channel]]==true;Salon invalide {delete:5s}]
    $let[channel;$findchannel[$message[1];yes]]
    $onlyIf[$message[1]!=;Argumant manquant : \`$getserverVar[prefix]$commandName <#salon>\`]
    $endif

    
            `
    },{
    name:"channellog off",
    $if: "v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    Le salon des logs des salons est désormais __désactivé__
    $setServerVar[channellog;]
    $endif

    `
    },{
    name:"channelog statut",
    $if:"v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    Le salon des logs est <#$getServerVar[channellog]>.
    $onlyIf[$serverChannelExists[$getServerVar[channelog]]==true;Le salon n'est pas configuré]
    $endif

    `
    },{
    type: "channelDelete",
    channel:    "$getservervar[channellog]",
    code:`
    $title[1;Salon supprimé]
    $description[<@$get[user]>(\`$get[user]\`) a supprimé le salon \`$oldChannel[name]\`(\`$oldChannel[id]\`)]
    $color[1;$getServerVar[color]]
    $footer[1;$getvar[footerall]]
    $let[user;$finduser[$getAuditLogs[1;;CHANNEL_DELETE;$guildID;{executor.id}]]]
    $onlyIf[$serverChannelExists[$getservervar[channellog]]==true;]

    `
    
    },{
    type: "channelCreate",
    channel:    "$getservervar[channellog]",
    code:`
    $title[1;Salon crée]
    $description[<@$get[user]>(\`$get[user]\`) a crée le salon <#$newChannel[id]>(\`$newChannel[id]\`)]
    $color[1;$getServerVar[color]]
    $footer[1;$getvar[footerall]]
    $let[user;$finduser[$getAuditLogs[1;;CHANNEL_CREATE;$guildID;{executor.id}]]]
    $onlyIf[$serverChannelExists[$getservervar[channellog]]==true;]
        `
    
    })