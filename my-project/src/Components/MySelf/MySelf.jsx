import Speciall from "../Speciall/Speciall";


const MySelf = ({asset}) => {
    return (
        <div className="border-2 border-yellow-100">
            <h2 className="text-xl">Myself</h2>
            <Speciall asset={asset}></Speciall>
        </div>
    );
};

export default MySelf;