
const players = [
    { name: "Player A", team: "Team X", runs: 500 },
    { name: "Player B", team: "Team Y", runs: 450 },
    { name: "Player C", team: "Team Z", runs: 470 },
    { name: "Player D", team: "Team A", runs: 480 },
    { name: "Player E", team: "Team B", runs: 520 },
    { name: "Player F", team: "Team C", runs: 510 },
  ];
  
  
  function findTopScorers(players) {
    
    const sortedPlayers = players.sort((a, b) => b.runs - a.runs);
  
    
    const topScorers = sortedPlayers.slice(0, 3);
  
    return topScorers;
  }
  
  
  const top3Scorers = findTopScorers(players);
  
  
  console.log(top3Scorers);
  