const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const balance = await deployer.provider.getBalance(deployer.address);
    console.log("Account balance:", ethers.formatEther(balance), "ETH");

    const daoTreasury = "0xdeA6E1591D22e4670B9a8c169492E56E6D95682a";
    const FundingPool = await ethers.getContractFactory("FundingPool");
    const fundingPool = await FundingPool.deploy(daoTreasury);

    await fundingPool.waitForDeployment();
    console.log("FundingPool deployed at:", await fundingPool.getAddress());
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});