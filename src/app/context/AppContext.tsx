'use client'
import { createContext, useState } from "react";

type mnemonicContextType = {
    mnemonic:any,
    setMnemonic:any,
    rootSeed:any,
    setRootSeed:any,
    totalAccount:any,
    setTotalAccount:any
}

export const AppContext = createContext<mnemonicContextType | undefined>(undefined)

const AppContextProvider = ({children}:any) => {

    const [mnemonic, setMnemonic] = useState<any>(null)
    const [rootSeed, setRootSeed] = useState<any>(null)
    const [totalAccount, setTotalAccount] = useState<number>(0);


    const value:any = {
        mnemonic,
        setMnemonic,
        rootSeed,
        setRootSeed,
        totalAccount,
        setTotalAccount
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;