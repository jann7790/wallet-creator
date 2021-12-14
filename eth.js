const eth = require('ethers')
const provider = require('eth-provider')
async function main(){
    for(i=0;i<500;i++)
    { 
        var wallet = await eth.Wallet.createRandom();
        console.log(wallet.address, ", ",wallet.privateKey, ", ", wallet.mnemonic.phrase)
    }
     
}
main()
