import Link from "next/link";
import NavLink from "../nav-link/NavLink";

import LogoPng from '@/assets/logo.png'
import styles from "./MainHeader.module.css"

export default function MainHeader() {

    return (
        <header className={styles.header}>
            <Link href='/' className={styles.logo}>
                <img src={LogoPng.src} alt={"A plate with food on it"} />
                NextLevel Food
            </Link>

            <nav className={styles.nav}>
                <ul>
                    <li>
                        <NavLink href={'/meals'}>Browse Meals</NavLink>
                    </li>
                    <li>
                        <NavLink href={'/community'}>Foodies Community</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}