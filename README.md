# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

** Go to check all the commands to install hardhat in .txt all dpendencies **   

0xaeF07Fe779e40E3800D7E617C084fE64B87f9aeF
0x4ba2c443e4180515d41c1b22b0798cea6f6cd1c6c84c6cfd650dbeb99e885d81

```shell
npm init -y
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node

rm -fr ignition/deployments/
npx hardhat clean
npx hardhat compile 

npx hardhat ignition deploy ./ignition/modules/SimpleTransfer.js --network besu
npx hardhat ignition deploy ./ignition/modules/SimpleCounter.js
```
