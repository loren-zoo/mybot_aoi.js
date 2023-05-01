module.exports = ({
name: "ban",
$if: "v4",
code:`


$if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
$channelsendmessage[$channelID;**$usertag[$get[ban]]**  été __ban__]
$ban[$guildID;$get[ban];0;par $username | Raison : $get[raison]]
$let[raison;$replaceText[*$messageSlice[1]*;**;Inconnu]]
$if[$memberExists[$findUser[$message[1];no]]==true]
$onlyIf[$rolePosition[$highestRole[$clientID];$guildID]<$rolePosition[$highestRole[$findMember[$message[1]];$guildID];$guildID];Je n'ai pas les permissions nécessaires pour ban **$usertag[$get[ban]]**]
$endif
$onlyif[$checkContains[$getservervar[wl];<@$get[ban]>]==false;Tu ne peux pas ban un membre whitelist.]
$onlyif[$checkContains[$getvar[owner];<@$get[ban]>]==false;Tu ne peux pas ban un owner.]
$onlyif[$isBanned[$guildID;$get[ban]]!=true;**$usertag[$get[ban]]** est déjà bannit.]
$onlyif[$findUser[$message[1];no]!=$ownerID;Je ne peux ban un ]
$onlyif[$findUser[$message[1];no]!=$getVar[buyerID];Je ne peux ban un **buyer bot**]
$onlyif[$findUser[$message[1];no]!=$authorID;Tu ne peux pas te mentionner]
$onlyif[$checkContains[$getVar[owner];<@$get[ban]>]!=true;Je ne peux ban un **owner bot**]
$onlyIf[$userExists[$finduser[$message[1];no]]==true;Utilisateur introuvable {delete:5s}]
$onlyBotPerms[ban;Je n'ai pas les permissions nécessaires pour ban **$usertag[$get[ban]]**]
$let[ban;$findUser[$message[1];no]]
$onlyif[$message[1]!=;Argument invalide{delete:5s}]
$endif
`

})