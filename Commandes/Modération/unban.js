module.exports = ({
name: "unban",
$if: "v4",
code:`
$if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
$channelsendmessage[$channelID;**$usertag[$get[unban]]**  été __unban__]
$unban[$guildID;$get[unban];$get[raison]]
$let[raison;$replaceText[*$messageSlice[1]*;**;Inconnu]]
$onlyif[$isBanned[$guildID;$get[unban]]==true;**$usertag[$get[unban]]** n'est pas ban.]
$onlyIf[$userExists[$finduser[$message[1];no]]==true;Utilisateur introuvable {delete:5s}]
$let[unban;$findUser[$message[1];no]]
$onlyif[$message[1]!=;Argument invalide{delete:5s}]
$endif
    

    `
    
    })