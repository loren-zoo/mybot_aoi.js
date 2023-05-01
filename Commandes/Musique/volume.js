module.exports = [{
    name:"volume",
    $if:"v4",
    code:`

    Volume : \`$message\`.

$volume[$message[1]]
$onlyIf[$isNumber[$message[1]]==true;Argument Invalide.]
$onlyIf[$message!=;Volume Invalide.]
$onlyif[$queueLength!=0;Rien ne se joue actuellement sur ce serveur.]
$onlyIf[$voiceID[$clientID]!= ;Je suis déconnecté.]
$onlyIf[$voiceID[$authorID]==$voiceID[$clientID];Vous êtes connecté ailleurs]
$onlyIf[$voiceID[$authorID]!=;Merci de rejoindre un salon vocal.]`
}]