const { ethers } = require("ethers");

// ERC20 Contract ABI (Minimal for transfer and balanceOf)
const ERC20_ABI = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "recipient",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transferEther",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
];

// Replace with your deployed ERC20 contract address
const CONTRACT_ADDRESS = "0xB590B92f1068B27510e346044a58d978829EA9A9";

// Replace with your Besu WebSocket or HTTP RPC URL
const BESU_RPC_URL = "http://127.0.0.1:8545";
// "ws://127.0.0.1:8546"; // Use "http://127.0.0.1:8545" if HTTP is preferred

// Replace with sender's private key
const SENDER_PRIVATE_KEY = "4ba2c443e4180515d41c1b22b0798cea6f6cd1c6c84c6cfd650dbeb99e885d81"; // Ensure the sender account has sufficient tokens

// Replace with recipient address
const RECIPIENT_ADDRESS = "0xFE3B557E8Fb62b89F4916B721be55cEb828dBd73";

// Amount to transfer (in the smallest token units, e.g., wei for ETH-like tokens)
const TRANSFER_AMOUNT = ethers.parseUnits("10", 18); // 10 tokens with 18 decimals
//  .parseUnits("10", 18); // 10 tokens with 18 decimals

async function main() {
  // Connect to the Ethereum provider
  const provider = new ethers.JsonRpcProvider(BESU_RPC_URL);

  // Create a wallet instance using the sender's private key and provider
  const wallet = new ethers.Wallet(SENDER_PRIVATE_KEY, provider);

  // Create a contract instance for the transferEther contract
  const contract = new ethers.Contract(CONTRACT_ADDRESS, ERC20_ABI, wallet);

  try {
      // Fetch sender's initial ETH balance
      const senderInitialBalance = await provider.getBalance(wallet.address);
      console.log("Sender initial ETH balance:", ethers.formatEther(senderInitialBalance));

      // Fetch recipient's initial ETH balance
      const recipientInitialBalance = await provider.getBalance(RECIPIENT_ADDRESS);
      console.log("Recipient initial ETH balance:", ethers.formatEther(recipientInitialBalance));

      // Convert Ether amount to wei (smallest unit of Ether)
      const transferAmountWei = ethers.parseEther("10"); // 10 ETH (adjust as needed)

      console.log(`Sending ${ethers.formatEther(transferAmountWei)} ETH to ${RECIPIENT_ADDRESS}...`);
      const tx = await contract.transferEther(RECIPIENT_ADDRESS, transferAmountWei, {
          value: transferAmountWei, // Pass Ether value for native transfers
          gasLimit: 100000 // Adjust gas limit if needed
      });

      console.log("Transaction sent. Waiting for confirmation...");
      const receipt = await tx.wait(); // Wait for transaction to be mined
      console.log("Transaction confirmed!");
      console.log("Transaction Hash:", receipt.hash);

      // Fetch sender's final ETH balance
      const senderFinalBalance = await provider.getBalance(wallet.address);
      console.log("Sender final ETH balance:", ethers.formatEther(senderFinalBalance));

      // Fetch recipient's final ETH balance
      const recipientFinalBalance = await provider.getBalance(RECIPIENT_ADDRESS);
      console.log("Recipient final ETH balance:", ethers.formatEther(recipientFinalBalance));
  } catch (error) {
      console.error("Error during transaction:", error);
  }
}


main();
