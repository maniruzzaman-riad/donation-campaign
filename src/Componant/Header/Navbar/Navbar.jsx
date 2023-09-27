import { NavLink } from "react-router-dom";
// import {img} from "../../../assets/images/Logo.png"

const Navbar = () => {
    return (
        <div className="flex gap-5 flex-col md:flex-row justify-between items-center my-10 text-lg">
            <div>
                <img src={`https://i.ibb.co/Y85ThPf/Logo.png`} alt="" />
            </div>
            <div className="space-x-10">
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? `text-red-600 underline font-bold` : ""
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/donation"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? `text-red-600 underline font-bold` : ""
                    }
                >
                    Donation
                </NavLink>
                <NavLink
                    to="/pie"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? `text-red-600 underline font-bold` : ""
                    }
                >
                    Statistics
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;