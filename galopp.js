/*

repetitoner: hästen går framåt och bollarna kastas

vilkor: poäng på bollar, när det slutar(vem som vinner)

värderna: hur många spelare, poäng, hål, hästarnas position

ordning: 


krav: * hästen rör sig 1,2,3 steg
* läng 20 steg
* vinnaren presenteras

*/

// en funktion (comstructor) som är till för att skapa hästar.
var leaderPosition = 0;

function RaceHorses(number) {
    this.number = number;
    this.position = 0;
    
}

// Kontrollera om någon vunnit
while ( leaderPosition < 20){


}
// Skapa fyra hästar (objekt från constructorn raceHorse)

var horse1 = new RaceHorses(1);
var horse2 = new RaceHorses(2);
var horse3 = new RaceHorses(3);
var horse4 = new RaceHorses(4);

// Samla ihop alla hästar i ett stall

var allHorses = [
    horse1, horse2, horse3, horse4
];

// Rulla bollarna i hål.

horse1.position +=1;
horse2.position +=3;
horse3.position +=1;
horse4.position +=2;

// skriver hur hästarna ligger till

allHorses.forEach(function(horse){
    console.log("Häst " + horse.number + ":" + horse.position + "\n");
    if (horse.position > leaderPosition){
        leaderPosition = horse.position;
    }
  });


// Rulla bollarna i hål.


// Rulla bollarna igen
horse1.position +=0;  // Spelaren missade hålet!
horse2.position +=2;
horse3.position +=1;
horse4.position +=1;

// Skriv ut hur hästarna ligger till efter andra rundan.
allHorses.forEach(function(horse){
  console.log("Häst " + horse.number + ":" + horse.position + "\n");
});
