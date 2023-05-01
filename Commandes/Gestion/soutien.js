module.exports = [{
    name: "soutien list",
    $if: "v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    $color[1;$getservervar[color]]
    $title[1;Liste des status]
    $addField[1;État;$replaceText[$replaceText[$getservervar[soutien];true;Activé];false;Désactivé]]
    $addField[1;Rôle;$replaceText[<@&$getservervar[soutienrole]>;<@&>;Aucun rôle confguré]]
    $description[1;$replaceText[$replaceText[$getServerVar[soutienmot];,;
    ]; ;Aucun status enregistré]
    $endif

    `
    },{
    name:"soutien mode",
    $if:"v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    $if[$message[1]==on]
    Le système de soutien est désormais __activé__
    $setservervar[soutien;true]
    $onlyif[$getservervar[soutien]==false;Le système de soutien est déjà __activé__]
    $endif
    $if[$message[1]==off]
    Le système de soutien est désormais __désactivé__
    $setservervar[soutien;false]
    $onlyif[$getservervar[soutien]!=false;Le système de soutien est deja activé.]
    $endif
    $endif



    `
    },{
    name:"soutien add",
    aliases:"soutien",
    $if:"v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    $setServerVar[$getservervar[soutienmot],$message]
    \`$message\` ajouté dans la liste des status\n**$getservervar[prefix]soutien list** pour voir tous les status configurés.
    $onlyIf[$checkContains[$getServerVar[soutienmot];$message]!=true;\`$message\` est deja dans la liste..]
    $onlyif[$message!=;Statut invalide {delete:5s}]
    $endif

    
    `
    },{
    name:"soutien vanity",
    aliases:"soutien auto",
    $if:"v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    $channelSendMessage[$channelID;Le status à été configuré sur l'url personnalisé du serveur (\`$vanityURL\`)]
    $setservervar[soutienmot;$vanityurl]
    $onlyIf[$vanityUrl!=undefined;Le serveur n'a aucun URL personnalisé]
    $endif

    `
    },{
    name:"soutien rem",
    aliases:"soutien del",
    $if:"v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    $setServerVar[soutienmot;$replaceText[$getServerVar[soutienmot];,$message;]]
    $onlyIf[$checkContains[$getServerVar[soutienmot];$message]!=true;\`$message\` n'est pas dans la liste..]
    $onlyif[$message!=;Statut invalide {delete:5s}]
    
    $endif

    `
    },{
    name:"soutien role add",
    $if:"v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    $channelsendmessage[$channelID;\`$roleName[$get[role]]\` est dès maintenant le rôle qui sera attribué aux membres un des status configuré.]
    $setservervar[soutienrole;$get[role]]
    $let[role;$findRole[$message[1]]]
    $onlyIf[$roleExists[$findRole[$message[1]]]==true;Rôle invalide {delete:5s}]
    $onlyIf[$message[1]!=;Rôle invalide {delete:5s}]
    $endif


    
    `
    },{
    name:"soutien role del",
    $if:"v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    $channelsendmessage[$channelID;Rôle supprimé]
    $setservervar[soutienrole;]
    $endif

    `
    },{
    type:"presenceUpdate",
    $if:"v4",
    code:`
    $giverole[$guildID;$authorID;$getservervar[soutienrole]]
    $onlyif[$checkContains[$getCustomStatus;$joinsplittext[;]]==true;]
    $textSplit[$getServerVar[soutienmot];,]
    $onlyIf[$roleExists[$getservervar[soutienrole]]==true;]
    $onlyif[$getservervar[soutienmot]!=;]
    $onlyif[$getservervar[soutien]==true;]
            `
    },{
    type:"presenceUpdate",
    $if:"v4",
    code:`
    $takerole[$guildID;$authorID;$getservervar[soutienrole]]
    $onlyif[$checkContains[$getCustomStatus;$joinsplittext[;]]==false;]
    $textSplit[$getServerVar[soutienmot];,]
    $onlyIf[$roleExists[$getservervar[soutienrole]]==true;]
    $onlyif[$getservervar[soutienmot]!=;]
    $onlyif[$getservervar[soutien]==true;]`
    },{
    name:"soutien clear",
    aliases:"soutien reset",
    $if:"v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    $channelSendMessage[$channelID;Toutes les configurations faites sur le système de soutien ont été supprimé.]
    $setServerVar[soutien;false]
    $setServerVar[soutienmot;]
    $setservervar[soutienrole;]
    $endif

    
    
    
    `
        }]   