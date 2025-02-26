
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import { createContext } from "react";



export const AssetContext = createContext('gold');

const GrandPaa = ({ asset }) => {
    return (
        <div className="border-2 border-t-orange-100 w-4/6 mx-auto p-4">
            <h2 className="text-2xl">Grand Paa</h2>

            <AssetContext.Provider value={'gold'}>
                <div className="grid grid-cols-3 gap-3">

                    <Dad asset={asset}></Dad>
                    <Uncle></Uncle>
                    <Aunty></Aunty>

                </div>
            </AssetContext.Provider >
        </div>
    );
};

export default GrandPaa;