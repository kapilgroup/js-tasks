const verifyVotes = (voteCounts) => {
    
    if (voteCounts.length === 0) {
      return 0;
    }
  
    return voteCounts[0] + verifyVotes(voteCounts.slice(1));
  };
  

  const votes = [5400, 6700, 1500, 4000];
  console.log(verifyVotes(votes)); 
  