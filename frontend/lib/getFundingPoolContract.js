import { ethers } from "ethers";
import FundingPool from "../artifacts/contracts/FundingPool.sol/FundingPool.json";

export const getFundingPoolContract = (providerOrSigner, contractAddress) => {
    return new ethers.Contract(contractAddress, FundingPool.abi, providerOrSigner);
};