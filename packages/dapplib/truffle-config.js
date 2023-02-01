require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow frown ski strategy response sister code gentle light army gate'; 
let testAccounts = [
"0x8589230daa3cd0e0d9908ec54a696b64a17ea5c430c9944d9e56f2941c2817db",
"0x47ac96b7a9501c7567035710f22e3789a9a45a174d7896b8f77ce7cd1688b53b",
"0xb4adba8ef8eec0ff2de5d168503bc55c81535cb18fa75764395bf09fe5bf0ebb",
"0x0773961e149cee6633698598c1daa0144b3a6774f8e747059a0ffe3fc5c6e8e7",
"0x65201db903b4916b588302da52290a0b6bea6b3f1ae6f28d24a6fb6d95690336",
"0xc5fce4bd75853001cb2c245ea476131adc3af643c93a3d1da2e229cbd3ef8e08",
"0x933faedfb2880887e3ceebef219aa74eefbb6890a18354e697354d2c8ed1fe48",
"0x8e8e16281cb84198b523f24db4365ef968c28ceff5a373673c8efa84671b0aec",
"0x3fc4e237023f8cf79d704edc10120e054f7c7b0139f6aae0b6ee57d0761a675e",
"0x216a335349fa0126375f68253fff27bc6f106e2945e828d658f6361e08832793"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

