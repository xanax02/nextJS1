"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from './NavLink.module.css'

export default function NavLink({href, children}) {

    const path = usePathname();

    console.log("href", href);
    console.log("path", path);

    return (
        <Link 
          href={href}
          className={path.startsWith(href) ? styles.active : styles.link}
        >
            {children}
        </Link>
    )
}