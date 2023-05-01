module.exports = {
    name: "puissance4",
    category: 'Leaf',
    code: `
    
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
$djsEval[(async () => {
const { Connect4 } = require('leaf-utils');

await Connect4({
            message: message,
            client: client,
            slash_command: false,
            time: 300000,
            opponent: message.mentions.users.first(),
            embed: {
                title: 'Puissance 4',
                color: 'RED'
            },
            challenge: {
                acceptButton: 'Accepter',
                denyButton: 'Refuser',
            },
            emojis: {
                player1: '🔴',
                player2: '🟡',
            },
            noUser: "Vous devez mentionner quelqu'un",
            acceptMessage: '{{player}}, ta defié {{opponent}}',
            cancelMessage: '{{opponent}} à refusé de se battre avec toi!',
            endMessage: 'Defi non accepté à temps',
            timeoutMessage: 'Jeu arreté pour cause dinactivité',
            authorOnly: 'Vous ne pouvez pas utiliser ces boutons',
        })
})()]
$endif

`
} 