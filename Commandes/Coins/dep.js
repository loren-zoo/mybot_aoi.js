module.exports = [{
    name:"dep all",
    $if:"v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    $setUserVar[money;0]
    $channelSendMessage[$channelID;Tu as dépossé tout ton argent dans la banque (\`$getUservar[money]$\`)]
    $setUserVar[bank;$sum[$getUservar[bank];$getUserVar[money]]]
    $endif
    `
},{
    name:"dep",
    $if:"v4",
    code:`
    La somme $get[number]$ à été placé en banque.
    $setUserVar[money;$sub[$getUservar[money];$get[number]]]
    $setUserVar[bank;$sum[$getUserVar[bank];$get[number]]]
    $onlyIf[$getUserVar[money]>$get[number];Tu n'as pas suffisament d'argent]
    $onlyIf[$isNumber[$get[number]]==true;Nombre invalide]
    $let[number;$replaceText[$message[1];$;]]

    `
}]