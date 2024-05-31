
const players = [
    { name: "Player A", team: "Team X", runs: 500 },
    { name: "Player B", team: "Team Y", runs: 450 },
    { name: "Player C", team: "Team Z", runs: 470 },
    { name: "Player D", team: "Team A", runs: 480 },
    { name: "Player E", team: "Team B", runs: 520 },
    { name: "Player F", team: "Team C", runs: 510 },
  ];
  
 
function findPlayersByTeam(players, teamName) {
    
    const playersInTeam = players.filter(player => player.team === teamName);
  
    return playersInTeam;
  }
  
  
  const teamName = "Team X";
  const playersInTeamX = findPlayersByTeam(players, teamName);
  
  
  console.log(`Players in ${teamName}:`, playersInTeamX);
   