module.exports = ({
name:   "boostlog",
$if: "v4",
code:`
$if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]  
Le salon <#$get[channel]> sera maintenant utilisé pour envoyer les logs de __boosts__
$setServerVar[boostlog;$get[channel]]
$onlyIf[$serverChannelExists[$get[channel]]==true;Salon invalide {delete:5s}]
$let[channel;$findchannel[$message[1];yes]]
$onlyIf[$message[1]!=;Argumant manquant : \`$getserverVar[prefix]$commandName <#salon>\`]
$endif


        `
},{
name:"boostlog off",
$if: "v4",
code:`
$if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
Le salon des logs des boosts est désormais __désactivé__
$setServerVar[boostlog;]
$endif

`
},{
name:"boostlog statut",
$if:"v4",
code:`
$if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
Le salon des logs est <#$getServerVar[boostlog]>.
$onlyIf[$serverChannelExists[$getServerVar[boostlog]]==true;Le salon n'est pas configuré]
$endif

`
},{
        name: "$alwaysExecute",
        $if: "v4",
        code: `
        $if[$serverChannelExists[$getServerVar[boostlog]]==true]
        $channelsendmessage[$getservervar[boostlog];**$usertag[$authorID]** (\`$authorID\`) viens de boost le serveur.]
        $endif
        $onlyIf[$messageType==USER_PREMIUM_GUILD_SUBSCRIPTION;]
        `},{
        name: "$alwaysExecute",
        $if: "v4",
        code: `
        $if[$serverChannelExists[$getServerVar[boostlog]]==true]
        $channelsendmessage[$getservervar[boostlog];**$usertag[$authorID]** (\`$authorID\`) viens de boost le serveur.]
        $endif
        $onlyIf[$messageType==USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_1;]
        `
        },{
        name: "$alwaysExecute",
        $if: "v4",
        code: `
        $if[$serverChannelExists[$getServerVar[boostlog]]==true]
        $channelsendmessage[$getservervar[boostlog];**$usertag[$authorID]** (\`$authorID\`) viens de boost le serveur.]
        $endif
        $onlyIf[$messageType==USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_2;]
            `
        
        },{
        name: "$alwaysExecute",
        $if: "v4",
        code: `
        $if[$serverChannelExists[$getServerVar[boostlog]]==true]
        $channelsendmessage[$getservervar[boostlog];**$usertag[$authorID]** (\`$authorID\`) viens de boost le serveur.]
        $endif
        $onlyIf[$messageType==USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_3;]
            `
        
        })