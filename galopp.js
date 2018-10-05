/*
1. spelet startar
2. rulla boll
3. flytta häst
4. kolla leaderposition + skriv ut hästarnas position
...............

repetitoner: hästen går framåt och bollarna kastas

vilkor: poäng på bollar, när det slutar(vem som vinner)

värderna: hur många spelare, poäng, hål, hästarnas position

ordning: 


krav: * hästen rör sig 1,2,3 steg
* längd 20 steg
* vinnaren presenteras

*/

// en funktion (comstructor) som är till för att skapa hästar.
var leaderPosition = 0;
const distance = 20;

function RaceHorses(number) {
    this.number = number;
    this.position = 0;
    
}

// Skapa fyra hästar (objekt från constructorn raceHorse)
/*
var horse1 = new RaceHorses(1);
var horse2 = new RaceHorses(2);
var horse3 = new RaceHorses(3);
var horse4 = new RaceHorses(4);
*/

function createHorses(nr) {
    var horses = [];

for (let i = 0; i < nr; i++) {
var horse = new RaceHorses (i + 1);
horses.push(horse);
}
return horses;
}

var allHorses = createHorses(12);
// Samla ihop alla hästar i ett stall



// slumpa fram poöng till hästarna
function moveHorses(){
allHorses.forEach(function(horse){
    let slump = Math.floor(Math.random() * 3 );
horse.position += slump;
});

}
// Kontrollera om någon vunnit, samt loopar spelet
while ( leaderPosition < distance){

// Rulla bollarna i hål.

moveHorses();

// skriver hur hästarna ligger till

allHorses.forEach(function(horse){
    console.log("Häst " + horse.number + ":" + horse.position + "\n");
    if (horse.position > leaderPosition){
        leaderPosition = horse.position;
        
    }
  });
}
// sortera hästarna efter leaderPosition

allHorses.sort(function(a,b){
if (a.position < b.position) return 1;
if (a.position > b.position) return -1;
});
console.log(allHorses);

console.log('The winner is ' + allHorses[0].number +  '!');