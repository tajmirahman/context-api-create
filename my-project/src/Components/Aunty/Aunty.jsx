import Cousin from "../Cousin/Cousin";


const Aunty = () => {
    return (
        <div className="border-2 border-yellow-100">
            <h2>Aunty</h2>

            <div className="flex justify-between p-2">
                <Cousin name={'Sams'}></Cousin>
                <Cousin name={'Anika'}></Cousin>

            </div>
        </div>
    );
};

export default Aunty;