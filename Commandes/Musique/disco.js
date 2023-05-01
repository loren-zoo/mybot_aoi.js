module.exports = [{
    name:"disconnect",
    aliases:["disco","leavevc","stop"],
    $if:"v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]

    J'ai bien quitté le salon vocal <#$voiceID[$authorID]>.
    $leaveVC
    
    $onlyIf[$voiceID[$authorID]==$voiceID[$clientID];Vous n'êtes pas dans mon salon vocal]
    $onlyIf[$voiceID[$authorID]!=;Tu n'es dans aucun salon vocal..]
    $onlyIf[$voiceID[$clientID]!=;Je suis déjà déconnecté]
    $endif
    `
}]