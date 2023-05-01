module.exports	= [{
    name:	"embed",
    $if:"v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    $setUserVar[embedID;$sendMessage[{newEmbed:{title:$getUserVar[titre]}{description:$getUserVar[description]}{footer:$getuservar[footer]}{image:$getUserVar[image]}{thumbnail:$getUserVar[thumbnail]}{color:$getUserVar[theme]}{author:$getuservar[authore]:$getuservar[authorurl]}};yes];$authorID] $editIn[2ms; ]
    $description[1;chargement]
    $addButton[2;Annuler mon choix;2;closeembed_$authorID;no;❌]
    $addButton[2;Envoyer;2;send2_$authorID;no;✅]
    $addSelectMenu[1;embed1_$authorID;Modifie ton embed;1;1;no;Modifier l'auteur::authore:no:🕵️‍♂️;Modifier le titre::title:no:✏;Modifier la description::description:no:💬;Modifier L'image::image:no:🖼;Modifier la couleur::color:no:🎨;Modifier le thumbnail::thumb:no:🏷;Modifier le footer::footer:no:🔻;Voir l'embed::look:no:📋;Terminer et voir::send:no:✅]
    $color[1;$getservervar[color]]
    $endif
    `},{
        
    type: "interaction",
    prototype: "selectMenu",
    $if: "v4",
    code: `
    $if[$message==title]
    $channelSendMessage[$channelID;Quel \`Titre\` voulez vous attribuer a l'embed ?]
    $awaitMessages[$channelID;$authorID;10m;everything;titre;Trop long]
    $endif
    $if[$message==description]
    $channelSendMessage[$channelID;Quel \`Description\` voulez vous attribuer a l'embed ?]
    $awaitMessages[$channelID;$authorID;10m;everything;description;Trop long]
    $endif
    $if[$message==color]
    $channelSendMessage[$channelID;Quel \`Couleur\` voulez vous attribuer a l'embed ? (couleur hex)]
    $awaitMessages[$channelID;$authorID;10m;everything;couleur;Trop long]
    $endif
    $if[$message==image]
    $channelSendMessage[$channelID;Quel \`Image\` voulez vous attribuer a l'embed ? (lien/image)]
    $awaitMessages[$channelID;$authorID;10m;everything;image;Trop long]
    $endif
    $if[$message==thumb]
    $channelSendMessage[$channelID;Quel \`Thumbnail\` voulez vous attribuer a l'embed ? (lien)]
    $awaitMessages[$channelID;$authorID;10m;everything;thumbnail;Trop long]
    $endif
    $if[$message==footer]
    $channelSendMessage[$channelID;Quel \`Footer\` voulez vous attribuer a l'embed ?]
    $awaitMessages[$channelID;$authorID;10m;everything;footer;Trop long]
    $endif
    $if[$message==authore]
    $channelSendMessage[$channelID;Quel \`Author\` voulez vous attribuer a l'embed ?]
    $awaitMessages[$channelID;$authorID;10m;everything;authore;Trop long]
    $endif
        
    $if[$message==stop]
    $clear[7;$clientID;no;$channelID]
    $resetUserVar[authorurl]
    $resetUserVar[authore]
    $resetUserVar[thumbnail]
    $resetUserVar[image]
    $resetUserVar[description]
    $resetUserVar[titre]
    $resetUserVar[theme]
    $resetUserVar[footer]
    $endif
    $if[$message==look]
    $sendMessage[{newEmbed:{title:$getUserVar[titre]}{description:$getUserVar[description]}{footer:$getUserVar[footer]}{image:$getUserVar[image]}{thumbnail:$getUserVar[thumbnail]}{color:$getUserVar[theme]}{author:$getuservar[authore]:$getuservar[authorurl]}};;;;yes]
    $endif
    $if[$message==send]
    $interactionUpdate[;{newEmbed:{title:$getUserVar[titre]}{description:$getUserVar[description]}{footer:$replaceText[$getUserVar[footer];Embed; ]}{image:$getUserVar[image]}{thumbnail:$getUserVar[thumbnail]}{color:$getUserVar[theme]}{author:$getuservar[authore]:$getuservar[authorurl]}};{actionRow:{button:Envoyer l'embed:2:send2_$authorID:no:✅}]
    $deleteMessage[$getUserVar[embedID];$channelID]
    $endif
    $onlyif[$interactionData[customId]==embed1_$interactiondata[author.id];]
    `
    },{
    type:	"interaction",
    prototype: "button",
    code:`
    $channelSendMessage[$channelID;Mentionne un salon]
    $awaitMessages[$channelID;$authorID;10m;everything;send;Trop long]
    $onlyif[$interactionData[customId]==send2_$interactiondata[author.id];]
    `},{
    type: "interaction",
    prototype: "button",
    code: `
    $deleteMessage[$getUserVar[embedID];$channelID]
    $resetUserVar[authorurl]
    $resetUserVar[authore]
    $resetUserVar[thumbnail]
    $resetUserVar[image]
    $resetUserVar[description]
    $resetUserVar[titre]
    $resetUserVar[theme]
    $resetUserVar[footer]
    $deleteMessage[$interactionData[message.id]]
    $onlyif[$interactionData[customId]==closeembed_$interactiondata[author.id];]
    `
    },{
    type:"awaited",
    name: "titre",
    code:` 
    $editMessage[$getUserVar[embedID];{newEmbed:{title:$message}{description:$getUserVar[description]}{image:$getUserVar[image]}{color:$getUserVar[theme]}{thumbnail:$getUserVar[thumbnail]}{footer:$replaceText[$getUserVar[footer];Embed; ]}{author:$getuservar[authore]:$getuservar[authorurl]}}]
    $clear[1;$clientID;no;$channelID]
    $deletecommand
    $setUserVar[titre;$message]` 
    },{
    type:"awaited",
    name: "description",
    code: `
    $editMessage[$getUserVar[embedID];{newEmbed:{title:$getUserVar[titre]}{description:$message}{image:$getUserVar[image]}{color:$getServerVar[theme]}{thumbnail:$getUserVar[thumbnail]}{footer:$replaceText[$getUserVar[footer];Embed; ]}{author:$getuservar[authore]:$getuservar[authorurl]}}]
    $clear[1;$clientID;no;$channelID]
    $deletecommand
    $setUserVar[description;$message]`
    },{
    type:"awaited",
    name: "footer",
    code: `
    $editMessage[$getUserVar[embedID];{newEmbed:{title:$getUserVar[titre]}{description:$getUserVar[description]}{image:$getUserVar[image]}{color:$getUserVar[theme]}{thumbnail:$getUserVar[thumbnail]}{footer:$message}{author:$getuservar[authore]:$getuservar[authorurl]}}]
    $clear[1;$clientID;no;$channelID]
    $deletecommand
    $setUserVar[footer;$message]`
    },{
        type:"awaited",
        name: "image",
    $if: "v4",
    code: `
    $if[$message!=]
    $editMessage[$getUserVar[embedID];{newEmbed:{title:$getUserVar[titre]}{description:$getUserVar[description]}{image:$get[link]}{color:$getUserVar[theme]}{thumbnail:$getUserVar[thumbnail]}{footer:$replaceText[$getUserVar[footer];Embed; ]}{author:$getuservar[authore]:$getuservar[authorurl]}}]
    $setUserVar[image;$get[link]]
    $deletecommand
    $clear[1;$clientID;no;$channelID]
    $onlyIf[$isValidImageLink[$get[link]]==true;Url invalide {delete:4s}]
    $else
    $editMessage[$getUserVar[embedID];{newEmbed:{title:$getUserVar[titre]}{description:$getUserVar[description]}{image:$messageAttachment}{color:$getUserVar[theme]}{thumbnail:$getUserVar[thumbnail]}{footer:$replaceText[$getUserVar[footer];Embed; ]}{author:$getuservar[authore]:$getuservar[authorurl]}}]
    $setUserVar[image;$messageAttachment]
    $deletecommand
    $clear[1;$clientID;no;$channelID]
    $endif
    $let[link;$message]
       `
        },{
            type: "awaited",
            name:"thumbnail",
            code: `
            $editMessage[$getUserVar[embedID];{newEmbed:{title:$getUserVar[titre]}{description:$getUserVar[description]}{image:$getUserVar[image]}{color:$getUserVar[theme]}{thumbnail:$message}{footer:$replaceText[$getUserVar[footer];Embed; ]}{author:$getuservar[authore]:$getuservar[authorurl]}}]
            $onlyif[$isValidImageLink[$message]==true;url invalide.]
            $clear[1;$clientID;no;$channelID]
            $deletecommand
            $setUserVar[thumbnail;$message]`
        },{
    type: "awaited",
    name: "couleur",
    code: `
    $editMessage[$getUserVar[embedID];{newEmbed:{title:$getUserVar[titre]}{description:$getUserVar[description]}{image:$getUserVar[image]}{color:$message}{thumbnail:$getUserVar[thumbnail]}{footer:$replaceText[$getUserVar[footer];Embed; ]}{author:$getuservar[authore]:$getuservar[authorurl]}}]
    $onlyIf[$isValidHex[$message]==true;{newEmbed:{title:vous ne trouver pas d'hex ?}{description:Conseil taper sur internet (couleur) hex}}]
    $clear[1;$clientID;no;$channelID]
    $deletecommand
    $setUserVar[theme;$message]
       `
        },{
    type: "awaited",
    name: "authore",
    code: `
    $channelSendMessage[$channelID;Quel \`Author Url\` voulez vous attribuer a l'embed ? (\`false pour en mettre aucun\`)]
    $awaitMessages[$channelID;$authorID;10m;everything;authorurl;Trop long]
    $editMessage[$getUserVar[embedID];{newEmbed:{title:$getUserVar[titre]}{description:$getUserVar[description]}{image:$getUserVar[image]}{color:$getUserVar[theme]}{thumbnail:$getUserVar[thumbnail]}{footer:$replaceText[$getUserVar[footer];Embed; ]}{author:$message:$getuservar[authorurl]}}]
    $clear[1;$clientID;no;$channelID]
    $deletecommand
    $setUserVar[authore;$message]`
        },{
    type:"awaited",
    name: "authorurl",
    $if:	"v4",
    code: `
    $if[$message==false]
    $clear[1;$clientID;no;$channelID]
    $deletecommand
    $else
    $editMessage[$getUserVar[embedID];{newEmbed:{title:$getUserVar[titre]}{description:$getUserVar[description]}{image:$getUserVar[image]}{color:$getUserVar[theme]}{thumbnail:$getUserVar[thumbnail]}{footer:$replaceText[$getUserVar[footer];Embed; ]}{author:$getuservar[authore]:$message}}]
    $clear[1;$clientID;no;$channelID]
    $deletecommand
    $setUserVar[authorurl;$message]
    $onlyif[$isValidImageLink[$message]==true;url invalide.]
    $endif`
        },{

    type: "awaited",
    name: "send",
    code: `
    $resetUserVar[authorurl]
    $resetUserVar[authore]
    $resetUserVar[thumbnail]
    $resetUserVar[image]
    $resetUserVar[description]
    $resetUserVar[titre]
    $resetUserVar[theme]
    $resetUserVar[footer]
    $wait[1ms]
    $useChannel[$mentionedChannels[1]]
    $author[1;$getUserVar[authore];$getUserVar[authorurl]]
    $title[1;$getUserVar[titre]]
    $description[1;$getUserVar[description]]
    $footer[1;$replaceText[$getUserVar[footer];Embed; ]]
    $image[1;$getUserVar[image]]
    $thumbnail[1;$getUserVar[thumbnail]]
    $color[1;$getUserVar[theme]]
    $clear[1;$clientID;no;$channelID]
    $deletecommand`
        }]
    