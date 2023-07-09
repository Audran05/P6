import AccommodationList from "./compenents/AccomationsList"
import Banner from "./compenents/Banner"

function Home(){
    return(
        <div className="home">
            <Banner  />
            <AccommodationList></AccommodationList>
        </div>
        
    )
}

export default Home