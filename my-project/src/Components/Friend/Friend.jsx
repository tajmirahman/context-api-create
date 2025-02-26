import { useContext } from "react";
import { AssetContext } from "../GrandPaa/GrandPaa";


const Friend = () => {

    const gift=useContext(AssetContext);

    return (
        <div>
            <h2 className="text-xl">Friend</h2>
            <p>{gift}</p>
        </div>
    );
};

export default Friend;