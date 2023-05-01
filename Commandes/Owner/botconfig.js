module.exports = [{
    name:   "botconfig",
    $if: "v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    $title[1;Configuration Bot]
    $addField[1;3・Changer le stream;Actuel \`\`$getCustomStatus[$clientID]\`\`;no]
    $addField[1;2・Changer l'avatar;Actuel [\`Clique ici\`]($userAvatar[$clientID] 'test');no]
    $addField[1;1・Changer le nom d'utilisateur;Actuel \`\`$username[$clientID]\`\`;no]
    $color[1;$getservervar[color]]
    $addButton[1;3️⃣;2;botstream_$authorID;no]
    $addButton[1;2️⃣;2;botpic_$authorID;no]
    $addButton[1;1️⃣;2;botname_$authorID;no]
    $endif
    `},{
    type: "interaction",
    prototype: "button",
    $if: "v4",
    code: `
    $channelSendMessage[$channelID;Quel **avatar** voulez vous attribuer au bot ?]
    $awaitMessages[$channelID;$authorID;2m;everything;botpic;Command has been cancelled]
    $onlyif[$interactionData[customId]==botpic_$interactiondata[author.id];]
        `
    },{
    type: "interaction",
    prototype: "button",
    $if: "v4",
    code: `
    $channelSendMessage[$channelID;Quel **nom** voulez vous attribuer au bot ?]
    $awaitMessages[$channelID;$authorID;2m;everything;botname;Command has been cancelled]
    $onlyif[$interactionData[customId]==botname_$interactiondata[author.id];]
    `
    },{
    type: "interaction",
    prototype: "button",
    $if: "v4",
    code: `
    $channelSendMessage[$channelID;Quel **stream** voulez vous attribuer au bot ?]
    $awaitMessages[$channelID;$authorID;2m;everything;botstream;Command has been cancelled]
    $onlyif[$interactionData[customId]==botstream_$interactiondata[author.id];]
    `},{
    type: "awaited",
    name:	"botpic",
    code:`
    $if[$message!=]
    $setBotAvatar[$get[link]]
    $deletecommand
    $clear[1;$clientID;no;$channelID]
    $onlyIf[$isValidImageLink[$get[link]]==true;Url invalide {delete:4s}]
    $else
    $setBotAvatar[$messageAttachment]
    $deletecommand
    $clear[1;$clientID;no;$channelID]
    $endif
    $let[link;$message]
    `
     },{
    type: "awaited",
    name:	"botname",
    code:`
    $setBotUsername[$message]
    $addMessageReactions[$channelID;$messageID;✅]
    `},{
    type: "awaited",
    name:	"botstream",
    code:`
    $addMessageReactions[$channelID;$messageID;✅]
    $setStatus[$message;STREAMING;;https://www.twitch.tv/the75momo]`
    }]