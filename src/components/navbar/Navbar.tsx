import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-links">
                <Link href="/home" className="navbar-link">HOME</Link>
                <Link href="/projects" className="navbar-link">PROJECTS</Link>
                <Link href="/studies" className="navbar-link">STUDIES</Link>
                <Link href="/contact" className="navbar-link">CONTACT</Link>
            </ul>
        </nav>
    )
}

export default Navbar;