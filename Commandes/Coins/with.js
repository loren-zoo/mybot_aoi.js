module.exports = [{
    name:"with all",
    $if:"v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    $setUserVar[bank;0]
    $channelSendMessage[$channelID;Tu as retiré tout ton argent dans la banque (\`$getUservar[bank]$\`)]
    $setUserVar[money;$sum[$getUservar[money];$getUserVar[bank]]]
    $onlyIf[$getUserVar[bank]>0;Tu n'as plu d'argent sur ton compte banquaire.]
    $endif

    `
},{
    name:"with",
    $if:"v4",
    code:`
    
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    La somme $get[number]$ à été retiré de la banque.
    $setUserVar[bank;$sub[$getUservar[bank];$get[number]]]
    $setUserVar[money;$sum[$getUserVar[money];$get[number]]]
    $onlyIf[$getUserVar[bank]>$get[number];Tu n'as pas suffisament d'argent]
    $onlyIf[$isNumber[$get[number]]==true;Nombre invalide]
    $let[number;$replaceText[$message[1];$;]]
    $endif
    `
}]