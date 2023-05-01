module.exports = ({
name:   "tempmute",
$if:    "v4",
code:`
$if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
$sendmessage[**$usertag[$findMember[$message[1]]]** a été unmute après $message[2]]
$wait[$message[2]]
$if[$message[3]==]
$timeoutMember[$guildID;$findMember[$message[1]];$message[2];no;par $username | Raison : aucune;]
$else
$timeoutMember[$guildID;$findMember[$message[1]];$message[2];no;par $username | Raison : $messageSlice[2];]
$endif
$channelsendmessage[$channelID;**$usertag[$findMember[$message[1]]]** a été tempmute $message[2]]
$onlyIf[$isNumber[$replaceText[$replaceText[$replaceText[$replaceText[$message[2];s;];m;];h;];d;]]!=false;Temps invalide]
$onlyBotPerms[moderatemembers;Je n'ai pas les permissions nécessaires pour timeout **$usertag[$get[membre]]**]
$onlyif[$findUser[$message[1];no]!=$ownerID;Je ne peux **mute** un **admin**]
$onlyif[$findUser[$message[1];no]!=$getVar[buyerID];Vous n'avez pas la permission de **mute** le buyer bot]
$onlyif[$findUser[$message[1];no]!=$authorID;Tu ne peux pas te mentionner]
$let[membre;$findUser[$message[1];no]]
$onlyIf[$memberExists[$finduser[$message[1];no]]==true;Membre introuvable {delete:5s}]
$onlyIf[$message[1]!=;La mention ou l'id du membre est invalide {delete:5s}]
$endif

`


})