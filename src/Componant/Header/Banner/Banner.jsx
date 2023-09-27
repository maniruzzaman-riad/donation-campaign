

const Banner = () => {
    return (
        <div className="">
            <div className="relative">
                <img src='https://i.ibb.co/0nJ7QJD/bannerimg.png' alt="" />
                <div className="w-full h-full bg-white absolute top-0 opacity-80">

                </div>
                <div className="absolute top-0 md:top-[15%] lg:top-[40%] md:left-[9%] lg:left-[25%]">
                    <h2 className="text-2xl md:text-4xl font-bold text-center mb-5">I Grow By Helping People In Need</h2>
                    <div>
                        <form>
                            <div className="flex justify-center">
                                <input className="border py-2 px-3 text-base rounded-l-md w-3/4 md:w-3/5 lg:w-3/5" type="text" name="" id="" placeholder="Search here...." />
                                <button className="text-base font-semibold text-white py-2 px-5 border border-[#FF444A] bg-[#FF444A] rounded-r-md">Search</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Banner;