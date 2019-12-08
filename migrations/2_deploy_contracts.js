var Voting = artifacts.require("./Voting.sol");

module.exports = function(deployer) {
  // 1000 is the total number of tokens for sale and the price of each token is set to 0.1 ether.
  deployer.deploy(Voting, 1000, web3.toWei('0.1', 'ether'), ['Rama', 'Nick', 'Jose'], {gas: 4700000});
  /*
  deployer.deploy(Voting, ['Rama', 'Nick', 'Jose'], {gas: 6700000});
  The third argument is a hash where we specify the gas required to deploy
  our code. The gas amount varies depending on the size of your contract.
  */
};
