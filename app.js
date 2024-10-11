// Array to hold the votes
let votes = [];

// Function to cast the votes and store them
function castVotes() {
    // Clear previous results
    document.getElementById("result").innerHTML = "";

    // Get the votes from the inputs
    let voter1 = document.getElementById("voter1").value.trim();
    let voter2 = document.getElementById("voter2").value.trim();
    let voter3 = document.getElementById("voter3").value.trim();

    // Ensure all votes are entered
    if (!voter1 || !voter2 || !voter3) {
        alert("Please enter all votes.");
        return;
    }

    // Store votes in the array
    votes = [
        { voter: "Voter 1", vote: voter1 },
        { voter: "Voter 2", vote: voter2 },
        { voter: "Voter 3", vote: voter3 }
    ];

    // Simulate shuffling the votes
    shuffleVotes(votes);

    // Randomly check a few votes (in this case, we'll check 2 random votes)
    randomCheckVotes(votes);
}

// Function to shuffle the votes
function shuffleVotes(votes) {
    for (let i = votes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [votes[i], votes[j]] = [votes[j], votes[i]]; // Swap elements
    }
    console.log("Votes after shuffling:", votes);
}

// Function to randomly check votes
function randomCheckVotes(votes) {
    let resultDiv = document.getElementById("result");

    // Pick two random votes for checking
    let randomIndexes = [];
    while (randomIndexes.length < 2) {
        let randIndex = Math.floor(Math.random() * votes.length);
        if (!randomIndexes.includes(randIndex)) {
            randomIndexes.push(randIndex);
        }
    }

    // Display the checked votes
    let checkedVotes = randomIndexes.map(index => votes[index]);

    // Show results of the random check
    resultDiv.innerHTML += "<h3>Random Vote Check:</h3>";
    checkedVotes.forEach(vote => {
        resultDiv.innerHTML += `<p>${vote.voter}'s vote: ${vote.vote}</p>`;
    });

    // Add transparency - display all votes to ensure integrity
    resultDiv.innerHTML += "<h3>All Votes (Shuffled):</h3>";
    votes.forEach(vote => {
        resultDiv.innerHTML += `<p>${vote.voter} voted: ${vote.vote}</p>`;
    });
}
