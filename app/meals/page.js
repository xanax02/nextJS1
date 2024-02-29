import Link from "next/link";

import MealsGrid from "@/components/meals/meals-grid/MealsGrid";
import styles from './page.module.css'

export default function MealsPage() {
    return (
        <>
            <header className={styles.header}>
                <h1>Delicious meals, created <span className={styles.highlight}>by you</span></h1>
                <p>
                    Choose you favorite recipe and cook it yourself. It is easy and fun!
                </p>
                <p className={styles.cta}>
                    <Link href={'/meals/share'}>Share your Favorie Recipe</Link>
                </p>
            </header>
            <main className={styles.main}>
                <MealsGrid meals={[]} />
            </main>
        </>
    )
}