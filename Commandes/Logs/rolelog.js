module.exports = [{
    name:   "rolelog",
    $if: "v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]  
    Le salon <#$get[channel]> sera maintenant utilisé pour envoyer les logs de __roles__.
    $setServerVar[rolelog;$get[channel]]
    $onlyIf[$serverChannelExists[$get[channel]]==true;Salon invalide {delete:5s}]
    $let[channel;$findchannel[$message[1];yes]]
    $onlyIf[$message[1]!=;Argumant manquant : \`$getserverVar[prefix]$commandName <#salon>\`]
    $endif

    
            `
    },{
    name:"rolelog off",
    $if: "v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    Le salon des logs des rôles est désormais __désactivé__
    $setServerVar[rolelog;]
    $endif

    `
    },{
    name:"rolelog statut",
    $if:"v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    Le salon des logs est <#$getServerVar[rolelog]>.
    $onlyIf[$serverChannelExists[$getServerVar[rolelog]]==true;Le salon n'est pas configuré]
    $endif

    `
    },{
type: "roleCreate",
channel:"$getservervar[rolelog]",
$if: "v4",
code:`
$title[1;Rôle crée]
$description[<@$get[user]>(\`$get[user]\`) a crée le rôle <@&$newRole[id]>(\`$newRole[id]\`)]
$color[1;$getservervar[color]]
$footer[1;$getvar[footerall]]
$let[user;$finduser[$getAuditLogs[1;;ROLE_CREATE;$guildID;{executor.id}]]]
$onlyIf[$serverChannelExists[$getservervar[rolelog]]==true;]

`
},{
type: "roleDelete",
channel:"$getservervar[rolelog]",
code:`
$title[1;Salon supprimé]
$description[<@$get[user]>(\`$get[user]\`) a supprimé le rôle \`$oldRole[name]\`(\`$oldRole[id]\`)]
$color[1;$getservervar[color]]
$footer[1;$getvar[footerall]]
$addTimestamp[1]
$let[user;$finduser[$getAuditLogs[1;;ROLE_DELETE;$guildID;{executor.id}]]]
$onlyIf[$serverChannelExists[$getservervar[rolelog]]==true;]
`
},{
type: "roleUpdate",
channel:"$getservervar[rolelog]",
code:`
$title[1;Rôle modifié]
$description[1;
<@$get[user]> (\`$get[user]\`) a modifié le rôle <@&$oldRole[id]> (\`$oldRole[id]\`)
    
**Ancienne couleur du rôle:** $oldRole[hexColor]

**Nouvelle couleur du rôle:** $newRole[hexColor]]
$color[1;$getservervar[color]]
$footer[1;$getvar[footerall]]
$addTimestamp[1]
$let[user;$finduser[$getAuditLogs[1;;ROLE_UPDATE;$guildID;{executor.id}]]]
$onlyIf[$oldRole[color]!=$newRole[color];]
$onlyIf[$newRole[color]!=;]
$onlyIf[$serverChannelExists[$getservervar[rolelog]]==true;]
    `
},{
type: "roleUpdate",
channel:"$getservervar[rolelog]",
code:`
$title[1;Rôle modifié]
$description[1;
<@$get[user]> (\`$get[user]\`) a modifié le rôle <@&$oldRole[id]> (\`$oldRole[id]\`)

**Ancien nom du rôle:** $oldRole[name]

**Nouveau nom du rôle:** $newRole[name]]
$color[1;$getservervar[color]]
$footer[1;$getvar[footerall]]
$addTimestamp[1]
$let[user;$finduser[$getAuditLogs[1;;ROLE_UPDATE;$guildID;{executor.id}]]]
$onlyIf[$oldRole[name]!=$newRole[name];]
$onlyIf[$serverChannelExists[$getservervar[rolelog]]==true;]
    `},{
type: "roleUpdate",
channel:"$getservervar[rolelog]",
code:`
$description[1;<@$get[user]> (\`$get[user]\`) a modifié le rôle <@&$oldRole[id]> (\`$oldRole[id]\`)]
$color[1;$getservervar[color]]
$footer[1;$getvar[footerall]]
$addTimestamp[1]
$let[user;$finduser[$getAuditLogs[1;;ROLE_UPDATE;$guildID;{executor.id}]]]
$onlyIf[$oldRole[name]==$newCRole[name];]
$onlyIf[$oldRole[color]==$newRole[color];]
$onlyIf[$serverChannelExists[$getservervar[rolelog]]==true;]
`},{
name: "memberUpdate",
$if: "v4",
channel:"$getservervar[rolelog]",
code:`
$description[1;<@$get[user]> (\`$get[user]\`) a modifié le rôle de <@$authorID> (\`$authorID\`)]
$color[1;$getservervar[color]]
$footer[1;$getvar[footerall]]
$addTimestamp[1]
$let[user;$finduser[$getAuditLogs[1;;MEMBER_ROLE_UPDATE;$guildID;{executor.id}]]]
$onlyIf[$oldMember[roles]!=$newMember[roles];] 
$onlyIf[$oldMember[roles]!=$newMember[roles];] 
$onlyIf[$serverChannelExists[$getservervar[rolelog]]==true;]
`}]