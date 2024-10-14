import nacl from "tweetnacl"
import { derivePath } from "ed25519-hd-key"
import { Keypair } from "@solana/web3.js";

// const {rootSeed, totalAccount} = useContext(AppContext)

export const generateSolanaAccount = (rootSeed:any, totalAccount:any) => {
    const path = `m/44'/501'/${totalAccount}'/0'`; // This is the derivation path
    console.log(path)
    const derivedSeed = derivePath(path, rootSeed.toString("hex")).key;
    const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
    console.log(Buffer.from(secret).toString('hex'))
    console.log(Keypair.fromSecretKey(secret).publicKey.toBase58());
    // console.log(Keypair.fromSecretKey(secret).privateKey.toBase58());
    return {
        publicKey: `${Keypair.fromSecretKey(secret).publicKey.toBase58()}`,
        privateKey: `${Buffer.from(secret).toString('hex')}`
    }
}