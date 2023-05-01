module.exports = ({
name: "derank",
$if: "v4",
code:`
$if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
<@$get[membre]> a été derank.
$takeRoles[$guildID;$get[membre];$joinSplitText[;]]
$textSplit[$replaceText[$userRoles[$get[membre];$guildID;id;+;'];+;-];-]
$onlyif[$findUser[$message[1];no]!=$ownerID;Je ne peux derank un le propriétaire du serveur.]
$let[nombre;$userRolesCount[$get[membre];$guildID]]
$let[membre;$findUser[$message[1];no]]
$onlyIf[$memberExists[$finduser[$message[1];no]]==true;Membre introuvable {delete:5s}]
$onlyif[$message!=;Argument invalide {delete:5s}]
$endif


`

})