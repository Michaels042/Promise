let electionResult = {
  votingData: async () => {
    let votingDetails = [
      {
        party: "APC",
        candidate: "Tinubu",
        votes: 6000000,
      },
      {
        party: "LP",
        candidate: "Obi",
        votes: 70000000,
      },
      {
        party: "PDP",
        candidate: "Atiku",
        votes: 20000000,
      },
    ];

    return votingDetails;
  },
};

// fetch .then
// electionResult.votingData().then((res) => console.log(res));

// AsyncFunction
let votes = async () => {
  try {
    let response = await electionResult.votingData();
    console.log(response);
  } catch (err) {
    console.error(err);
  }
};

votes();
