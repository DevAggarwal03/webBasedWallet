'use client'
import { useState, useContext } from 'react';
import { AppContext } from './context/AppContext'; // Assuming these are imported correctly
import GenMneomonic from './components/GenMneomonic';
import NavBar from './components/NavBar';
import { generateSolanaAccount } from './lib/helperFunctions';
import { Buffer } from 'buffer';

window.Buffer = Buffer;

function Home() {
  const [accounts, setAccounts] = useState<any[]>([]);
  const { mnemonic, setTotalAccount, totalAccount, rootSeed } = useContext<any>(AppContext);

  const addAccountHandler = () => {
    console.log(`account added`);
    setTotalAccount((prev: number) => prev + 1);

    const { publicKey, privateKey } = generateSolanaAccount(rootSeed, totalAccount);

    setAccounts((prev: any[]) => [
      ...prev,
      {
        publicKey,
        privateKey
      }
    ]);
  };

  return (
    <div className="text-white pb-9 flex flex-col bg-black min-h-screen gap-y-11 w-full m-0 p-0 text-2xl">
      <NavBar />
      <div className="flex flex-col gap-y-4 w-full justify-center items-center">
        <div className="flex gap-y-4 w-10/12 bg-gray-500 flex-col justify-center py-8 items-center rounded-lg">
          <GenMneomonic />
        </div>
        <button
          className={`bg-orange-800 px-4 py-2 rounded-lg font-bold hover:bg-orange-700 ${
            mnemonic != null ? "block" : "hidden"
          }`}
          onClick={addAccountHandler}
        >
          Add account
        </button>
        <div className='flex flex-col gap-y-3'>
          {accounts.map((acc: any, index:number) => {
            return (
              <div className='flex flex-col bg-gray-500 px-7 py-2 rounded-xl text-sm gap-y-2 justify-center'>
                <div className='text-2xl text-orange-950 font-sans'>
                  Accout:{index}
                </div>
                <div className='flex flex-col justify-center gap-y-1'>
                  <span>{acc.publicKey}</span>
                  <span>{acc.privateKey}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
