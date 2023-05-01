module.exports = [{
name: "set",
$if: "v4",
code:`
$if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
$if[$message[1]==pic]
Photo de profil mise à jour
$if[$message[2]!=]
$setBotAvatar[$get[pic]]
$onlyif[$message[2]!=;Image invalide {delete:4s}]
$else
$setBotAvatar[$messageAttachment]
$endif
$let[pic;$message[2]]
$endif

$if[$message[1]==name]
Je m'appelle maintenant: $messageSlice[1]
$setBotUsername[$messageSlice[1]]
$onlyif[$message[2]!=;Nom invalide {delete:4s}]
$endif
$onlyif[$message[1]!=;Option invalide {delete:4s}]
$endif
`    
}]