// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract SimpleTransfer {
    // Event to log transfers
    event Transfer(address indexed sender, address indexed recipient, uint256 amount);

    // Function to transfer Ether by specifying the amount as a parameter
    function transferEther(address payable recipient, uint256 amount) public payable {
        require(amount > 0, "Amount must be greater than 0");
        require(address(this).balance >= amount, "Insufficient contract balance");

        recipient.transfer(amount);

        // Emit transfer event
        emit Transfer(msg.sender, recipient, amount);
    }

    // Fallback function to accept Ether into the contract
    receive() external payable {}
}
