module.exports = [{
    name: 'snipe',
    aliases: ['s',"sn"],
    $if:    "v4",
    code: `
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    $author[1;$username[$getChannelVar[snipe_author;$mentionedChannels[1;yes]]];$userAvatar[$getChannelVar[snipe_author;$mentionedChannels[1;yes]]]]
    $if[$isValidImageLink[$getChannelVar[snipe_msg;$mentionedChannels[1;yes]]]==true]
    $image[1;$getChannelVar[snipe_msg;$mentionedChannels[1;yes]]]
    $description[1;<t:$getChannelVar[snipe_t;$mentionedChannels[1;yes]]:R>]
    $else
    $image[1;$getChannelVar[snipe_image;$mentionedChannels[1;yes]]]
    $description[1;
    $getChannelVar[snipe_msg;$mentionedChannels[1;yes]]
    <t:$getChannelVar[snipe_t;$mentionedChannels[1;yes]]:R>]
    $endif
    $color[1;$getservervar[color]]
    $footer[1;$getvar[footerall]]
    $onlyIf[$getChannelVar[snipe_msg;$mentionedChannels[1;yes]]!=none;Aucun message enregistré {delete:5s}]
    $endif
    `
    },{
    type: 'messageDelete',
    $if: "v4",
    channel: '$channelID',
    code:`
    $setChannelVar[snipe_image;$messageAttachment]
    $if[$message!=]
    $setChannelVar[snipe_msg;$message]
    $else
    $setChannelVar[snipe_msg;$messageAttachment]
    $endif
    $setChannelVar[snipe_author;$authorID]
    $setChannelVar[snipe_channel;$channelID]
    $setChannelVar[snipe_t;$truncate[$divide[$dateStamp;1000]]]`
       }]