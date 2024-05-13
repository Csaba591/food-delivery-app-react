import { useContext } from "react";

import { Meal } from "@feature/restaurants/models/meal.model";
import { MealCard } from "../MealCard/MealCard";
import './Meals.css'
import { CartContext } from "@feature/cart/CartContext";
import { Button } from "@shared/components";

export function Meals({ data }: { data: Meal[] }) {
    const { meals, setMeals } = useContext(CartContext)

    function handleMealAdded(meal: Meal) {
        setMeals([...meals, meal])
    }

    function handleMealRemoved(meal: Meal) {
        setMeals(meals.filter(mealInCart => mealInCart !== meal))
    }

    function mealToggleButton(meal: Meal) {
        if (!meals.includes(meal)) {
            return <Button onClick={() => handleMealAdded(meal)}>Add to Order</Button>
        } else {
            return <Button onClick={() => handleMealRemoved(meal)}>Remove from Order</Button>
        }
    }

    const mealCards = data.map(
        (meal, index) =>
            <MealCard data={meal} onAdded={() => handleMealAdded(meal)} key={index}>
                {mealToggleButton(meal)}
            </MealCard>
    )

    return (
        <div className="meals-container">
            {mealCards}
        </div>
    )
}