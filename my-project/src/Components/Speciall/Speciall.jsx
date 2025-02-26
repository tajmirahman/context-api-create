import { useContext } from "react";
import { AssetContext } from "../GrandPaa/GrandPaa";


const Speciall = ({asset}) => {

    const gift= useContext(AssetContext);
    console.log(gift);

    return (
        <div>
            <p>has-{asset}</p>
            <p>has-{gift}</p>
      
        
        </div>
    );
};

export default Speciall;