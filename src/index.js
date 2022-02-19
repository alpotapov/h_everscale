import React from 'react';
import ReactDOM from 'react-dom';
import { DAppProvider, ChainId } from '@usedapp/core';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import abis from './contracts/hardhat_contracts.json';

const localMulticallAddress = abis[31337].localhost.contracts.Multicall.address;

const config = {
  readOnlyChainId: ChainId.Ropsten,
  multicallAddresses: {
    [ChainId.Hardhat]: localMulticallAddress,
  },
};

ReactDOM.render(
  <React.StrictMode>
    <DAppProvider config={config}>
      <App />
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
