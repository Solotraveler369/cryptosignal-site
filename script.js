async function connectMetaMask() {
  if (typeof window.ethereum !== "undefined") {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      alert("Connected MetaMask: " + accounts[0]);
    } catch (err) {
      alert("User rejected MetaMask connection.");
    }
  } else {
    alert("MetaMask is not installed. Please install it to connect.");
  }
}

document.getElementById("connectButton").addEventListener("click", connectMetaMask);
