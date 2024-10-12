import Link from "next/link";

export default function Header (){
    return (
        <div className="container">
            <h1>Blogs</h1>
            <ul className="links">
                <li><Link href={'#'}>Home</Link></li>
                <li><Link href={'about'}>About</Link></li>
                <li><Link href={'jobs'}>Jobs</Link></li>
                <li><Link href={'contact'}>Contact</Link></li>
            </ul>
        </div>
    )
}