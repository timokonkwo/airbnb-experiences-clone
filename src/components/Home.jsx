import photo from "../assets/images/photo-grid.png"
export default function Home(){
    return (
        <div className="container">
            <div className="img__container">
                <img src={photo}/>
            </div>
            
            <h1>Online Experiences</h1>
            <p className="description"> 
                Join unique interactive activities led by
                one-of-a-kind hosts -all without leaving home
            </p>
        </div>
    )
}