import { useContext } from "react";
import { MoneyAsset } from "../GrandPaa/GrandPaa";


const Sister = () => {
    const [money, setMoney]=useContext(MoneyAsset);
    return (
        <div className="border-2 border-yellow-100">
            <h2 className="text-xl">Sister</h2>
            <h2>Money-{money}</h2>
        </div>
    );
};

export default Sister;