

const DonationCard = ({ singleCard }) => {
    const { image, category, title, price, bg_colour, text_colour, btn_colour } = singleCard
    return (
        <div>
            <div style={{backgroundColor:bg_colour}} className="flex flex-col lg:flex-row rounded-md">{/*card lg:card-side shadow-xl*/}
                {/* <figure><img className="w-full]" src={image} alt="Album" /></figure> */}
                <div className="lg:w-[40%]"><img className="w-full h-full" src={image} alt="Album" /></div>
                <div className="p-5">
                    <button style={{backgroundColor:btn_colour,color:text_colour}} className="text-base font-medium py-1 px-3 rounded-md">{category}</button>
                    <h2 className="text-2xl font-semibold my-2">{title}</h2>
                    <p style={{color:text_colour}} className="text-base font-semibold">${price.toFixed(2)}</p>
                    <div className="mt-3">
                        <button style={{backgroundColor:text_colour}} className="text-lg font-semibold text-white py-1 px-3 rounded-md">View Detail</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DonationCard;