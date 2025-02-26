import Cousin from "../Cousin/Cousin";


const Uncle = () => {

    return (
        <div className="border-2 border-yellow-100">
            <h2 className="text-xl">Uncle</h2>
            <section className="flex justify-between p-2">
                <Cousin name={'Rafsan'}></Cousin>
                <Cousin name={'Rojana'}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;