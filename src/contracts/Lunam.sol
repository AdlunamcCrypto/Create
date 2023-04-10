// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.16;
import "openzeppelin-contracts/token/ERC20/ERC20.sol";
contract Lunam is ERC20 {
    constructor() ERC20("Lunam", "LNM") {
        _mint(0xfa5CC6Ce003e1e35CFaBAFe2Cc328d9a81DC4f02, 1460528* 10**18);
    }
    function mint(address sender, uint256 amount) external {
        _mint(sender, amount);
    }
}