module.exports =  [{
    name: "owner add",
    aliases:"owner",
    code:`
    $channelsendmessage[$channelID;**$usertag[$get[owner]]** est maintenant owner]
    $setvar[owner;$getvar[owner],<@$findUser[$message[1]]>]
    $onlyIf[$checkContains[$getvar[owner];<@$get[owner]>]!=true;**$usertag[$get[owner]]** est déjà owner]
    $onlyIf[$userExists[$get[owner]]==true;Utilisateur introuvable {delete:5s}]
    $let[owner;$findUser[$message[1];no]]
    $onlyif[$message[1]!=;Argument invalide{delete:5s}]
    $onlyforids[$getvar[buyerID];Commande réservé au buyer du bot.]
    
    `},{
    name: "owner del",
    aliases:"unowner",
    code:`
    $channelsendmessage[$channelID;**$usertag[$get[owner]]** n'est plus owner]
    $setvar[owner;$replaceText[$getvar[owner];,<@$findUser[$message[1]]>;]]
    $onlyIf[$checkContains[$getvar[owner];<@$get[owner]>]!=false;**$usertag[$get[owner]]** n'est pas owner]
    $onlyIf[$userExists[$get[owner]]==true;Utilisateur introuvable {delete:5s}]
    $let[owner;$findUser[$message[1];no]]
    $onlyif[$message[1]!=;Argument invalide{delete:5s}]
    $onlyforids[$getvar[buyerID];Commande réservé au buyer du bot.]
    `
    },{
    name: "owner list",
    code:`
    $title[1;Owner]
    $color[1;$getservervar[color]]
    $description[1;$replaceText[$getvar[owner];,;
    ]
    $onlyif[$getvar[owner]!=;Aucun owner bot enregistré\n**\`$getservervar[prefix]owner add <@user/id>\`**]
    $onlyforids[$getvar[buyerID];Commande réservé au buyer du bot.]
    `
    },{
    name:"owner clear",
    code:`
    $channelSendMessage[$channelID;Je viens de supprimer tous les owners bots.]
    $setvar[owner;]
    $onlyif[$getvar[owner]!=;Aucun utilisateur n'est owner.]
    $onlyforids[$getvar[buyerID];Commande réservé au buyer du bot.]
    `
    }]