import React from 'react';
import {
  useEthers,
  shortenAddress,
  getChainName,
  ChainId,
} from '@usedapp/core';

import ConnectedIcon from './Connected.svg';
import ConnectIcon from './Connect.svg';

const chainId = parseInt(process.env.REACT_APP_NETWORK_ID, 10);
const connectionColors = {
  [ChainId.Hardhat]: 'bg-yellow-400 border-yellow-400',
  [ChainId.Ropsten]: 'bg-yellow-400 border-yellow-400',
  [ChainId.Polygon]: 'bg-emerald border-emerald',
};

const WalletConnection = () => {
  const {
    activateBrowserWallet,
    account,
    chainId: currentChainId,
  } = useEthers();
  const currentColor =
    account && chainId === currentChainId
      ? connectionColors[chainId]
      : 'bg-black border-black';

  return (
    <div className="flex flex-row justify-end">
      {account ? (
        <div className="flex flex-col items-center w-max">
          <div
            className={`flex flex-row space-x-6 rounded-3xl px-4 py-2 border-2 w-max ${currentColor}`}
          >
            <span className="text-white whitespace-nowrap">
              {chainId === currentChainId
                ? `Connected to ${getChainName(chainId)}`
                : 'Wrong Network'}
            </span>
            <img src={ConnectedIcon} alt="Connected" className="w-4" />
          </div>
          <p className="mt-2 text-silver">{shortenAddress(account)}</p>
        </div>
      ) : (
        <button
          type="button"
          className="btn flex flex-row space-x-6 rounded-3xl px-4 py-2 border-2 w-max"
          onClick={activateBrowserWallet}
        >
          <span className="text-white whitespace-nowrap">Connect wallet</span>
          <img src={ConnectIcon} alt="Connect" className="w-4" />
        </button>
      )}
    </div>
  );
};

WalletConnection.propTypes = {};

export default WalletConnection;
