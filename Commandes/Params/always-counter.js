
module.exports = {
    name: "$alwaysExecute",
    $if: "v4",
    code: `
    $if[$toLowerCase[$message]==$getServerVar[nbcount]]
    $addCmdReactions[✅]
  
    $setServerVar[nbcount;$sum[$getServerVar[nbcount];1]]
    $endif
    $if[$toLowerCase[$message]!=$getServerVar[nbcount]]
    $addCmdReactions[❌]
    $endif
    $onlyIf[$serverChannelExists[$getServerVar[channelcounter]]==true;]
    $onlyIf[$channelID==$getServerVar[channelcounter];]
    $onlyIf[$getServerVar[nbcount]!=0;]
    
    `}