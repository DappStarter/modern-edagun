require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope kite bone tooth tissue razor muscle coconut install immense army gift'; 
let testAccounts = [
"0x7396ed622c2fee21c416fc875d187285ceb609858ec9b4a9114966455560b113",
"0xc389b91359b1b4216aa46321108b9235c0d2d8b32b52cdf0f0e84b12a3f6ac9a",
"0x3da28b76098326bafb167a1b5901c06f5d0c12e7eba1e5cce19db660705abe76",
"0x5cfa4b7442f0178367b81263fca8c2b3b56494765be65d97e59c50b6fc9a7a10",
"0x184bdf1c46362ac4b98df05957c9f00c149ec9e0940b99e916561855de2c6931",
"0x0ac849f116ebdad38f7748cdb0b29fdbc3d024267bc5a9db5c2df1b9a1e3a88c",
"0x64fccaca54f2376fba920bff9b6d28210a3955cf5befb1d3bfe8f215fe46ce07",
"0xb90cedcad31df399b3c285a728173116ed4ebdc76a7c64ddaf9c28e4190931f0",
"0xcfaff5705e707b9c7caa9a02cfc5b7103731df4345a28d621398b638d54f8094",
"0x738ca9d8300e2c73a1ebb11f0ba6b77465241dce48183ebfd97125d8379cc623"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

