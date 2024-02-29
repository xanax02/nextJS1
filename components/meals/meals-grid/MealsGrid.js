
export default function MealsGrid({meals}) {
    return <ul>
        {meals.map(meal => <li key={meal.id}>

        </li>)}
    </ul>
}