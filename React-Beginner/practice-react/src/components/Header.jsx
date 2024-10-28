import logo from '../assets/logo.png';

const Header = () => {
    return(
        <>
            <header class="navbar">
                <div class="logo-container">
                    <img src={logo} alt="Logo" class="logo"/>
                    <span class="logo-text">Logoipsum</span>
                </div>
                <nav class="nav-links">
                    <a href="#about" class="active">About</a>
                    <a href="#services">Our Services</a>
                    <a href="#portfolio">Portfolio</a>
                    <a href="#blog">Blog</a>
                    <a href="#contact">Contact</a>
                </nav>
                <button class="btn-contact">Get In Touch</button>
            </header>        
        </>
        )
}

export default Header;