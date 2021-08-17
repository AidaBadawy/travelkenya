import imageOne from '../images/lion-blur.png'
import Destination from './Destination'

function About() {
    return (
        <div id='statistics'>
            <div className='statistics-model'>
                <img src={imageOne} alt='feature-img'/>
            </div>
            <div className='features-text'>
                <h1>ABOUT</h1>
                <p>One of Africa's favourite safari destination with more than
                    58 national parks and nature reserves containing over <span>25,000</span> different types of animals 
                    scattered between Lake Victoria and the Indian Ocean, covering every imaginable
                    landscape and featuring just about every animal in Africa.</p>
            </div>
            <div className='dest'>
                <Destination/>

            </div>
        </div>
    )
}

export default About
