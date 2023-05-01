module.exports = ({
name: "kick",
$if: "v4",
code:`
$if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
$channelsendmessage[$channelID;**$usertag[$get[membre]]**  été __kick__]
$kick[$get[membre];$guildID;par $username | Raison : $get[raison]]
$let[raison;$replaceText[*$messageSlice[1]*;**;Inconnu]]
$onlyIf[$rolePosition[$highestRole[$clientID];$guildID]<$rolePosition[$highestRole[$findMember[$message[1]];$guildID];$guildID];Je n'ai pas les permissions nécessaires pour kick **$usertag[$get[membre]]**]
$onlyif[$findUser[$message[1];no]!=$ownerID;Je ne peux kick un **proprio**]
$onlyif[$findUser[$message[1];no]!=$getVar[buyerID];Je ne peux kick un **buyer bot**]
$onlyif[$checkContains[$getVar[owner];<@$get[membre]>]!=true;Je ne peux kick un **owner bot**]
$onlyif[$findUser[$message[1];no]!=$authorID;Tu ne peux pas te mentionner]
$onlyIf[$memberExists[$finduser[$message[1];no]]==true;Membre introuvable {delete:5s}]$let[membre;$findUser[$message[1];no]]
$onlyif[$message[1]!=;Argument invalide{delete:5s}]
$endif
    

    `
    
    })