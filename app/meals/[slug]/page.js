import Image from 'next/image';
import { notFound } from 'next/navigation';

import { getMeal } from '@/lib/meals';
import styles from './page.module.css';

export default function MealDetailsPage({params}) {

    const meal = getMeal(params.slug);
    meal.instructions = meal?.instructions?.replace(/\n/g, '</br>');

    if(!meal) {
        notFound();
    }

    return (
       <>
         <header className={styles.header}>
            <div className={styles.image}>
                <Image src={meal.image} alt={meal.title} fill />
            </div>
            <div className={styles.headerText}>
                <h1>{meal.title}</h1>
                <p className={styles.creator}>
                    by <a href={`mail to ${meal.creator_email}`}>{meal.creator}</a>
                </p>
                <p className={styles.summary}>{meal.summary}</p>
            </div>
        </header>
        <main>
            <p className={styles.instructions} 
            dangerouslySetInnerHTML={{__html: meal.instructions,}}
            ></p>
        </main>
       </>
    )
}