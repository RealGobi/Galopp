
var kortlek = createDeck();
var deck = shuffle(createDeck());
console.log(kortlek);



function createDeck() {
    var suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
    var ranks = [2,3,4,5,6,7,8,9,10,'J','Q', 'K', 'A']
    var deck = []
    
    for (let i = 0; i < 4; i++){
        for (let j = 0; j < 13; j++){
           let card = { suit: suits[i],
                        rank: ranks [j]
        };
        deck.push(card);
    }
 
}
return deck;
}
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}