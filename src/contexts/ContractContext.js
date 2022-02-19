import { ethers } from 'ethers';
import artifacts from '../contracts/hardhat_contracts.json';
import polyPool from '../contracts/ERC20PolyPool.json';
import ERC20ABI from '../web3utilities/interfaces/ERC20.json';

const chainNames = {
  1: 'mainnet',
  3: 'ropsten',
  137: 'matic',
  31337: 'localhost',
};

const defaultNetworkId = 31337;
const defaultNetworkName = 'localhost';
const { contracts } = artifacts[defaultNetworkId][defaultNetworkName];

const polynomInterface = new ethers.utils.Interface(contracts.Polynom.abi);
const polypoolInterface = new ethers.utils.Interface(polyPool.abi);
const routerInterface = new ethers.utils.Interface(contracts.Router.abi);
const erc20Interface = new ethers.utils.Interface(ERC20ABI);

export const abis = {
  polynom: {
    abi: contracts.Polynom.abi,
    interface: polynomInterface,
  },
  polypool: {
    abi: polyPool.abi,
    interface: polypoolInterface,
  },
  router: {
    abi: contracts.Router.abi,
    interface: routerInterface,
  },
  plnm: {
    abi: ERC20ABI,
  },
  erc20: {
    interface: erc20Interface,
  },
};

export const getContracts = () => {
  const chainId = process.env.REACT_APP_NETWORK_ID;
  const chainName = chainNames[chainId];

  const polynom = artifacts[chainId][chainName].contracts.Polynom;
  const router = artifacts[chainId][chainName].contracts.Router;
  const plnm = artifacts[chainId][chainName].contracts.PLNM;

  return {
    polynom: {
      address: polynom.address,
    },
    router: {
      address: router.address,
    },
    plnm: {
      address: plnm.address,
    },
  };
};
