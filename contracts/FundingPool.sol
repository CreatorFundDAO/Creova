// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract FundingPool is ReentrancyGuard, Ownable, AccessControl {
    enum Status { Pending, Approved, Rejected }

    bytes32 public constant VOTER_ROLE = keccak256("VOTER_ROLE");

    struct Milestone {
        string description;
        uint256 amount;
        bool completed;
    }

    struct Campaign {
        string name; // ✅ Added clearly
        address creator;
        uint256 fundingGoal;
        uint256 deadline;
        uint256 amountRaised;
        Status status;
        bool withdrawalsPaused;
        Milestone[] milestones;
        uint256 withdrawnAmount;
    }

    uint256 public campaignIds = 0;
    mapping(uint256 => Campaign) public campaigns;
    mapping(address => mapping(uint256 => uint256)) public userContributions;
    mapping(address => bool) public verifiedCreators;
    address public daoTreasury;

    mapping(uint256 => uint256) public campaignVotes;
    mapping(uint256 => mapping(address => bool)) public hasVoted;

    event CampaignCreated(uint256 indexed campaignId, address indexed creator, string name, uint256 fundingGoal, uint256 deadline);
    event CampaignStatusUpdated(uint256 indexed campaignId, Status status);
    event MilestoneAdded(uint256 indexed campaignId, string description, uint256 amount);
    event FundsWithdrawn(uint256 indexed campaignId, address indexed creator, uint256 amount);
    event VoteCast(uint256 indexed campaignId, address indexed voter);

    constructor(address _daoTreasury) Ownable(msg.sender) {
        require(_daoTreasury != address(0), "DAO Treasury cannot be zero");
        daoTreasury = _daoTreasury;
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    function getDaoTreasury() external view returns (address) {
        return daoTreasury;
    }

    function createCampaign(
        string memory _name, // ✅ Clearly added
        uint256 _fundingGoal,
        uint256 _durationInSeconds,
        string[] memory _milestoneDescriptions,
        uint256[] memory _milestoneAmounts
    ) external returns (uint256) {
        require(verifiedCreators[msg.sender], "Not verified creator");
        require(_milestoneDescriptions.length == _milestoneAmounts.length, "Milestone arrays mismatch");

        campaignIds++;
        Campaign storage campaign = campaigns[campaignIds];
        campaign.name = _name; // ✅ Clearly store the name
        campaign.creator = msg.sender;
        campaign.fundingGoal = _fundingGoal;
        campaign.deadline = block.timestamp + _durationInSeconds;
        campaign.status = Status.Pending;

        for (uint i = 0; i < _milestoneDescriptions.length; i++) {
            campaign.milestones.push(Milestone({
                description: _milestoneDescriptions[i],
                amount: _milestoneAmounts[i],
                completed: false
            }));
            emit MilestoneAdded(campaignIds, _milestoneDescriptions[i], _milestoneAmounts[i]);
        }

        emit CampaignCreated(campaignIds, msg.sender, _name, _fundingGoal, campaign.deadline);
        return campaignIds;
    }

    function updateCampaignStatus(uint256 _campaignId, Status _status) external onlyOwner {
        campaigns[_campaignId].status = _status;
        emit CampaignStatusUpdated(_campaignId, _status);
    }

    function setVerifiedCreator(address _creator, bool _isVerified) external onlyOwner {
        verifiedCreators[_creator] = _isVerified;
    }

    function getMilestones(uint256 _campaignId) external view returns (Milestone[] memory) {
        return campaigns[_campaignId].milestones;
    }

    function getCampaignStatus(uint256 _campaignId) external view returns (Status) {
        return campaigns[_campaignId].status;
    }

    function withdrawFunds(uint256 _campaignId) external nonReentrant {
        Campaign storage campaign = campaigns[_campaignId];
        require(campaign.creator == msg.sender, "Only creator can withdraw");
        require(campaign.status == Status.Approved, "Campaign not approved");
        require(!campaign.withdrawalsPaused, "Withdrawals paused");

        uint256 totalAllowedWithdrawal = 0;

        for (uint i = 0; i < campaign.milestones.length; i++) {
            if (campaign.milestones[i].completed) {
                totalAllowedWithdrawal += campaign.milestones[i].amount;
            }
        }

        require(totalAllowedWithdrawal > campaign.withdrawnAmount, "Nothing to withdraw");
        uint256 withdrawable = totalAllowedWithdrawal - campaign.withdrawnAmount;

        campaign.withdrawnAmount += withdrawable;
        payable(msg.sender).transfer(withdrawable);

        emit FundsWithdrawn(_campaignId, msg.sender, withdrawable);
    }

    function voteOnCampaign(uint256 campaignId) external {
        require(hasRole(VOTER_ROLE, msg.sender), "Not authorized to vote");
        require(!hasVoted[campaignId][msg.sender], "Already voted");
        campaignVotes[campaignId] += 1;
        hasVoted[campaignId][msg.sender] = true;

        emit VoteCast(campaignId, msg.sender);
    }

    function addVoter(address voter) external onlyOwner {
        grantRole(VOTER_ROLE, voter);
    }

    function removeVoter(address voter) external onlyOwner {
        revokeRole(VOTER_ROLE, voter);
    }

    receive() external payable {}
}