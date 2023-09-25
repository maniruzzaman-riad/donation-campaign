import { Link } from "react-router-dom";


const Donat = ({ donat }) => {
    // console.log(donat);
    const {id, image, category, title, bg_colour, text_colour, btn_colour } = donat
    // console.log(text_colour);
    return (
        <Link to={`/details/${id}`}>
            <div style={{ backgroundColor: bg_colour }} className="rounded-lg">
                <img src={image} alt="" />
                <div className="ms-5 py-4">
                    <button className="text-base font-medium py-1 px-3 rounded-md mb-2" style={{ backgroundColor: btn_colour }}>{category}</button>
                    <h2 className="text-xl font-semibold" style={{ color: text_colour }}>{title}</h2>
                </div>
            </div>
        </Link>
    );
};

export default Donat;