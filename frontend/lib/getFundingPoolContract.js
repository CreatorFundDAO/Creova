
import { ethers } from "ethers";
import FundingPool from "../utils/FundingPool.json"; // Ensure ABI is loaded

const CONTRACT_ADDRESS = "0x3E58b2F2b52cF5b2CFBd500BEd607caDa9642f24"; // ✅ Auto-updated on deployment

export const getFundingPoolContract = (providerOrSigner) => {
    return new ethers.Contract(CONTRACT_ADDRESS, FundingPool.abi, providerOrSigner);
};
