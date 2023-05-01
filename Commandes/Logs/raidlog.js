module.exports = [{
    name: "raidlog",
    $if:"v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    Le salon des log d'antiraid sera désormais <#$get[channel]>
    $setservervar[raidlog;$get[channel]]
    $onlyIf[$serverChannelExists[$get[channel]]==true;Salon invalide {delete:5s}]
    $let[channel;$findchannel[$message[1];yes]]
    $onlyIf[$message[1]!=;Argumant manquant : \`$getserverVar[prefix]$commandName <#salon>\`]

    $endif

    `
    },{
    name:"raidlog off",
    $if:"v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    Le salon des logs d'antiraid est désormais __désactivé__
    $setservervar[raidlog;]
    $endif

        `
    },{
    name:"raidlog statut",
    $if:"v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    Le salon des logs est <#$getServerVar[raidlog]>.
    $onlyIf[$serverChannelExists[$getServerVar[raidlog]]==true;Le salon n'est pas configuré]
    $endif

    `
    }]
    