import { ethers } from "ethers";
import FundingPool from "../artifacts/contracts/FundingPool.sol/FundingPool.json";

const CONTRACT_ADDRESS = "0x214D48a84ab5b9F9babdd81d9A529F6842D5dB88"; // your latest deployed address

export const getFundingPoolContract = async (signerOrProvider) => {
    return new ethers.Contract(CONTRACT_ADDRESS, FundingPool.abi, signerOrProvider);
};