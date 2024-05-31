
const teamWins = {
    "Team sri": 10,
    "Team srini": 12,
    "Team srikanth": 8,
    "Team ss": 15,
    "Team sns": 9
  };
  
  
  function findTeamWithMaxWins(teamWins) {
    
    let maxWins = -1;
    let teamWithMaxWins = '';
  
    
    for (const team in teamWins) {
      
      if (teamWins[team] > maxWins) {
        maxWins = teamWins[team];
        teamWithMaxWins = team;
      }
    }
  
    
    return teamWithMaxWins;
  }
  
  
  const topTeam = findTeamWithMaxWins(teamWins);
  
  
  console.log(`The team with the maximum wins is: ${topTeam}`);
  
  