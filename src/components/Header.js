import Navbar from "./Navbar"
// import SliderView from "./Carousel"
import MultipleItems from "./MultipleItems"
function Header() {
    return (
        <div className='main'>
            <Navbar/>
            <div className='text'>
                <h1>Discover <br></br>Kenya</h1>
            </div>
            <div className='car-view'>
            <MultipleItems/>
            </div>

        </div>
    )
}

export default Header
