module.exports = ({
    name:   "count",
    $if:"v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    Les suites de nombres se feront dans le salon <#$mentionedChannels[1;yes]>
    $setServerVar[nbcount;1]
    $setServerVar[channelcounter;$mentionedChannels[1;yes]]
    $endif

    `
    },{
    name:"count off",
    $if:"v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    les suites de nombres sont désactivés
    $setServerVar[nbcount;0]
    $setServerVar[channelcounter;]
    $endif

    `

    },{
    name:"count statut",
    $if:"v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    $channelSendMessage[$channelID;Le salon configuré est <#$getServerVar[channelcounter]>, \`$getservervar[nbcount] nombres\`]
    $onlyIf[$serverChannelExists[$getServerVar[channelcounter]]==true;Le salon n'est pas configuré]
    $endif


    
    `
    },{
    type:"channelDelete",
    $if:"v4",
    code:`
    $if[$channelID==$channelcounter]
    $setServerVar[nbcount;0]
    $setServerVar[channelcounter;]
    $endif
    
    `
    })