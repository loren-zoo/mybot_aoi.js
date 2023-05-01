module.exports = [
    {
        name:"autoreact add",
        aliases:"autoreact",
        $if: "v4",
        code:`
        $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
        L'émoji $get[emoji] sera maintenant ajouté automatiquement à chaque message du salon <#$get[salon]>
        $setChannelVar[autoreact;$getChannelVar[autoreact;$get[salon]],$get[emoji];$get[salon]]
        $onlyIf[$checkContains[$getChannelVar[autoreact;$get[salon]];$get[emoji]]!=true;Cet émoji est déjà dans cette liste]
        $let[salon;$mentionedChannels[1;yes]]
        $let[emoji;$message[1]]
        $onlyif[$message[1]!=;Emoji invalide]
        $endif


        `
    },{

        name: "$alwaysExecute",
        code:`
        $addMessageReactions[$channelID;$messageID;$joinSplitText[;]]
        $textSplit[$getChannelVar[autoreact];,]
        $onlyIf[$getChannelVar[autoreact]!=;]
        `

    },{

        name: "autoreact del",
        $if: "v4",
        code:`
        $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
L'émoji $message ne sera plus ajouté automatiquement à chaque message du salon <#$get[salon]>
$setChannelVar[autoreact;$getChannelVar[autoreact;$get[salon]];,$get[emoji];];$get[salon]]
$onlyIf[$checkContains[$getChannelVar[autoreact;$get[salon]];$get[emoji]]==true;Cet émoji n'est pas dans la liste]
$let[salon;$mentionedChannels[1;yes]]
$let[emoji;$message[1]]
$onlyif[$message[1]!=;Emoji invalide]
$endif


        `
    },{

        name:"autoreact list",
        $if: "v4",
        code:`
        $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
$color[1;$getservervar[color]]
$title[1;Liste des émoji dans $channelName[$get[salon]]]
$description[1;$replaceText[$replaceText[$getChannelVar[autoreact;$get[salon]];,;
];Aucun emoji enregistré; ]
$let[salon;$mentionedChannels[1;yes]]
$endif

        
        `
    },{
name:"autoreact clear",
$if: "v4",
code:`
$if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
Les émojis du salon <#$get[salon]> ont été reset !
$setChannelVar[autoreact;;$get[salon]]
$let[salon;$mentionedChannels[1;yes]]
$endif





        `

    }
]