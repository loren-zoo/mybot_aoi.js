module.exports = [{
    name: "joinleavelog",
    $if:"v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    Le salon des logs des joins et leaves sera désormais <#$get[channel]>
    $setservervar[joinleavelog;$get[channel]]
    $onlyIf[$serverChannelExists[$get[channel]]==true;Salon invalide {delete:5s}]
    $let[channel;$findchannel[$message[1];yes]]
    $onlyIf[$message[1]!=;Argumant manquant : \`$getserverVar[prefix]$commandName <#salon>\`]
    $endif

    `
    },{
    name:"joinleavelog off",
    $if:"v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    Le salon des logs de join/leave est désormais __désactivé__
    $setservervar[joinleavelog;]
    $endif

        `
    },{
    name:"joinleavelog statut",
    $if:"v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    Le salon des logs est <#$getServerVar[joinleavelog]>.
    $onlyIf[$serverChannelExists[$getServerVar[joinleavelog]]==true;Le salon n'est pas configuré]
    $endif

    `
    },{
    type: "join",
    channel: "$getservervar[joinleavelog]",
    code:`
    $title[1;Bienvenue sur $servername]
    $description[1;<@$authorID> vient de nous rejoindre. Son compte a été crée le <t:$truncate[$math[$creationDate[$authorID;ms]/1000]]:F> 
    Il est le **$membersCount** membre(s)]
    $color[1;GREEN]
    $thumbnail[1;$authorAvatar]
    $footer[1;$getVar[footerall]]
    $addTimestamp[1]
    $onlyIf[$serverChannelExists[$getservervar[joinleavelog]]==true;]
    `},{
    type: "leave",
    channel: "$getservervar[joinleavelog]",
    $if: "v4",
    code:`
    $title[1;$usertag vient de nous quitter]
    $description[1;<@$authorID> vient de nous quitter. 
    Nous sommes maitenant : **$membersCount** membre(s)]
    $color[1;RED]
    $thumbnail[1;$authorAvatar]
    $footer[1;$getVar[footerall]]
    $addTimestamp[1]
    $onlyIf[$serverChannelExists[$getservervar[joinleavelog]]==true;]
    
    `
    }]