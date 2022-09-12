import Navbar from "./Navbar"
import Home from "./Home"
import Card from "./Card"
import Data from "../assets/Data"

/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

export default function App() {

    const cards = Data.map(item => 
    <Card
        status={item.status}
        title={item.title}
        img= {item.img}
        count= {item.count}
        price= {item.price}
    />)

    // const img = "https://via.placeholder.com/300";
    return (
        <div>
            <Navbar/>
            <Home />
            <div className="card__container">
                {cards}
            </div>
        </div>
    )
}