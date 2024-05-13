import { createContext } from "react";

import { Meal } from "@feature/restaurants/models/meal.model";

export const CartContext = createContext<{ meals: Meal[], setMeals: (meals: Meal[]) => void }>({
    meals: [], setMeals: () => { }
})
