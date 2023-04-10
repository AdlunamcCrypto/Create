// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.17;
import "./Lunam.sol";

interface INFT {
    function ownerOf(uint256 tokenId) external returns(address);
}

contract Redeem {
    // whether user has redeemed for each month
    struct monthinfo {    
        bool m1;
        bool m2;
        bool m3;
        bool m4;
        bool m5;
        bool m6;
        bool m7;
        bool m8;
        bool m9;
        bool m10;
        bool m11;
        bool m12;
        bool m13;
    }

    // tokenid --> each month data
    mapping(uint256 => monthinfo) private userinfoNFT;
    uint256 private TGE;

    constructor() {
        TGE = block.timestamp;
    }

    // mint tokens 
    function mintTokens(uint256 _tokenId, address _LUNAM) external {
        require(INFT(0x2cdC15b84b1Db584c7df1FEd7cA8fFBe4b05F338).ownerOf(_tokenId) == msg.sender, "You do not have this token");
        uint256 currentEpochTokens = balanceToSend(_tokenId);
        Lunam(_LUNAM).mint(msg.sender, currentEpochTokens);
    }

    function balanceToSend(uint256 _tokenId) internal returns(uint256 amount) {

        uint256 currentmonth = block.timestamp;

        if (currentmonth > TGE ) {
            require(!userinfoNFT[_tokenId].m1, "already redeemed");
            userinfoNFT[_tokenId].m1 = true;
            amount = amount + monthBalance(_tokenId);
        } 

        if (currentmonth > TGE + 30 days ) {
            require(!userinfoNFT[_tokenId].m2, "already redeemed");
            userinfoNFT[_tokenId].m2 = true;
            amount = amount + monthBalance(_tokenId);
        }

        if (currentmonth > TGE + 2*30 days ) {
            require(!userinfoNFT[_tokenId].m3, "already redeemed");
            userinfoNFT[_tokenId].m3 = true;
            amount = amount + monthBalance(_tokenId);
        }

        if (currentmonth > TGE + 3*30 days ) {
            require(!userinfoNFT[_tokenId].m4, "already redeemed");
            userinfoNFT[_tokenId].m4 = true;
            amount = amount + monthBalance(_tokenId);
        }

        if (currentmonth > TGE + 4*30 days ) {
            require(!userinfoNFT[_tokenId].m5, "already redeemed");
            userinfoNFT[_tokenId].m5 = true;
            amount = amount + monthBalance(_tokenId);
        }

        if (currentmonth > TGE + 5*30 days) {
            require(!userinfoNFT[_tokenId].m6, "already redeemed");
            userinfoNFT[_tokenId].m6 = true;
            amount = amount + monthBalance(_tokenId);
        }

        if (currentmonth > TGE + 6*30 days ) {
            require(!userinfoNFT[_tokenId].m7, "already redeemed");
            userinfoNFT[_tokenId].m7 = true;
            amount = amount + monthBalance(_tokenId);
        }

        if (currentmonth > TGE + 7*30 days ) {
            require(!userinfoNFT[_tokenId].m8, "already redeemed");
            userinfoNFT[_tokenId].m8 = true;
            amount = amount + monthBalance(_tokenId);
        }

        if (currentmonth > TGE + 8*30 days ) {
            require(!userinfoNFT[_tokenId].m9, "already redeemed");
            userinfoNFT[_tokenId].m9 = true;
            amount = amount + monthBalance(_tokenId);
        }

        if (currentmonth > TGE + 9*30 days ) {
            require(!userinfoNFT[_tokenId].m10, "already redeemed");
            userinfoNFT[_tokenId].m10 = true;
            amount = amount + monthBalance(_tokenId);
        }

        if (currentmonth > TGE + 10*30 days ) {
            require(!userinfoNFT[_tokenId].m11, "already redeemed");
            userinfoNFT[_tokenId].m11 = true;
            amount = amount + monthBalance(_tokenId);
        }

        if (_tokenId == 1 || _tokenId ==2) {

            if (currentmonth > TGE + 11*30 days ) {
                require(!userinfoNFT[_tokenId].m12, "already redeemed");
                userinfoNFT[_tokenId].m12 = true;
                amount = amount + monthBalance(_tokenId);
            }

            if (currentmonth > TGE + 12*30 days ) {
                require(!userinfoNFT[_tokenId].m13, "already redeemed");
                userinfoNFT[_tokenId].m13 = true;
                amount = amount + monthBalance(_tokenId);
            }
            
        }

       
    }

    function monthBalance(uint256 _tokenId) internal pure returns (uint256 monthbal){
    
        if (_tokenId == 1) {        
            return 395833.333* 10**18;
        }
        else if (_tokenId == 2 ) {
            return 39583.333* 10**18;
        }
        else if (_tokenId == 3 ) {
            return 138888.889* 10**18;
        }
        else if (_tokenId == 4 ) {
            return 111111.111* 10**18;
        }
        else if (_tokenId == 5 ) {
            return 55555.556* 10**18;
        }
        else if (_tokenId == 6 ) {
            return  83333.333* 10**18;
        }
        else if (_tokenId == 7 ) {
            return  38888.889* 10**18;
        }
        else if (_tokenId == 8 ) {
            return 55555.556* 10**18;
        }
        else if (_tokenId == 9 ) {
            return  27777.778* 10**18;
        }
        else if (_tokenId == 10 ) {
            return  38888.889* 10**18;
        }
        else if (_tokenId == 11 ) {
            return  2777.778* 10**18;
        }
        else if (_tokenId == 12 ) {
            return  38888.889* 10**18;
        }
        else if (_tokenId == 13 ) {
            return  8333.333* 10**18;
        }
        else if (_tokenId == 14 ) {
            return  69444.444* 10**18;
        }
        else if (_tokenId == 15 ) {
            return  16666.667* 10**18;
        }
        else if (_tokenId == 16 ) {
            return  2777.778* 10**18;
        }
        else if (_tokenId == 17 ) {
            return 5555.556* 10**18;
        }
        else if (_tokenId == 18 ) {
            return  27777.778* 10**18;
        }
        else if (_tokenId == 19 ) {
            return  6388.889* 10**18;
        }
        else if (_tokenId == 20 ) {
            return  55555.556* 10**18;
        }
        else if (_tokenId == 21 ) {
            return  555.556* 10**18;
        }
        else if (_tokenId == 22 ) {
            return  16666.667* 10**18;
        }
        else if (_tokenId == 23 ) {
            return  83333.333* 10**18;
        }
        else if (_tokenId == 24 ) {
            return  3888.889* 10**18;
        }
        else if (_tokenId == 25 ) {
            return  8333.333* 10**18;
        }
        else if (_tokenId == 26 ) {
            return  25000.000* 10**18;
        }
        else if (_tokenId == 27 ) {
            return  41666.667* 10**18;
        }
        else if (_tokenId == 28 ) {
            return  11111.111* 10**18;
        }
        else if (_tokenId == 29 ) {
            return  8333.333* 10**18;
        }
        else if (_tokenId == 30 ) {
            return 388.889* 10**18;
        }
        else if (_tokenId == 31 ) {
            return  2777.778* 10**18;
        }
        else if (_tokenId == 32 ) {
            return 11111.111* 10**18;
        }
        else if (_tokenId == 33 ) {
            return 27777.778* 10**18;
        }
    }

}