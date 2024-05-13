import React from "react";

import { Meal } from "@feature/restaurants/models/meal.model";
import './MealCard.css'

export function MealCard({ children, data, onAdded }: { children: React.ReactNode, data: Meal, onAdded: () => void }) {
    return (
        <div className="meal-card">
            <div className="meal-card__title">{data.strMeal}</div>
            <div className="meal-card__thumbnail-container">
                <img className="meal-card__thumbnail" src={data.strMealThumb} alt={data.strMeal} />
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}