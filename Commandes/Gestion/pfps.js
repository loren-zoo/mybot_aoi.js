module.exports = [{
    name: "pfp",
    $if:"v4",
    code:`   
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    Le salon de photos de profil aléatoire sera désormais <#$get[channel]>
    $setservervar[pfp;$get[channel]]
    $onlyIf[$channelType[$get[channel]]==text;Salon invalide {delete:5s}]
    $let[channel;$findchannel[$message[1];yes]]
    $endif

    `
    },{
    name:"pfp off",
    $if:"v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    Le salon de photos de profil aléatoire est désormais __désactivé__
    $setservervar[pfp;]
    $endif

        `
    },{
    type: "loop",
    code: `
    $forEachGuild[1;{};bannerpfp;]
    $forEachGuild[1;{};pfp;]
    $suppressErrors
    `,
    channel: "$randomChannelID",
    executeOnStartup: true,
    every: 1000
    
    },{
    name:"pfp auto",
    $if:"v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    $channelSendMessage[$get[pfp];<@$authorID> Salon configuré]
    $setServerVar[pfp;$get[pfp]]
    $let[pfp;$createChannel[$guildId;・pfps;text;yes;]]
    $endif
    `
    },{
    name:"pfp statut",
    $if:"v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    Le salon des "photos de profils aléatoires" est <#$getServerVar[pfp]>
    $onlyIf[$serverChannelExists[$getServerVar[pfp]]==true;Le salon n'est pas configuré]
    $endif

    
    `
    },{
    type: "awaited",
    name: "pfp",
    code: `$usechannel[$getservervar[pfp]]
    $image[1;$useravatar[$get[user]]]
    $title[1;$usertag[$get[user]];$nonEscape[$useravatar[$get[user]]]]
    $footer[1;$usertag[$get[user]]]
    $color[1;$getservervar[color]]
    $addButton[1;Télecharger;link;$nonEscape[$useravatar[$get[user]]]]
    $let[user;$randomuserid]
    $onlyIf[$serverChannelExists[$getservervar[pfp]]==true;]`
    },{
    type: "awaited",
    name: "bannerpfp",
    code: `
    $usechannel[$getservervar[pfp]]
    $image[1;$getUserBanner[$get[user]]]
    $title[1;$usertag[$get[user]];$nonEscape[$getUserBanner[$get[user]]]]
    $footer[1;$usertag[$get[user]]]
    $color[1;$getservervar[color]]
    $addButton[1;Télecharger;link;$nonEscape[$getUserBanner[$get[user]]]]
    $onlyIf[$getUserBanner[$get[user]]!=null;]
    $let[user;$randomuserid]
    $onlyIf[$serverChannelExists[$getservervar[pfp]]==true;]`
    },{
    type:"channelDelete",
    $if:"v4",
    code:`
    $if[$getServerVar[pfp]==$channelID]
    $setservervar[pfp;]
    $endif
    `
    }]
    