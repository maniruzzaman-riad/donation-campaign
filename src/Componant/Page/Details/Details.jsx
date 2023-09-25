import { useLoaderData, useParams } from "react-router-dom";


const Details = () => {
    const data =useLoaderData()
    console.log(data);
    const {id} = useParams()
    const idInt =parseInt(id)
    const detaile = data.find(donation => donation.id === idInt)
    console.log(detaile);

    return (
        <div>
            <h2>details page : {id}</h2>
        </div>
    );
};

export default Details;