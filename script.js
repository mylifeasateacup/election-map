 var createPolitician = function(name, partyColor){

  var politician = {};

  politician.name = name;
  politician.electionResults = null;
  politician.totalVotes = 0;
  politician.partyColor = partyColor;
  politician.tallyVotes = function() {
    
    for (var i=0; i < this.electionResults.length; i++){
      this.totalVotes = this.totalVotes + this.electionResults[i];
    }
  }
    
  return politician;
  
};

var jane = createPolitician("Jane Doe", [132, 17, 11]);
var dwayne = createPolitician("The Rock", [245, 141, 136]);

jane.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15 , 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];
dwayne.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

jane.electionResults[9]=1;
dwayne.electionResults[9]=28;

jane.electionResults[4]=17;
dwayne.electionResults[4]=38;

jane.electionResults[43]=11;
dwayne.electionResults[43]=27;

var setStateResults = function(state){
  theStates[state].winner = null;
  
  if (jane.electionResults[state] > dwayne.electionResults[state]){
    theStates[state].winner = jane;
  }
  else if (dwayne.electionResults[state] > jane.electionResults[state]){
    theStates[state].winner = dwayne;
  }
  
  var stateWinner = theStates[state].winner;
  
  if (stateWinner !== null){
    theStates[state].rgbColor = stateWinner.partyColor;
  }else {
    theStates[state].rgbColor = [11, 32, 57];
  }
  
  stateName.innerText = theStates[state].nameFull;
  abbreviation.innerText = "(" +theStates[state].nameAbbrev + ")";  

  stateCandidate1Name.innerText = jane.name;
  stateCandidate2Name.innerText = dwayne.name;

  stateCandidate1Results.innerText = jane.electionResults[state];
  stateCandidate2Results.innerText = dwayne.electionResults[state];
  
  if (theStates[state].winner === null) {
    winnersName.innerText = "DRAW";
  } else {
    winnersName.innerText = theStates[state].winner.name;
  }
  
};

jane.tallyVotes();
dwayne.tallyVotes();

var winner = null;

if (jane.totalVotes > dwayne.totalVotes) {
  winner = jane.name;
}

else if (jane.totalVotes == dwayne.totalVotes) {
  winner = "DRAW!";
}
  
else {
  winner = dwayne.name;
}

console.log("And the winner is..." + winner);

var countryResultsTable = document.getElementById('countryResults');
var row = countryResultsTable.children[0].children[0];

row.children[0].innerText = jane.name;
row.children[1].innerText = jane.totalVotes;
row.children[2].innerText = dwayne.name;
row.children[3].innerText = dwayne.totalVotes;
row.children[5].innerText = winner;

var stateResultsTable = document.getElementById('stateResults');
var header = stateResultsTable.children[0];
var body = stateResultsTable.children[1];

var stateName = header.children[0].children[0];
var abbreviation = header.children[0].children[1];

var stateCandidate1Name = body.children[0].children[0];
var stateCandidate1Results = body.children[0].children[1];

var stateCandidate2Name = body.children[1].children[0];
var stateCandidate2Results = body.children[1].children[1];

var winnersName = body.children[2].children[1];
