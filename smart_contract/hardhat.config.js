require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/rbBcvcSEFrNaSJ8Rqp9na930QR0_cnaf',
      accounts: ['4143f5dbcf7f6ab494383ce76bdf7bb9719649c7c43237236af1aa2584fc9dec'],
    },
  },
};