import Brother from "../Borther/Brother";
import MySelf from "../MySelf/MySelf";
import Sister from "../Sister/Sister";


const Dad = ({asset}) => {
    return (
        <div className="border-2 border-yellow-100">
            <h2>Dad</h2>

            <div className="flex gap-5 p-2">
                <MySelf asset={asset}></MySelf>
                <Brother></Brother>
                <Sister></Sister>
            </div>
        </div>
    );
};

export default Dad;