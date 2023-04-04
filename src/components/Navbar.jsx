import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import adlunamCont from "../adlunamCont.json";
import { addressState, balanceState, UIState } from "../utilities/atom";

let adlunamContract;
const Navbar = () => {
  const [trunAddress, setTrunAddress] = useState(null);
  const [address, setAddress] = useRecoilState(addressState);
  const [accBalance, setAccBalance] = useState(0);
  const [showUI, setShowUI] = useRecoilState(UIState);
  const [balance, setBalance] = useRecoilState(balanceState);
  const { ethereum } = window;

  const connectContract = () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    // This address is the address of the contract which will mint the NFTs
    adlunamContract = new ethers.Contract(
      import.meta.env.VITE_CONTRACT_ADDRESS,
      adlunamCont,
      signer
    );
  };

  const handleOnClick = () => {
    let account;
    ethereum
      .request({ method: "eth_requestAccounts" })
      .then((accounts) => {
        setShowUI(true);
        account = accounts[0];
        setAddress(account);
        let truncatedAddress =
          account.substring(0, 5) + "..." + account.substring(38);
        setTrunAddress(truncatedAddress);
        ethereum
          .request({ method: "eth_getBalance", params: [account, "latest"] })
          .then((result) => {
            let wei = parseInt(result, 16);
            let balance = wei / 10 ** 18;
            let resBalance = parseFloat(balance).toFixed(3);
            setAccBalance(resBalance);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    connectContract();
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between border-b border-b-black bg-gray-200 px-6 py-4">
        <p className="text-3xl font-bold">Redeem $LUNAM</p>
        {showUI ? (
          <div className="space-x-4">
            <span className="rounded-lg border border-black px-3 py-2 text-lg font-medium">
              {accBalance} ETH
            </span>
            <span className="rounded-lg border border-black px-4 py-2 text-lg font-medium">
              {trunAddress}
            </span>
          </div>
        ) : (
          <button
            onClick={() => {
              handleOnClick();
            }}
            className="rounded-lg border border-black px-4 py-2 text-lg font-medium hover:underline"
          >
            Connect to Metamask
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
export { adlunamContract };
