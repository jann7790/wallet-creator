const {Keypair} = require("@solana/web3.js");
const {decode, encode} = require("base58-universal");

//const input3 = '';
//const decoded3 = decode(input3);
//console.log(decoded3);
let secretKey = decoded3

let keypair = Keypair.fromSecretKey(secretKey);
console.log(keypair.publicKey.toString());
for (let index = 0; index < 10000; index++) {
  keypair = Keypair.generate();
  console.log(keypair.publicKey.toString(), encode(keypair.secretKey));
    
}

