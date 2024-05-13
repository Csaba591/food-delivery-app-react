import { Meal } from "@feature/restaurants/models/meal.model";
import './MealCard.css'
import { useState } from "react";

export function MealCard({ data }: { data: Meal }) {
    const [showImages, setShowImages] = useState<boolean>(false)
    
    function onImageLoaded() {
        setShowImages(true)
    }
    
    return (
        <div className="meal-card">
            <div className="meal-card__title">{data.strMeal}</div>
            <div className="meal-card__thumbnail-container">
                <img hidden={!showImages} className="meal-card__thumbnail" onLoad={onImageLoaded} src={data.strMealThumb} alt={data.strMeal} />
                <div hidden={showImages}>Loading...</div>
            </div>
        </div>
    )
}