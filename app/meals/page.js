import Link from "next/link";

import MealsGrid from "@/components/meals/meals-grid/MealsGrid";
import styles from './page.module.css'
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";
import Loading from "../loading";

async function Meals() {
    const meals = await getMeals();
    return <MealsGrid meals={meals} />
}

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
                <Suspense fallback={<Loading />}>
                    <Meals />
                </Suspense>
            </main>
        </>
    )
}