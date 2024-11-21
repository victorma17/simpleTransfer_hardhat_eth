require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    besu: {
      url: "http://0.0.0.0:8545",
      accounts: [`0x4ba2c443e4180515d41c1b22b0798cea6f6cd1c6c84c6cfd650dbeb99e885d81`],
      gasPrice: 0,
      gas: 9007199254740990,
      timeout: 100000
    }
  }
};
