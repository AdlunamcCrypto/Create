import { useRecoilState } from "recoil";
import Navbar from "./components/Navbar";
import Nft from "./components/Nft";
import VestingSche from "./components/VestingSche";
import { mintFailed, mintLoadingState, mintState } from "./utilities/atom";

function App() {
  const [minted, setMinted] = useRecoilState(mintState);
  const [mintFail, setMintFail] = useRecoilState(mintFailed);
  const [mintLoading, setMintLoading] = useRecoilState(mintLoadingState);
  return (
    <div>
      <Navbar />
      <div
        className={`${
          minted || mintFail || mintLoading
            ? "absolute top-0 left-0 z-10 flex h-screen w-screen items-center justify-center blur-md [&>*]:w-1/2"
            : "mx-8 mt-7 flex items-center justify-center [&>*]:w-1/2"
        }`}
      >
        <Nft />
        <VestingSche />
      </div>
      {minted && (
        <div className="absolute top-1/2 left-1/2  z-20 -translate-x-1/2 -translate-y-1/2 transform rounded-lg border border-black bg-white px-4 py-2 text-center text-lg font-medium">
          <p className="my-4">
            Successfully transferred the tokens to your wallet
          </p>
          <button
            className="my-2 rounded-lg bg-black px-4 py-1.5 text-white"
            onClick={() => setMinted(false)}
          >
            Close
          </button>
        </div>
      )}
      {mintFail && (
        <div className="absolute top-1/2 left-1/2  z-20 -translate-x-1/2 -translate-y-1/2 transform rounded-lg border border-black bg-white px-4 py-2 text-center text-lg font-medium tracking-widest">
          <p className="my-4">Transaction Failed</p>
          <button
            className="my-2 rounded-lg bg-red-500 px-4 py-1.5 text-white"
            onClick={() => setMintFail(false)}
          >
            Close
          </button>
        </div>
      )}
      {mintLoading && (
        <div className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 transform rounded-lg border border-black bg-white px-4 py-2 text-center text-lg font-medium tracking-widest">
          <p className="mt-3">Transferring...</p>
          <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"></img>
        </div>
      )}
    </div>
  );
}

export default App;
