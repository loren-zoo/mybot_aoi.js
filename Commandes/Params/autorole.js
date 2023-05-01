module.exports = [
    {
        name: "defaultroles add",
        $if: "v4",
        code:`
        $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
        $channelsendmessage[$channelID;\`$roleName[$get[role]]\` ajouté au rôle par défaut.]
        $setServerVar[autorole;$getServerVar[autorole],<@&$get[role]>]
        $setServerVar[addrole;$getServerVar[addrole],$get[role]]
        $onlyIf[$checkContains[$getServerVar[autorole];<@&$get[role]>]!=true;Le rôle \`$roleName[$get[role]]\` est déjà __par défaut__]
        $let[role;$findRole[$message[1]]]
        $onlyIf[$roleExists[$findRole[$message[1]]]==true;Rôle invalide {delete:5s}]
        $onlyIf[$message[1]!=;Argument invalide {delete:5s}]
        $endif


       
        `
    },{
        name: "defaultroles del",
        $if: "v4",
        code:`
        $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
        $channelsendmessage[$channelID;\`$roleName[$get[role]]\` retiré au rôle par défaut.]
        $setServerVar[autorole;$replaceText[$getServerVar[autorole];,<@&$get[role];]>]
        $setServerVar[addrole;$replaceText[$getServerVar[addrole];,$get[role];]]
        $onlyIf[$checkContains[$getServerVar[autorole];<@&$get[role]>]==true;Le rôle \`$roleName[$get[role]]\` n'est pas __par défaut__]
        $let[role;$findRole[$message[1]]]
        $onlyIf[$roleExists[$findRole[$message[1]]]==true;Rôle invalide {delete:5s}]
        $onlyIf[$message[1]!=;Argument invalide {delete:5s}]
        
        $endif


        `
    },{
        name: "defaultroles list",
        $if: "v4",
        code:`
        $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
$color[1;$getservervar[color]]
$title[1;Liste des rôles par défaut]
$description[1;$replaceText[$replaceText[$getServerVar[autorole];,;
];;]
$onlyif[$getservervar[addrole]!=;Aucun rôle configuré ]
$endif




        
        `
    },{

        type: "join",
        code:`
    $giveRoles[$guildID;$authorID$joinSplitText[;]]
    $textSplit[$getServerVar[addrole];,]
    $onlyif[$getservervar[addrole]!=;]
        
        `
    },{
        name: "defaultroles clear",
        $if: "v4",
        code:`
        $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
        Tous les rôles par défauts ont été reset !
        $resetServerVar[autorole]
        $resetServerVar[addrole]
       
        $endif


        `
    }
]