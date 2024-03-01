"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from './NavLink.module.css'

export default function NavLink({href, children}) {

    const path = usePathname();

    return (
        <Link 
          href={href}
          className={path.startsWith(href) ? styles.active : styles.link}
        >
            {children}
        </Link>
    )
}