module.exports = [{
    name:"warn",
    $if:"v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    $sendDM[Vous avez été avertis sur **$servername** $replaceText[pour \`$messageSlice[1]\`;pour \`\`;];$get[membre];no]
    $channelsendmessage[$channelID;L'utilisateur **$usertag[$get[membre]]** a été **warn** $replaceText[pour \`$messageSlice[1]\`;pour \`\`;]]
   
   
    $if[$getservervar[warnlimit]!=off]

    $if[$getuservar[warn;$get[membre]]>=$getservervar[warnlimit]]

    $if[$getservervar[limitwarn]==mute]
    $channelSendMessage[$channelID;<@$get[membre]> à été mute car il  a dépassé la limite de warn. {delete:5s}]
    $timeoutMember[$get[membre];$authorID;10m;no;Automod;]
    $endif

    $if[$getservervar[limitwarn]==kick]
    $channelSendMessage[$channelID;<@$get[membre]> à été kick car il a dépassé la limite de warn. {delete:5s}]
    $kick[$get[membre];$guildID;Automod]
    $endif

    $setUserVar[warn;0;$get[membre]]
    $endif

    $endif
    

    $setuservar[warn;$sum[$getuservar[warn;$get[membre]];1];$get[membre]]


    $let[membre;$findUser[$message[1];no]]


    $onlyif[$findUser[$message[1];no]!=$getVar[buyerID];Vous n'avez pas la permission de **warn** le buyer bot]
    $onlyif[$findUser[$message[1];no]!=$authorID;Tu ne peux pas te mentionner]
    $onlyif[$checkContains[$getvar[owner];<@$findUser[$message[1];no]>]!=true;Vous n'avez pas la permission de **warn** le owner bot]
    $onlyIf[$memberExists[$finduser[$message[1];no]]==true;Membre introuvable {delete:5s}]
    $onlyIf[$message[1]!=;La mention ou l'id du membre est invalide {delete:5s}]
    $endif
    
    `
},{
    name:"warn list",
    $if:"v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    L'utilisateur **$usertag[$get[membre]]** a \`$getuservar[warn;$get[membre]]\` warn(s) sur le serveur. (warnlimit: $replaceText[$getServerVar[warnlimit];off;Aucune configuration])
    $onlyif[$getuservar[warn;$get[membre]]!=0;**$usertag[$get[membre]]** n'a aucun warn]
    $onlyIf[$memberExists[$finduser[$message[1];no]]==true;Membre introuvable {delete:5s}]
    $let[membre;$findUser[$message[1];yes]]
    $endif

    `
},{
    name:"warn del",
    $if:"v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    $if[$message[2]==all]
    $channelSendMessage[$channelID;L'utilisateur **$usertag** n'a plus de warn !]
    $setUserVar[warn;0;$get[user]]
    $onlyIf[$getuserwarn[$get[user]]!=;L'utilisateur **$usertag[$get[user]]** n'a pas de warn à l'heure actuelle.]
    $onlyIf[$memberExists[$get[user]]==true;Membre introuvable {delete:5s}]
    $let[user;$findUser[$message[1];no]]
    $else
    $channelSendMessage[$channelID;Tu as enlevé **$get[number] warn(s)** a l'utilisateur **$usertag[$get[user]]**.]
    $setUserVar[warn;$sub[$getuservar[warn;$get[user]];$get[number]];$get[user]]
    $onlyIf[$getuserwarn[$get[user]]!=;L'utilisateur **$usertag[$get[user]]** n'a pas de warn à l'heure actuelle.]
    $onlyIf[$isNumber[$get[number]]==true; Le nombre "$get[number]" est invalide]
    $onlyIf[$memberExists[$get[user]]==true;Membre introuvable {delete:5s}]
    $let[user;$findUser[$message[1];no]]
    $let[number;$message[2]]
    $endif

    $endif


    `
},{
    name:"warn clear",
    $if:"v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    $channelSendMessage[$channelID;Toutes les sanctions du serveur on été réinitialisé ]
    $resetUserVar[warn;$guildID]
    $endif
    `
}]