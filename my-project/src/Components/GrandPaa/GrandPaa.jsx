import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";


const GrandPaa = () => {
    return (
        <div className="border-2 border-t-orange-100 w-4/6 mx-auto p-4">
            <h2 className="text-2xl">Grand Paa</h2>

            <div className="grid grid-cols-3 gap-3">
                <Dad></Dad>
                <Uncle></Uncle>
                <Aunty></Aunty>
            </div>
        </div>
    );
};

export default GrandPaa;