module.exports = [{
name:   "messagelog",
$if:    "v4",
code:`
$if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]  
Le salon <#$get[channel]> sera maintenant utilisé pour envoyer les logs de __messages__
$setServerVar[msglog;$get[channel]]
$onlyIf[$serverChannelExists[$get[channel]]==true;Salon invalide {delete:5s}]
$let[channel;$findchannel[$message[1];yes]]
$onlyIf[$message[1]!=;Argumant manquant : \`$getserverVar[prefix]$commandName <#salon>\`]
$endif


`
},{
    name:"messagelog off",
    $if: "v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    Le salon des logs des messages est désormais __désactivé__
    $setServerVar[msglog;]
    $endif

    `
    },{
    name:"messagelog statut",
    $if:"v4",
    code:`$if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    Le salon des logs est <#$getServerVar[msglog]>.
    $onlyIf[$serverChannelExists[$getServerVar[msglog]]==true;Le salon n'est pas configuré]
    $endif

    `
    },{
    type: "messageDelete",
    channel:    "$getservervar[msglog]",
    code:`
    $image[1;$messageAttachment]
    $title[1;Message supprimé]
    $description[1;<@$authorID>(\`$authorID\`) a supprimé son message dans <#$channelUsed>
    
    $message]
    $color[1;$getServerVar[color]]
    $footer[1;$getvar[footerall]]
    $onlyIf[$message!=;]
    $onlyIf[$serverChannelExists[$getservervar[msglog]]==true;]
    `
    },{
    type: "messageUpdate",
    channel:    "$getservervar[msglog]",
    code:`
    $image[1;$messageAttachment]
    $title[1;Message modifié]
    $description[<@$authorID>(\`$authorID\`) a modifié son message dans <#$channelUsed>
    
    **Ancien contenue** : $oldMessage
    
    **Nouveau contenue** : $message]
    $color[1;$getServerVar[color]]
    $footer[1;$getvar[footerall]]
    $onlyIf[$oldMessage!=;]
    $onlyIf[$serverChannelExists[$getservervar[msglog]]==true;]
    `
    
    }]