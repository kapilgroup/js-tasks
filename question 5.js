const analyzeElection = (threshold, ...candidates) => {
    
    const filteredCandidates = candidates.filter(candidate => candidate.votes > threshold);
    
    
    const calculateTotalVotes = (voteCounts) => {
      if (voteCounts.length === 0) {
        return 0;
      }
      return voteCounts[0] + calculateTotalVotes(voteCounts.slice(1));
    };
  
    
    const filteredNames = filteredCandidates.map(candidate => candidate.name);
    
    
    const filteredVotes = filteredCandidates.map(candidate => candidate.votes);
    
    
    const totalVotes = calculateTotalVotes(filteredVotes);
    
    
    return {
      filteredNames,
      totalVotes
    };
  };
  
  
  const candidates = [
    { name: "Srinitha", votes: 5400 },
    { name: "Srikanth", votes: 6700 },
    { name: "Srini", votes: 1500 },
    { name: "Sri", votes: 4000 }
  ];
  
  console.log(analyzeElection(2000, ...candidates));
  
  console.log(analyzeElection(3000, ...candidates));

  console.log(analyzeElection(1000, ...candidates));
  
  