module.exports = [{
    name:"rob",
    $if:"v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    $channelSendMessage[$channelID;Gg ! Tu as réussie à braquer $usertag[$get[user]], tu lui as volé \`$get[rob]$\`]
    $setUserVar[money;$get[rob]]
    $setUserVar[money;$sub[$getUserVar[money;$get[user]];$get[rob]];$get[user]]
    $onlyIf[$getUserVar[money;$get[user]]>5;L'utilisateur n'a pas assez d'argent à voler]
    $onlyIf[$get[rob]!=No;Tu n'as pas réussie à voler \`$usertag[$get[user]]\`]
    $onlyIf[$authorID!=$get[user];Tu ne peux pas t'auto voler]



    $let[rob;$randomText[10;25;No;40;75;No;55;50;No;45;30;30;25]]
    $let[user;$findUser[$message[1];no]]
    $cooldown[15h;Veuillez attendre %time% avant de reesayer de voler quelqu'un]
    $endi
    `
}]