const { ethers } = require("hardhat");
require("dotenv").config();

const deployNFTopia = async (deployerAddress) => {
  const deployer = await ethers.getSigner(deployerAddress);

  const NFTopia = await ethers.getContractFactory("NFTopia");
  const nftopia = await NFTopia.connect(deployer).deploy();

  await nftopia.deployed();

  console.log(
    `Successfully deployed NFTopia contract at address: ${nftopia.address}`
  );
  return nftopia.address;
};

const main = async () => {
  const [deployer] = await ethers.getSigners();
  await deployNFTopia(deployer.address);
};

main()
  .then(() => {
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
  });

// deploys {
//   1: 0xe0B621f90D0bdC62ecF02e410d16F4179Acd0399
//   2: 0x52cd47068E38e9333b782B8A076F338e2303800F
// }
