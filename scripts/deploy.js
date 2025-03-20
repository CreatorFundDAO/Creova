const fs = require("fs");
const path = require("path");
const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("🚀 Deploying contracts with the account:", deployer.address);
  
  const balance = await hre.ethers.provider.getBalance(deployer.address);
  console.log("💰 Account balance:", hre.ethers.formatEther(balance), "ETH");

  // DAO Treasury Address
  const daoTreasuryAddress = "0xc225947942dB485c107dEDD6E476eE69ECA9Df4a";

  // Get Contract Factory
  const FundingPool = await hre.ethers.getContractFactory("FundingPool");

  // Get Current Nonce
  const nonce = await hre.ethers.provider.getTransactionCount(deployer.address, "latest");
  console.log("🔢 Using nonce:", nonce);

  // Deploy Contract
  const fundingPool = await FundingPool.deploy(daoTreasuryAddress, {
    gasLimit: 4000000,
    gasPrice: hre.ethers.parseUnits("30", "gwei"),
    nonce: nonce
  });

  await fundingPool.waitForDeployment();
  const contractAddress = await fundingPool.getAddress();

  console.log("✅ FundingPool deployed at:", contractAddress);

  // Save Constructor Arguments for Verification
  const args = `module.exports = [ "${daoTreasuryAddress}" ];`;
  fs.writeFileSync("constructorArgs.js", args);
  console.log("📂 Constructor arguments saved to constructorArgs.js");

  // Update .env.local in Frontend
  const envPath = path.join(__dirname, "../frontend/.env.local"); // Adjust if needed
  const envContent = `NEXT_PUBLIC_FUNDINGPOOL_ADDRESS=${contractAddress}\n`;
  fs.writeFileSync(envPath, envContent);
  console.log("📂 .env.local updated with new contract address!");

  // Update getFundingPoolContract.js in Frontend
  const contractPath = path.join(__dirname, "../frontend/lib/getFundingPoolContract.js");
  const contractCode = `
import { ethers } from "ethers";
import FundingPool from "../utils/FundingPool.json"; // Ensure ABI is loaded

const CONTRACT_ADDRESS = "${contractAddress}"; // ✅ Auto-updated on deployment

export const getFundingPoolContract = (providerOrSigner) => {
    return new ethers.Contract(CONTRACT_ADDRESS, FundingPool.abi, providerOrSigner);
};
`;
  fs.writeFileSync(contractPath, contractCode);
  console.log("📂 getFundingPoolContract.js updated with new contract address!");

  // Copy ABI to Frontend
  const abiSource = path.join(__dirname, "../artifacts/contracts/FundingPool.sol/FundingPool.json");
  const abiDestination = path.join(__dirname, "../frontend/utils/FundingPool.json");

  if (fs.existsSync(abiSource)) {
    fs.copyFileSync(abiSource, abiDestination);
    console.log("📂 ABI copied to frontend/utils/FundingPool.json!");
  } else {
    console.error("❌ ABI source file not found at:", abiSource);
    console.log("ℹ️ Please run 'npx hardhat compile' to generate the ABI.");
  }

  console.log("🚀 Deployment complete! Use the contract address to verify it.");
}

main().catch((error) => {
  console.error("❌ Deployment failed:", error);
  process.exit(1);
});