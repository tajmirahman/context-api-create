import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyAsset } from "../GrandPaa/GrandPaa";


const Aunty = () => {

    const [money, setMoney]=useContext(MoneyAsset);
    return (
        <div className="border-2 border-yellow-100">
            <h2>Aunty</h2>

            <div className="flex justify-between p-2">
                <Cousin name={'Sams'}></Cousin>
                <Cousin name={'Anika'}></Cousin>
            </div>
            <p>Money-{money}</p>
            <button className="border-2" onClick={()=>setMoney(money+ 1000)} >Add 1000 Money</button>
        </div>
    );
};

export default Aunty;