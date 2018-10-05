

var kortLek = createDeck();

// console.log(kortLek);
var deck = shuffle(createDeck());

var player1 = [], player2 = [];
deal(3);
console.log(player1);
console.log(player2);

function deal(antal) {
  for(let i=0; i < antal; i++) {
    player1.push(deck.pop());
    player2.push(deck.pop());
  }
}


function createDeck() {
  
    var suits = ["Spades", "Hearts", "Clubs", "Diamonds"];
    var ranks = [2,3,4,5,6,7,8,9,10, "J", "Q", "K", "A"];
    var deck = [];

    for (let i = 0;i < 4; i++){
        for (let j = 0; j < 13; j++){
          let card = {  suit :suits [i] ,
                        rank : ranks [j],
                        
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
