module.exports = [{
    name: "badword add",
    aliases:"badword",
    $if: "v4",
    code:`
    
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    \`$message\` ajouté à la liste des mots interdits
    $setServerVar[badword;$getServerVar[badword],$message]
    $onlyIf[$checkContains[$getServerVar[badword];$message]!=true;\`$message\` était déjà dans la liste des mots interdits]
    $onlyif[$message!=;Mot invalide {delete:5s}]
    $endif

    `
    
    },{
    name: "badword remove",
    $if: "v4",
    code:`
    
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    \`$message\` retiré à la liste des mots interdits
    $setServerVar[badword;$replaceText[$getServerVar[badword];,$message;]]
    $onlyIf[$checkContains[$getServerVar[badword];$message]==true;\`$message\` n'était pas dans la liste des mots interdits]
    $onlyif[$message!=;Mot invalide {delete:5s}]
    $endif

  
    `
    },{
    name: "badword list",
    $if: "v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    $color[1;$getservervar[color]]
    $title[1;Liste des mots interdits]
    $description[1;$replaceText[$replaceText[$getServerVar[badword];,;
    ];Aucun; ]
    $onlyif[$getservervar[badword]!=;Aucun badword enregistré]
    $endif

    `
    },{
    name: "$alwaysExecute",
    code:`
    $channelsendmessage[$channelID;<@$authorID>, vous utilisez des mots interdits {delete:5s}]
    $deletecommand
    $onlyIf[$checkContains[$tolowerCase[$message];$joinSplitText[;]]==true;]
    $textSplit[$getServerVar[badword];,]

    $onlyIf[$checkContains[$getserverVar[wl];<@$authorID>]==false;]
    $onlyIf[$authorID!=$ownerid;]
    $onlyIf[$checkContains[$getvar[owner];<@$authorID>]==false;]
    $onlyIf[$authorID!=$getvar[buyerID];]
    $onlyif[$getservervar[antibadword]!=false;]
    
    `},{
    name: "antibadword",
    $if: "v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    $if[$message[1]==on]
    L'antibadword est désormais __activé__
    $setservervar[antibadword;true]
    $onlyif[$getservervar[antibadword]==false;L'antibadwords est déjà __activé__]
    $endif
    $if[$message[1]==off]
    L'antibadword est désormais __désactivé__
    $setservervar[antibadword;false]
    $onlyif[$getservervar[antibadword]!=false;L'antibadwords est déjà __désactivé__]
    $endif
    $endif


    `
    },{
    name: "badword clear",
    $if: "v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    Tout les mot interdit a été __supprimé__
    $resetServerVar[badword]
    $endif

    `
    }]