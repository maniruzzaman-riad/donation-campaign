import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar/Navbar";


const Root = () => {
    return (
        <div className="mx-9">
            <Navbar></Navbar>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Root;