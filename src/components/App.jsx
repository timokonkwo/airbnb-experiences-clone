import Navbar from "./Navbar"
import Home from "./Home"
import Card from "./Card"

import katie from "../assets/images/katie.png"
import wedding from "../assets/images/wedding.png"
import bike from "../assets/images/bike.png"


/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

export default function App() {
    const img = "https://via.placeholder.com/300";
    return (
        <div>
            <Navbar/>
            <Home />

            <div className="card__container">
                <Card 
                    status="SOLD OUT"
                    title="Life Lessons with Katie"
                    img={img}
                    count={6}
                    price={136}
                />
                <Card 
                     status="ONLINE"
                     title="Learn wedding photography"
                     img={img}
                     count={30}
                     price={125}
                />
                <Card 
                     status=""
                     title="Group mountain biking"
                     img={img}
                     count={2}
                     price={50}
                />
            </div>
        </div>
    )
}