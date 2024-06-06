const totalVotes = (...votes) => {
    return votes.reduce((total, vote) => total + vote, 0);
  };
  

  console.log(totalVotes(5400, 6700, 1500,4000)); 
  console.log(totalVotes(100, 200, 300)); 
  console.log(totalVotes()); 
  
