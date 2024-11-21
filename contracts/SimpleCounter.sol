// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.24;

contract SimpleCounter {
    uint256 public counter;

    constructor() {
        counter = 1;
    }

    function increment() public {
        counter++;
    }

    function getCounter() public view returns (uint256) {
        return counter;
    }
}
