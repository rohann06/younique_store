pragma solidity ^0.6.0;

contract Treasury {
    address public owner;
    mapping(address => uint256) public balances;
    mapping(address => bool) public delivered;

    constructor() public {
        owner = msg.sender;
    }

    function payment() public payable {
        require(msg.value > 0, "No value sent");
        balances[msg.sender] += msg.value;
    }

    function withdraw(uint amount, address payable reciever) public {
        require(msg.sender == owner, "Only owner can withdraw");
        require(amount <= address(this).balance, "Insufficient balance");
        reciever.transfer(amount);
    }

    function updateDelivered(address _address) public {
        require(msg.sender == owner, "Only owner can update");
        delivered[_address] = true;
    }
}