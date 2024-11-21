const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("ERC20", (m) => {

  const ERC20 = m.contract("ERC20", [], {});

  return { ERC20 };
});
