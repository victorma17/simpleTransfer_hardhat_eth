const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("SimpleModule", (m) => {

  const simple = m.contract("SimpleCounter", [], {});

  return { simple };
});
