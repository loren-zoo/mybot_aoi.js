module.exports = [{
    name: "antinewaccount",
    $if: "v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    $if[$message==on]
    L'antinewaccount est maintenant __activé__
    $setServerVar[date;7]
    $setServerVar[antinew;true]
    $onlyIf[$getServerVar[antinew]==false;L'antinewaccount est déjà __activé__]
    $endif
    $if[$message==off]
    L'antinewaccount est maintenant __désactivé__
    $setServerVar[antinew;false]
    $onlyIf[$getServerVar[antinew]==true;L'antinewaccount est déjà __désactivé__]
    $endif
    $onlyif[$checkContains[$message[1];on;off]==true;L'option est invalide {delete:5s}]

    $endif

    `
    },{
    type: "join",
    code:`
    $senddm[Votre compte est trop __récent__ pour rejoindre **$servername**;$authorID;no]
    $kick[$authorID;$guildID;Compte récent]
    $onlyif[$checkContains[$splitText[3];$year]==true;]
    $onlyif[$splitText[1]>=$getservervar[date];]
    $textSplit[$creationDate[$authorID;date];/]
    $onlyif[$isbot[$authorID]==false;]
    $onlyIf[$getServerVar[antinew]==true;]
        `}]