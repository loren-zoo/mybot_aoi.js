module.exports = ({
    name:	"snake",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    $djsEval[
    const { Snake } = require('leaf-utils');
    
     new Snake({
                message: message,
                slash_command: false,
                snake: {
                    head: '🔴',
                    body: '🟢',
                    tail: '🔵',
                    over: '💀'
                },
                emojis: {
                    board: '⬛',
                    food: '🍎',
                    up: '⬆️',
                    right: '➡️',
                    down: '⬇️',
                    left: '⬅️',
                },
                foods: ['🍎', '🍇', '🍊', '🍕', '🥕', '🥞'],
                stopButton: {
                    stopLabel: 'Stop',
                    stopStyle: 'DANGER',
                },
                authorOnly: 'Seul {{author}} peut y toucher',
            }).startGame();
    ]
    

   $endif
    `
    })