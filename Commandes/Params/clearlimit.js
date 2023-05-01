module.exports = ({
    name: "clear limit",
    $if:    "v4",
    code:`
$if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
$if[$messsage[1]!=off]
$setservervar[clearlimit;$message]
$channelsendmessage[$channelid;La limite de clear sera maintenant de **$message messages**]
$onlyIf[$message[1]!=$getservervar[clearlimits];La limite de clear est déjà de $message messages]
$onlyIf[$message[1]>=0;Argument Invalide.]
$onlyIf[$isNumber[$message]==true;Argument invalide.]
$endif
$if[$message[1]==off]
$channelSendMessage[$channelID;La limite de clear est désactivé.]
$setservervar[clearlimit;off]
$onlyIf[$getservervar[clearlimit]!=off;La limite de clear est déjà désactivé.]
$onlyIf[$message[1]!=;Argumant manquant]
$endif
$endif


    `   
    })