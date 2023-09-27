import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="w-full h-[100vh] flex justify-center items-center">
            <div className="text-center">
                <h2 className="text-7xl font-bold mb-12">404</h2>
                <h2 className="text-2xl font-semibold mb-4">No Data Found</h2>
                <Link to='/'><button className="bg-black text-white text-lg font-semibold py-1 px-3 rounded-md">Go Back Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;