module.exports = ({
name: "addrole",
$if: "v4",
code:`
$if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
$channelsendmessage[$channelID;Le rôle \`$roleName[$get[role]]\` a été ajoutée à **$usertag[$get[membre]]**]
$giveRole[$guildID;$get[membre];$get[role]]
$onlyIf[$rolePosition[$highestRole[$clientID];$guildID]<$rolePosition[$findRole[$message[2]];$guildID];Je n'ai pas la permission de donner ce rôle]
$onlyBotPerms[manageroles;Je n'ai pas les permissions nécessaires pour donner le rôle à **$usertag[$get[membre]]**]
$onlyIf[$roleExists[$findRole[$message[2]]]==true;Rôle introuvable {delete:5s}]
$onlyIf[$memberExists[$finduser[$message[1];no]]==true;Membre introuvable {delete:5s}]
$let[role;$findRole[$message[2]]]
$let[membre;$finduser[$message[1];no]]
$onlyIf[$message[2]!=;La mention ou l'id du **rôle** est invalide {delete:5s}]
$onlyIf[$message[1]!=;La mention ou l'id du **membre** est invalide {delete:5s}]
$endif

`

})