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
            <img className="w-full" src={detaile.image} alt="" />
            <h2 className="text-4xl font-bold mt-10 mb-5">{detaile.title}</h2>
            <p className="text-base font-normal">{detaile.description}</p>
        </div>
    );
};

export default Details;