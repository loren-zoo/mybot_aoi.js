module.exports = [{
    name:"play",
    $if:"v4",
    code:`


    $channelsendmessage[$channelID;$replaceText[$get[play];;\`$message\` Ajoutée dans la Queue 🎶]



    $let[play;$playTrack[$message;youtube]]
    
    $onlyIf[$voiceID[$authorID]==$voiceID[$clientID];Vous êtes connecté ailleurs.]

    $if[$voiceID[$clientID]==]
    $joinVC
    $endif
   
   
    $onlyIf[$message!=;Vous ne m'avez donné aucun nom de musique.]
    $onlyIf[$voiceID[$authorID]!=;Tu n'es dans aucun salon vocal..]

    `
}]