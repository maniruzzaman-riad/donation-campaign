import { useLoaderData } from "react-router-dom";
import DonationCard from "../DonationCard/DonationCard";


const AllDonation = () => {
    const allData = useLoaderData()
    const storedData = JSON.parse(localStorage.getItem('donation'))
    const findDonation = allData.filter(isDonate =>storedData.includes(isDonate.id))
    // console.log(allData);
    // console.log(storedData);
    // console.log(findDonation);
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {
                findDonation.map(singleCard=><DonationCard key={singleCard.id} singleCard={singleCard}></DonationCard>)
            }
        </div>
    );
};

export default AllDonation;