// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Raniel is ERC20 {
    constructor(uint256 initialSupply) ERC20("Raniel", "NYT") { //
        _mint(msg.sender, initialSupply);
    }

    function generateTokens(address destination, uint256 amount) public { //generates tokens to the acc we want to add token to
        _mint(destination, amount);
    }
}