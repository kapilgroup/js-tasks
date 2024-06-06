const filterCandidates = (candidates, threshold) => {
    return candidates
      .filter(candidate => candidate.votes > threshold)
      .map(candidate => candidate.name);
  };
  
  
  const candidates = [
    { name: "Srinitha", votes: 5400 },
    { name: "Srikanth", votes: 6700 },
    { name: "Srini", votes: 1500 },
    { name: "Sri", votes: 4000 }
  ];
  
  console.log(filterCandidates(candidates, 2000));
  console.log(filterCandidates(candidates, 3000)); 
  console.log(filterCandidates(candidates, 1000)); 
  