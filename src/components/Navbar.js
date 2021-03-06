import {Link} from 'react-scroll'

function Navbar() {
    return (
        <div className='hero'>
            <div className='content'>
                <h2 className='logo'>Travel<span>Kenya</span></h2>
                <ul className='nav-ul'>
                    <Link to='statistics'smooth={true} duration={1000}><li>About</li></Link>
                    <Link to='attractions'><li>Attractions</li></Link>
                    <Link href='tours'><li>Tours</li></Link>
                    <Link href='question'><li>Q&A</li></Link>
                    <Link href='contact'><li>Contact Us</li></Link>
                </ul>
            </div>
            
            
        </div>
    )
}

export default Navbar
