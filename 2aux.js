  const { ethers } = require("ethers");

  // Replace with your Besu or Ethereum RPC URL
  const BESU_RPC_URL = "http://0.0.0.0:8545"; // Or WebSocket URL: ws://127.0.0.1:8546

  // Replace with the address you want to check
  const ADDRESS_TO_CHECK1 = "0xaef07fe779e40e3800d7e617c084fe64b87f9aef";
  const ADDRESS_TO_CHECK2 = "0xfe3b557e8fb62b89f4916b721be55ceb828dbd73";


  async function main() {
      // Connect to the Ethereum provider
      const provider = new ethers.JsonRpcProvider(BESU_RPC_URL);

      // Fetch the balance1
      const balance1 = await provider.getBalance(ADDRESS_TO_CHECK1);
      const balance2 = await provider.getBalance(ADDRESS_TO_CHECK2);

      // Convert balance1 from wei to ether and display it
      console.log(`balance1 of ${ADDRESS_TO_CHECK1}:`, ethers.formatEther(balance1), "ETH");
      console.log(`balance1 of ${ADDRESS_TO_CHECK2}:`, ethers.formatEther(balance2), "ETH");
        // .utils.formatEther(balance1), "ETH");
  }

  main().catch(console.error);
