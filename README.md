# Polynom App

## Calculating Mainnet deployment price

```js
const { ethers } = require('ethers');
const { BigNumber } = ethers;
const { formatUnits } = ethers.utils;
const gasPrice = 60;
const gasUsed = 2800117;
const oneGwei = BigNumber.from('1000000000');
formatUnits(oneGwei.mul(gasPrice).mul(gasUsed));
```
