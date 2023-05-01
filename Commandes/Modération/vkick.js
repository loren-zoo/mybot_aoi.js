module.exports = ({
name: "vkick",
$if: "v4",
code:`
$if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
$channelsendmessage[$channelID;**$usertag[$get[membre]]**  été __vkick__ de la vocal <#$voiceID[$get[membre]]>]
$moveUser[$guildID;$get[membre];;par $username | Raison : $get[raison]]
$let[raison;$replaceText[*$messageSlice[1]*;**;Inconnu]]
$onlyif[$findUser[$message[1];no]!=$ownerID;Je ne peux vkick un **proprio**]
$onlyif[$findUser[$message[1];no]!=$getVar[buyerID];Je ne peux vkick un **buyer bot**]
$onlyif[$findUser[$message[1];no]!=$authorID;Tu ne peux pas te mentionner]
$onlyif[$checkContains[$getVar[owner];<@$findUser[$message[1];no]>]==true;Je ne peux vkick un **owner bot**]
$onlyIf[$memberExists[$finduser[$message[1];no]]==true;Membre introuvable {delete:5s}]
$onlyBotPerms[movemembers;Je n'ai pas les permissions nécessaires pour vkick **$usertag[$get[membre]]**]
$let[membre;$findUser[$message[1];no]]
$onlyif[$message[1]!=;Argument invalide{delete:5s}]
$endif

    `
    
    })