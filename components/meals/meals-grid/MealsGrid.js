import MealItem from '../meal-item/MealItem'
import styles from './MealsGrid.module.css'

export default function MealsGrid({meals}) {
    return <ul className={styles.meals}>
        {meals.map(meal => <li key={meal.id}>
            <MealItem {...meal} />
        </li>)}
    </ul>
}