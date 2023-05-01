module.exports	=	({
name:	"theme",
$if:	"v4",
code: `
$if[$getvar[buyerID]==$authorID]
$setServerVar[color;$message;$guildID]
$description[1;la couleur a bien ete modifier sur \`$message\`]
$color[1;$message]
$argsCheck[1;hex invalide]
$onlyIf[$isValidHex[$message]==true;Couleur invalide.]
$endif
$if[$checkContains[$getVar[owner];<@$authorID>]==true]
$setServerVar[color;$message;$guildID]
$description[1;la couleur a bien ete modifier sur \`$message\`]
$color[1;$message]
$argsCheck[1;hex invalide]
$onlyIf[$isValidHex[$message]==true;Couleur invalide.]
$endif

    `
})