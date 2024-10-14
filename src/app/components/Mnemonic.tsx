import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Mnemonic = () => {
  const { mnemonic } = useContext<any>(AppContext);
  const mArray = mnemonic ? mnemonic.split(" ") : mnemonic;

  return (
    <div
      className={`flex ${
        mnemonic ? "block" : "hidden"
      } transition-all ease-in-out justify-center items-center w-full`}
    >
      <div className="flex mx-7 bg-black justify-center items-center flex-wrap w-full py-4 text-lg rounded-lg">
        {mnemonic ? (
          <div className="w-10/12 max-w-[800px] grid-cols-4 grid grid-rows-3 gap-3">
            {mArray.map((word:any, index:any) => {
              return (
                <span
                  key={index}
                  className="bg-gray-500 text-center max-w-[180px] text-white text-lg px-3 py-1 rounded-lg"
                >
                  {word}
                </span>
              );
            })}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Mnemonic;
