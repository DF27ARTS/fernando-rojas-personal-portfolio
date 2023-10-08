import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-links">
                <Link nav-link="HOME" href="/home" className="navbar-link">
                    <div className="btn-scene">
                        <div nav-link="HOME" className="front"></div>
                        <div nav-link="HOME" className="bottom"></div>
                    </div>
                </Link>

                <Link nav-link="PROJECTS" href="/projects" className="navbar-link">
                    <div className="btn-scene">
                        <div nav-link="PROJECTS" className="front"></div>
                        <div nav-link="PROJECTS" className="bottom"></div>
                    </div>
                </Link>

                <Link nav-link="STUDIES" href="/studies" className="navbar-link">
                    <div className="btn-scene">
                        <div nav-link="STUDIES" className="front"></div>
                        <div nav-link="STUDIES" className="bottom"></div>
                    </div>
                </Link>
                
                <Link nav-link="CONTACT" href="/contact" className="navbar-link">
                    <div className="btn-scene">
                        <div nav-link="CONTACT" className="front"></div>
                        <div nav-link="CONTACT" className="bottom"></div>
                    </div>
                </Link>
            </ul>
        </nav>
    )
}

export default Navbar;