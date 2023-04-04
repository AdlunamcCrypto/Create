import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import {
  addressState,
  balanceState,
  tokenIdState,
  UIState,
} from "../utilities/atom";

const Nft = () => {
  const [address, setAddress] = useRecoilState(addressState);
  const [showUI, setShowUI] = useRecoilState(UIState);
  const [tokenId, setTokenId] = useRecoilState(tokenIdState);
  const [preview, setPreview] = useState(null);
  const [balance, setBalance] = useRecoilState(balanceState);
  // you need to have alchemy api key to fetch the NFTs from the user's wallet
  const baseURL = `https://eth-goerli.g.alchemy.com/v2/${
    import.meta.env.VITE_ALCHEMY_API_KEY
  }`;
  const url = `${baseURL}/getNFTs/?owner=${address}`;
  const config = {
    method: "get",
    url: url,
  };
  const fetchNFTs = async () => {
    try {
      const response = await axios(config);
      console.log(response.data);
      response.data.ownedNfts.map((nft) => {
        if (
          // This the contract address of the all the adlunam NFTs
          nft.contract.address === import.meta.env.VITE_NFT_CONTRACT_ADDRESS
        ) {
          const token = parseInt(nft.id.tokenId.slice(-2));
          setTokenId(token);
          setPreview(nft.media[0].gateway);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNFTs();
  }, [address]);

  return (
    <div className="mr-4 flex h-[80vh] flex-col items-center justify-between rounded-xl border border-black p-8 text-center">
      <div className="h-[80vh] w-full rounded-xl border border-black">
        {showUI ? (
          <img
            src={preview}
            alt="NFT"
            className="mx-auto mt-14 h-[60vh] object-cover"
          />
        ) : null}
      </div>
    </div>
  );
};

export default Nft;
