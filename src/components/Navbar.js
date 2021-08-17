import {Link} from 'react-scroll'
import {useState} from 'react'
import logo from '../images/logo.png'



function Navbar() {
    const [nav , setNav] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 50){
            setNav(true);
        }
        else {
            setNav(false);
        }
    }
    window.addEventListener('scroll', changeBackground)
    return (
        <nav className={nav ? 'nav active' : 'nav'}>
            <a href='#' className='logo-ref'>
                <h2 className='logo'>Travel<span>Kenya</span></h2>
            </a>
            <input type='checkbox' className='menu-btn' id='menu-btn'/>
            <label className='menu-icon' for='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Attractions</a></li>
                <li><a href='#'>Tours</a></li>
                <li><a href='#'>Contact Us</a></li>
            </ul>
        </nav>
        // <div className='hero'>
        //     <div className='content'>
        //         <h2 className='logo'>Travel<span>Kenya</span></h2>
        //         <ul className='nav-ul'>
        //             <Link to='statistics'smooth={true} duration={1000}><li>About</li></Link>
        //             <Link to='attractions'><li>Attractions</li></Link>
        //             <Link href='tours'><li>Tours</li></Link>
        //             <Link href='question'><li>Q&A</li></Link>
        //             <Link href='contact'><li>Contact Us</li></Link>
        //         </ul>
        //     </div>
        // </div>

        
    )
}

export default Navbar
