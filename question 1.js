const calculateVotes = (candidateName, votes, region) => {
    return `${candidateName} received ${votes} votes in the ${region} region.`;
  };
  
  
  console.log(calculateVotes("srinitha", 5400, "North"));
  console.log(calculateVotes("srikanth", 6700, "South"));
  console.log(calculateVotes("srini", 1500, "East"));
  console.log(calculateVotes("sri", 4000, "West"));
  