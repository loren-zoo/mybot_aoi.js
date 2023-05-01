module.exports = [{
    name:"automod",
    $if:"v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    $if[$message[1]==antilink]
    $if[$message[2]==mute]
    Les utilisateurs envoyant des liens dans les salons se feront dès maintenant **mute**. 
    $setservervar[link;mute]
    $endif
    $if[$mesage[2]==warn]
    Les utilisateurs envoyant des liens dans les salons se feront dès maintenant **warn**.
    $setservervar[link;warn]
    $endif
    $onlyif[$checkContains[$message[2];warn;mute]==true;Argument invalide, \`$getservervar[prefix]automod antilink warn/mute\`]
    $endif

    $if[$message[1]==warnlimit]
    La limite des warns à été configuré à **$message[2]**, quand un utilisateur dépassera cette limite il se fera **$message[3]**
    $setservervar[limitwarn;$message[3]]
    $setservervar[warnlimit;$message[2]]
    $onlyif[$checkContains[$message[3];kick;mute]==true;Argumant invalide, \`$getservervar[prefix]automod warnlimit <nombre> kick/mute\` ]
    $onlyIf[$isNumber[$message[2]]==true; Nombre invalide.]
    $endif
    

    $if[$message[1]==antispam]
    $if[$message[2]==mute]
    Les utilisateurs qui spammerons dans les salons se feront dès maintenant **mute**. 
    $setservervar[spam;mute]
    $endif
    $if[$mesage[2]==kick]
    Les utilisateurs qui spammerons dans les salons se feront dès maintenant **warn**.
    $setservervar[spam;kick]
    $endif
    $if[$mesage[2]==ban]
    Les utilisateurs qui spammerons dans les salons se feront dès maintenant **ban**.
    $setservervar[spam;ban]
    $endif
    $onlyif[$checkContains[$message[2];kick;ban;mute]==true;Argument invalide, \`$getservervar[prefix]automod antilink warn/mute\`]
    $endif





$onlyif[$checkContains[$message[1];antilink;warnlimit;antispam]==true;Argumant invalide, \`$getservervar[prefix]automod warnlist/antilink/antispam \`]



    $endif
    `
},{
    name:"automod del",
    $if:"v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$authorID==$ownerid]
    $if[$message[1]==warnlist]
    $channelSendMessage[$channelid;L'automod "Warn limit" est désactivé]
    $setservervar[warnlimit;off]
    $setservervar[limitwarn;]
    $endif
    $if[$message[1]==antispam]
    $channelSendMessage[$channelid;L'automod "antilink" est désactivé, l'antilink est touours actif.]
    $setServerVar[spam;]
    $endif
    $if[$message[1]==antilink]
    $channelSendMessage[$channelid;L'automod "antilink" est désactivé, l'antilink est touours actif.]
    $setServerVar[link;]
    $endif
    $onlyif[$checkContains[$message[1];antilink;warnlimit;antispam]==true;Argumant invalide, \`$getservervar[prefix]automod del warnlist/antilink\`]
    $else
$channelSendMessage[$channelID;Tu dois être \`\`owner du robot\`\` pour éffectuer cette commande.]
    $endif
    `
}]