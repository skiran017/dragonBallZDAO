import sdk from './1-initialize-sdk.js';

// In order to deploy the new contract we need our old friend the app module again.
const app = sdk.getAppModule('0xa14eA3B4A299b0e6dC985e2D2D49fA59dbCdBd85');

(async () => {
  try {
    // Deploy a standard ERC-20 contract.
    const tokenModule = await app.deployTokenModule({
      // What's your token's name? Ex. "Ethereum"
      name: 'DragonBall Z DAO Governance Token',
      // What's your token's symbol? Ex. "ETH"
      symbol: 'ZENI',
    });
    console.log(
      '✅ Successfully deployed token module, address:',
      tokenModule.address
    );
  } catch (error) {
    console.error('failed to deploy token module', error);
  }
})();
