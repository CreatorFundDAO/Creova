import { ethers } from "ethers";
import FundingPoolABI from "./FundingPool.json";

export const getFundingPoolContract = (signerOrProvider, contractAddress) => {
  return new ethers.Contract(contractAddress, FundingPoolABI.abi, signerOrProvider);
};