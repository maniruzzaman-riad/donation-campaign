import { useEffect, useState } from "react";
import Donat from "../Donat/Donat";


const Donation = () => {
    const [donations,setDonations]=useState([])

    useEffect(()=>{
        fetch('data.json')
        .then(res =>res.json())
        .then(data =>setDonations(data))
    },[])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-12">
            {
               donations.map(donat=><Donat key={donat.id} donat={donat}></Donat>) 
            }
        </div>
    );
};

export default Donation;