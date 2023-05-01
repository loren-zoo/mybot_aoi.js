module.exports = [{
    name:   "autorename",
    $if:    "v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    L'autorename est désormais activé avec comme pseudo \`$message\`
    $setservervar[nameauto;$message]
    $setservervar[autorename;true]
    $onlyIf[$getServerVar[autorename]==false;L'autorename est déjà activé sur le serveur]
    $onlyIf[$message!=;Pseudo invalide.]
    $endif

`   
    
    },{
    name:"autorename off",
    $if:"v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    $channelSendMessage[$channelID;L'autorename à été __désactivé__.]
    $setservervar[nameauto;]
    $setservervar[autorename;false]
    $endif

    
    `
    },{
    name:"autorename var",
    aliases:"autorename variable",
    $if:"v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    $reply
    $addField[1;{id};Identifiant de l'utilisateur. Exemple: **$authorID**]
    $addField[1;{user.tag};Pseudonyme et discriminator (#) de l'utilisateur. Exemple: **$usertag[$authorID]**]
    $addField[1;{user.name};Pseudonyme de l'utilisateur. Exemple: **$username[$authorID]**]
    $color[1;$getservervar[color]]
    $description[1;Voici les différentes variables crée pour configurer l'autorename.]
    $footer[1;$getvar[footerall]]
    $endif
    `
    },
    {
    type:   "join",
    code:`
    $changeNickname[$authorID;$replaceText[$replaceText[$replaceText[$getservervar[nameauto];{user.name};$username];{user.tag};$usertag];{id};$authorID];Autorename]
    $onlyIf[$getservervar[autorename]==true;]
    
    `}]