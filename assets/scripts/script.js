const selectors = {
    gameContainer: document.querySelector('.game-container'),
    board: document.querySelector('.board'),
    moves: document.querySelector('.moves'),
    timer: document.querySelector('.timer'),
    start: document.querySelector('button'),
    win: document.querySelector('.win')
}

const state = {
    gameStarted: false,
    flippedCards: 0,
    totalFlips: 0,
    totalTime: 0,
    loop: null
}

const generateGame = () => {
    const dimensions = selectors.board.getAttribute('data-dimension')

    if (dimensions % 2 !== 0) {
        throw new Error("The dimension of the board must be an even number.")
    }

    const pokemon = ['https://github.com/adamgilroy22/gotta-match-em-all/blob/main/assets/images/bulbasaur.png?raw=true',
                    'https://github.com/adamgilroy22/gotta-match-em-all/blob/main/assets/images/charizard.png?raw=true',
                    'https://github.com/adamgilroy22/gotta-match-em-all/blob/main/assets/images/wartortle.png?raw=true',
                    'https://github.com/adamgilroy22/gotta-match-em-all/blob/main/assets/images/pikachu.png?raw=true',
                    'https://github.com/adamgilroy22/gotta-match-em-all/blob/main/assets/images/mewtwo.png?raw=true',
                    'https://github.com/adamgilroy22/gotta-match-em-all/blob/main/assets/images/eevee.png?raw=true',
                    'https://github.com/adamgilroy22/gotta-match-em-all/blob/main/assets/images/meowth.png?raw=true',
                    'https://github.com/adamgilroy22/gotta-match-em-all/blob/main/assets/images/lapras.png?raw=true',
                    'https://github.com/adamgilroy22/gotta-match-em-all/blob/main/assets/images/snorlax.png?raw=true',
                    'https://github.com/adamgilroy22/gotta-match-em-all/blob/main/assets/images/ditto.png?raw=true']
    const picks = pickRandom(pokemon, (dimensions * dimensions) / 2) 
    const items = shuffle([...picks, ...picks])
    const cards = `
        <div class="board" style="grid-template-columns: repeat(${dimensions}, auto)">
            ${items.map(item => `
                <div class="card">
                    <div class="card-back"></div>
                    <div class="card-front"><img src='${item}'></div>
                </div>
            `).join('')}
       </div>
    `
    
    const parser = new DOMParser().parseFromString(cards, 'text/html')

    selectors.board.replaceWith(parser.querySelector('.board'))
}