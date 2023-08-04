require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
const { SEPOLIA_RPC_URL, PRIVATE_KEY } = process.env;
module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: SEPOLIA_RPC_URL,
      chainId: 11155111,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};
