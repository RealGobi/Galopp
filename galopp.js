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

function RaceHorses(number) {
    this.number = number;
    this.position = 0;
    
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

// Kontrollera om någon vunnit, samt loopar spelet
while ( leaderPosition < 20){

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

}


