const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("SimpleTransfer", (m) => {

  const SimpleTransfer = m.contract("SimpleTransfer", [], {});

  return { SimpleTransfer };
});
