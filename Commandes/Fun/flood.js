module.exports = {
    name: "flood",
    category: 'Leaf',
    $if:"v4",
    code: `
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]

    $djsEval[(async () => {
    const { Flood } = require('leaf-utils');

await Flood({
            message: message,
            slash_command: false,
            time: 300000,
            difficulty: 13,
            embed: {
                title: 'Flood',
                color: '#FFAE0E'
            },
            emojis: {
                redsquare: '🟥',
                bluesquare: '🟦',
                yellowsquare: '🟨',
                greensquare: '🟩',
                purplesquare: '🟪',
                style: 'SECONDARY',
            },
            authorOnly: 'Seul <@{{author}}> peut utiliser ces boutons !',
        })
})()]
$endif




`
}