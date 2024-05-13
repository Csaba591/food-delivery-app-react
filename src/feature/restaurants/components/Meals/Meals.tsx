import { Meal } from "@feature/restaurants/models/meal.model";
import { MealCard } from "../MealCard/MealCard";
import './Meals.css'

export function Meals({ data }: { data: Meal[] }) {
    return (
        <div className="meals-container">
            {data.map((meal, index) => <MealCard data={meal} key={index}></MealCard>)}
        </div>
    )
}