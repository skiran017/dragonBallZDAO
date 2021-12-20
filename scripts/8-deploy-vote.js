import sdk from './1-initialize-sdk.js';

// Grab the app module address.
const appModule = sdk.getAppModule(
  '0xa14eA3B4A299b0e6dC985e2D2D49fA59dbCdBd85'
);

(async () => {
  try {
    const voteModule = await appModule.deployVoteModule({
      // Give your governance contract a name.
      name: "DragonBall-Z DAO's Epic Proposals",

      // This is the location of our governance token, our ERC-20 contract!
      votingTokenAddress: '0xE5e0Cf5ac0863E05847223376F65cf389f633e51',

      // After a proposal is created, when can members start voting?
      // For now, we set this to immediately.
      proposalStartWaitTimeInSeconds: 0,

      // How long do members have to vote on a proposal when it's created?
      // Here, we set it to 24 hours (86400 seconds)
      proposalVotingTimeInSeconds: 24 * 60 * 60,

      // Will explain more below.
      votingQuorumFraction: 0,

      // What's the minimum # of tokens a user needs to be allowed to create a proposal?

      // create a proposal.
      minimumNumberOfTokensNeededToPropose: '1000',
    });

    console.log(
      '✅ Successfully deployed vote module, address:',
      voteModule.address
    );
  } catch (err) {
    console.log('Failed to deploy vote module', err);
  }
})();
