import { useContext, useState } from "react";
import Mneomonic from "./Mnemonic";
import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import { AppContext } from "../context/AppContext";


const GenMneomonic = () => {
    // const [mnemonic, setMnemoic] = useState(null)
    const {setMnemonic, mnemonic, rootSeed, setRootSeed} = useContext<any>(AppContext)


    const generateMniomonicHandeler = () => {
        const newMnemonic = generateMnemonic();
        setMnemonic(newMnemonic)
        // console.log("Generated Mnemonic:", newMnemonic);
        const seed = mnemonicToSeedSync(newMnemonic)
        setRootSeed(seed);
        console.log(seed.toString('hex'))
    }

    return ( <div className="w-full flex flex-col gap-y-5 justify-center items-center">
        <div className="flex w-full text-black font-bold justify-between items-center px-2 pr-6">
            <span>Generate you Mneomonic</span>
            <button onClick={generateMniomonicHandeler} className="text-white bg-black hover:bg-gray-700 transition-all ease-in-out px-5 py-2 rounded-lg">Generate</button>
        </div>
        <Mneomonic/>
    </div> );
}
 
export default GenMneomonic;