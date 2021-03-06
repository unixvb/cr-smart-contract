// SPDX-License-Identifier: MIT
pragma solidity ^0.5.0;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

contract PetToken is ERC20{
    string public name = "PetToken";
    string public symbol = "PTT";
    uint8 public decimals = 2;
    uint public INITIAL_SUPPLY = 666;

    constructor() public {
        _mint(msg.sender, INITIAL_SUPPLY);
    }
}
