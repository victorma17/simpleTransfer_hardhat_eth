const { ethers } = require("ethers");

// Replace these with your actual ABI and contract address
const contractABI = [
    {
        "inputs": [],
        "name": "getCounter",
        "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "increment",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    }
];

// Replace with the actual deployed contract address of SimpleCounter
const contractAddress = "0xB590B92f1068B27510e346044a58d978829EA9A9";

// Define the WebSocket provider
const provider = new ethers.WebSocketProvider("ws://0.0.0.0:8546"); // Replace with your actual WebSocket RPC endpoint

async function main() {
    // Create a contract instance
    const simpleCounterContract = new ethers.Contract(contractAddress, contractABI, provider);

    try {
        // Call the getCounter function to get the current counter value
        const counterValue = await simpleCounterContract.getCounter();
        console.log("Current counter value:", counterValue.toString()); // Convert BigNumber to string for display
    } catch (error) {
        console.error("Error calling getCounter:", error);
    } finally {
        // Clean up WebSocket connection
        provider.destroy();
    }
}

main();
