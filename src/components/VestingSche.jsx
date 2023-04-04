import React from "react";
import { useRecoilState } from "recoil";
import {
  addressState,
  mintFailed,
  mintLoadingState,
  mintState,
  tokenIdState,
  UIState,
} from "../utilities/atom";
import { vestingData } from "../utilities/vesting";
import { adlunamContract } from "./Navbar";

const VestingSche = () => {
  const [showUI, setShowUI] = useRecoilState(UIState);
  const [tokenId, setTokenId] = useRecoilState(tokenIdState);
  const [minted, setMinted] = useRecoilState(mintState);
  const [mintFail, setMintFail] = useRecoilState(mintFailed);
  const [mintLoading, setMintLoading] = useRecoilState(mintLoadingState);
  const [address, setAddress] = useRecoilState(addressState);

  const mint = async (tokenId, address) => {
    try {
      setMintLoading(true);
      const tx = await adlunamContract.mintTokens(
        tokenId,
        import.meta.env.VITE_LUNAM_CONTRACT_ADDRESS,
        {
          gasLimit: 5000000,
        }
      );
      await tx.wait();
      console.log(tx);
      setMintLoading(false);
      setMinted(true);
    } catch (err) {
      setMintLoading(false);
      setMintFail(true);
      console.log(err);
    }
  };

  return (
    <div className="ml-4 h-[80vh] rounded-xl border border-black p-8">
      <p className="text-3xl font-semibold">Your Vesting Schedule :</p>
      {showUI ? (
        <div
          onClick={() => {
            mint(tokenId, address);
          }}
          className="mt-3 max-h-[60vh] overflow-y-scroll text-xl hover:cursor-pointer"
        >
          {vestingData[`NFT${"" + tokenId}`].map((item) => {
            return (
              <div key={item.month} className="mt-6 flex">
                <span>{item.month}</span>
                <span className="mx-3">:</span>
                <span>{item.amount}</span>
                <span className="ml-2">LUNAM</span>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="mt-20 text-center text-2xl">Please connect your wallet</p>
      )}
    </div>
  );
};

export default VestingSche;
