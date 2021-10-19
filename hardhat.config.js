require("@nomiclabs/hardhat-waffle");
require('./tasks/celoDeploy')

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    alfajores: {
      url: 'https://alfajores-forno.celo-testnet.org',
      network_id: 44787
    }
  }
};
