module.exports = [{
name: "servers",
$if: "v4",
code:`
$if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
$title[1;Servers]
$description[1;$replaceText[$joinSplitText[
];;Aucun serveurs]]
$color[1;$getservervar[color]]
$textSplit[$serverNames[,];,]
$endif
`


},{
name: "leaveid",
$if: "v4",
code:`


$if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
Je viens de quitter \`$serverName[$message]\`
$botLeave[$message]
$onlyIf[$serverExists[$message]==true;Serveur invalide {delete:5s}]
$onlyIf[$isNumber[$message]==true;Serveur invalide {delete:5s}]
$onlyIf[$message==true;Argument invalide {delete:5s}]
$endif


`
}]