import { useLoaderData, useParams } from "react-router-dom";
import Swal from 'sweetalert2'


const Details = () => {
    const data = useLoaderData()
    const { id } = useParams()
    const idInt = parseInt(id)
    const detaile = data.find(donation => donation.id === idInt)
// -------------------------------------------------------------------
    const findStorage=()=>{
        let donation = []
        const storageData = localStorage.getItem('donation')
        if(storageData){
            donation = JSON.parse(storageData)
        }
        return donation
    }

    const storageDonation =(id)=>{
        const storeData= findStorage()
        const matchData = storeData.find(store=> store === id)
        if(!matchData){
            storeData.push(id)
            localStorage.setItem('donation',JSON.stringify(storeData))
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
              })
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
              })
        }
    }
// -------------------------------------------------------------
    return (
        <div>
            <div className="relative">
                <img className="w-full" src={detaile.image} alt="" />
                <div className="bg-black p-5 mix-blend-overlay absolute h-28 w-full bottom-0">
                    
                </div>
                <button onClick={()=>{storageDonation(idInt)}} style={{backgroundColor:detaile.text_colour}} className="text-white absolute bottom-9 left-6 py-2 px-5 text-xl font-semibold rounded-md">Donate ${detaile.price}</button>
            </div>
            <h2 className="text-4xl font-bold mt-10 mb-5">{detaile.title}</h2>
            <p className="text-base font-normal">{detaile.description}</p>
        </div>
    );
};

export default Details;