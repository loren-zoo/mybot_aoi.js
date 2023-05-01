module.exports = ({
name: "unlock",
$if: "v4",
code:`
$if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
$if[$findUser[$message[1];no]!=]
$modifyChannelPerms[$findUser[$message[1]];$findChannel[$get[channel]];+sendmessage]
Le membre <@$findUser[$message[1]]> peut de nouveau parler dans <#$get[channel]>
$onlyIf[$memberExists[$finduser[$message[1];no]]==true;Membre introuvable {delete:5s}]
$endif

$if[$findRole[$message[1]]!=]
$modifyChannelPerms[$findRole[$message[1]];$findChannel[$get[channel]];-sendmessage]
Le salon <#$get[channel]> a été unlock pour le rôle **$roleName[$findRole[$message[1]]]**
$onlyIf[$roleExists[$findRole[$message[1]]]==true;Rôle introuvable {delete:5s}]
$endif

$if[$findchannel[$message[1];no]!=]
$modifyChannelPerms[$guildID;$findChannel[$message[1];no];/sendmessage]
Les membres peuvent de nouveau parler dans <#$findChannel[$message[1];no]> 
$onlyIf[$serverChannelExists[$findChannel[$message[1];no]]==true;Salon introuvable {delete:5s}]
$endif

$if[$message[1]==]
$modifyChannelPerms[$guildID;$channelID;/sendmessage]
Les membres peuvent de nouveau parler dans <#$channelID> 
$endif

$let[channel;$message[2]]
$onlyBotPerms[managechannel;Je n'ai pas les permissions nécessaires pour gérer ce salon]
$endif
 


    `
    
    })