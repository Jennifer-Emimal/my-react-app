import HTML from '../Data/assets/HTML.png'
import { useEffect, useState } from 'react';

function Course({
    name,
    price,
    img = HTML,
    show, deleteList = () => { },
    id,
}) {
    const [purchased, setPurchased] = useState(false);
    function BuyCourse(discount, e) {
        console.log(name, "purchased with", discount, "% discount");
        console.log(e);
        setPurchased(true);
    }

    useEffect(() => {
        console.log('Useeffect inside course')
    })

    if (show) {
        return (
            name && <div className="card">
                <img src={img} alt="" />
                <h3>{name}</h3>
                <p>{price}</p>
                <button onClick={(event) => BuyCourse(20, event)}>BUY NOW</button>
                <button onClick={() => deleteList(id)}>Delete</button>
                <p>{purchased ? "Already purchased" : "Purchase now"}</p>
            </div>
        );
    }
    else {
        return (
            <div className="card">Content not available</div>
        );
    }
}
export default Course;
