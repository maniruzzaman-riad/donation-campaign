import { useLoaderData } from "react-router-dom";
import DonationCard from "../DonationCard/DonationCard";
import { useEffect, useState } from "react";


const AllDonation = () => {
    const [isClick,setIsClick]=useState(false)
    const [seeData,setSeeData]=useState()

    const allData = useLoaderData()
    const storedData = JSON.parse(localStorage.getItem('donation'))
    const findDonation = allData.filter(isDonate => storedData.includes(isDonate.id))

    useEffect(()=>{
        if(findDonation.length<4){
            setSeeData(findDonation.length)
        }else{
            setSeeData(4)
        }
        
    },[])
    const showAllHandle=()=>{
        setSeeData(findDonation.length)
        setIsClick(!isClick)
    }
    // console.log(allData);
    // console.log(storedData);
    // console.log(findDonation);
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-5">
                {
                    findDonation.slice(0,seeData).map(singleCard => <DonationCard key={singleCard.id} singleCard={singleCard}></DonationCard>)
                }
            </div>
            <div className={!isClick ? 'text-center my-5':'hidden'}>
                <button onClick={showAllHandle} className="text-base font-semibold bg-green-600 py-1 px-4 rounded-md">See All</button>
            </div>
        </>
    );
};

export default AllDonation;