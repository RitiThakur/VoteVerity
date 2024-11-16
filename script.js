
document
  .getElementById("connectWalletButton")
  .addEventListener("click", async function () {
    if (window.ethereum) {
      try {
        
        await ethereum.request({ method: "eth_requestAccounts" });
        document.getElementById("walletStatus").textContent =
          "Wallet connected.";
        document.getElementById("votingSection").classList.remove("hidden");
      } catch (error) {
        console.error("Wallet connection error:", error);
        alert("Failed to connect wallet.");
      }
    } else {
      alert("Please install a Web3 wallet like MetaMask to proceed.");
    }
  });


document
  .getElementById("voteButton")
  .addEventListener("click", async function () {
    const selectedCandidate = document.querySelector(
      'input[name="candidate"]:checked'
    );
    if (!selectedCandidate) {
      alert("Please select a candidate to vote for.");
      return;
    }

    const candidate = selectedCandidate.value;
    document.getElementById("voteStatus").textContent =
      "Submitting your vote...";
    document
      .getElementById("transactionStatusSection")
      .classList.remove("hidden");

    setTimeout(() => {
  
      const transactionHash = "0x1234...abcd";
      document.getElementById("transactionHash").textContent = transactionHash;
      document.getElementById("transactionStatus").textContent =
        "Vote successfully submitted!";
      document.getElementById("voteStatus").textContent = "";
      document.getElementById("receiptSection").classList.remove("hidden");

    
      const explorerLink = "https://etherscan.io/tx/" + transactionHash;
      document
        .getElementById("explorerLink")
        .setAttribute("href", explorerLink);
    }, 2000); // Simulated delay
  });
