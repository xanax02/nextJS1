import Link from "next/link";
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
                        <Link href={"/meals"}>Browse Meals</Link>
                    </li>
                    <li>
                        <Link href={"/community"}>Foodies Community</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}