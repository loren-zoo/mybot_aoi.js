module.exports =  [{
    name: "wl add",
    aliases: ["whitelist", "wl", "whitelist add"],
    $if: "v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    $channelsendmessage[$channelID;**$usertag[$get[wl]]** est maintenant wl]
    $setServerVar[wl;$getServerVar[wl],<@$findUser[$message[1]]>]
    $onlyIf[$checkContains[$getServerVar[wl];<@$get[wl]>]!=true;**$usertag[$get[wl]]** est déjà wl]
    $let[wl;$findUser[$message[1];no]]
    $onlyif[$message[1]!=;Argument invalide{delete:5s}]
    $else
$channelSendMessage[$channelID;Tu dois être \`\`owner du robot\`\` pour éffectuer cette commande.]
    $endif
    `},{
    name: "wl del",
    aliases: ["unwhitelist", "unwl", "whitelist del"],
    $if: "v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    $channelsendmessage[$channelID;**$usertag[$get[wl]]** n'est plus wl]
    $setServerVar[wl;$replaceText[$getServerVar[wl];,<@$findUser[$message[1]]>;]]
    $onlyIf[$checkContains[$getServerVar[wl];<@$get[wl]>]!=false;**$usertag[$get[wl]]** n'est pas wl]
    $let[wl;$findUser[$message[1];no]]
    $onlyif[$message[1]!=;Argument invalide{delete:5s}]

    $endif
    `
    },{
    name: "wl list",
    aliases: ["whitelist list"],
    $if: "v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    $title[1;Whitelist]
    $color[1;$getservervar[color]]
    $description[1;$replaceText[$getServerVar[wl];,;
    ]
    $else
$channelSendMessage[$channelID;Tu dois être \`\`owner du robot\`\` pour éffectuer cette commande.]
    $endif
    

    `
    }]