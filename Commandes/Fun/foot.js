module.exports = {
    name: "foot",
    category: 'Leaf',
    $if:"v4",
    code: `
    
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    
    
    $djsEval[(async () => {
const { FootballMatch } = require('leaf-utils');

await FootballMatch({
            message: message,
            slash_command: false,
            embed: {
                title: 'Match de foot',
                color: 'RED',
            },
            buttons: {
                left: 'Gauche',
                middle: 'Milieu',
                right: 'Droite',
            },
            emojis: {
                goalkeeper: '🧍‍♂️',
                goal: '🥅',
                soccer: '⚽',
            },
            winMessage: 'GG, <@{{winner}}> a marqué en **{{time}} secondes**',
            loseMessage: '<@{{player}}> tu as perdu ',
            ongoingMessage: 'Un jeu est déjà en cours exécution <#{{channel}}>. Vous ne pouvez pas en démarrer un nouveau',
            authorOnly: 'Seul <@{{author}}> pouvez utiliser ces boutons !',
        })
})()]

$endif

`
}