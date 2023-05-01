module.exports = [{
    name:"money",
    aliases:"bal",
    $if:"v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    $channelSendMessage[$channelID;Balance de \`$usertag[$get[user]]\`]
    $title[1;Money;https://github.com/axe-fr/]
    $addField[1;Banque;$getUserVar[bank;$get[user]]$;yes]
    $addField[1;Money;$getuservar[money;$get[user]]$;yes]
    $color[1;$getservervar[color]]
    $footer[1;$getservervar[prefix]work]
    $let[user;$findUser[$message[1];no]]
    $endif
    `
}]