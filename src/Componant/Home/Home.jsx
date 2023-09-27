import { createContext } from "react";
import Donation from "../Donation/Donation";
import Banner from "../Header/Banner/Banner";


const AssetContext = createContext()

const Home = () => {
    return (
        <div>
            <AssetContext.Provider>
                <Banner></Banner>
                <div>
                    <Donation></Donation>
                </div>
            </AssetContext.Provider>
        </div>
    );
};

export default Home;