module.exports = ({
    name:   "prefix",
    $if:"v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    Le prefix à été modifié, le nouveau prefix à utilisé est : \`$message\`]
    $setServerVar[prefix;$message]
    $onlyIf[$message!=$getServerVar[prefix];J'ai déjà ce prefix, cherche en un autre.]
    $onlyIf[$message[1]!=;Argumant invalide]
    $endif
    `})