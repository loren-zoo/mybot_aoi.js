module.exports = [{
    name:"daily",
    $if:"v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    $reply
    $editIn[50ms;Tu as gagné \`$get[daily]$\` aujourd'hui !] 
    Je tourne la roue..
    $setUserVar[money;$sum[$getUservar[money];$get[daily]]]
    $let[daily;$randomText[120;25;150;200;75;30;25;60;300;250;175;125;80;10;20]]

    $cooldown[20h;Veuillez attendre %time% avant de regagner de l'argent]
    $endif
    `
}]