module.exports = [{
    name:"raidmode",
    aliases:["antijoin","moderaid"],
    $if:"v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    $if[$message[1]==on]
    L'antijoin est maintenant __activé__
    $setServerVar[antijoin;on]
    $endif
    $if[$message[1]==off]
    L'antijoin est maintenant __désactivé__
    $setServerVar[antijoin;off]
    $endif
    $onlyif[$checkContains[$message[1];on;off]==true;L'option est invalide {delete:5s}]
    $endif



    `
},{
    type:"join",
    code:`
    $senddm[Vous avez été expulser du serveur **$servername** car l'antijoin est actif.;$authorID;no]
    $kick[$authorID;$guildID;Antijoin]
    $onlyif[$getservervar[antijoin]!=false;]
    `
}]