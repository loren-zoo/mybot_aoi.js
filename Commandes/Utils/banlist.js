module.exports = [{
    name: "banlist",
    $if: "v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    $title[1;Liste des bannissement]
    $description[1;$usersBanned[$guildID;yes;mention;
    ;,]]
    $color[1;$getservervar[color]]
    $addButton[1;Unbanall;danger;unban_$authorID;no;⚠️]
    $onlyif[$bancount!=0;Aucun membre bannit]
    $endif

    

    `
    
    },{
    type: "interaction",
    prototype: "button",
    code:`
    $deleteMessage[$interactionData[message.id];$channelID]
    $djsEval[message.guild.bans.fetch().then(bans => {
        bans.forEach(ban => {
        message.guild.members.unban(ban.user.id);
        })
    });]
    $onlyif[$interactionData[customId]==unban_$interactiondata[author.id];]
    `
    
    }]