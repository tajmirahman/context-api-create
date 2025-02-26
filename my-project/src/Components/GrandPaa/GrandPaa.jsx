
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import { createContext, useState } from "react";



export const AssetContext = createContext('gold');
export const MoneyAsset = createContext(1000);

const GrandPaa = ({ asset }) => {
    const [money, setMoney]=useState(1000);
    return (
        <div className="border-2 border-t-orange-100 w-4/6 mx-auto p-4">
            <h2 className="text-2xl">Grand Paa</h2>
            <p>Net Money -{money}</p>

            <MoneyAsset.Provider value={[money, setMoney]}>
                <AssetContext.Provider value={'gold'}>
                    <div className="grid grid-cols-3 gap-3">

                        <Dad asset={asset}></Dad>
                        <Uncle></Uncle>
                        <Aunty></Aunty>

                    </div>
                </AssetContext.Provider >
            </MoneyAsset.Provider>
        </div>
    );
};

export default GrandPaa;