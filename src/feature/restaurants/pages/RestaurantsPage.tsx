import { axiosClient } from "../../../shared/services"
import { useEffect, useState } from "react"
import { MealCard, RestaurantCard } from "../components"
import './RestaurantsPage.css'
import { FoodCategory } from "../models/food-category.model"
import { Button } from "@shared/components"
import { Meal } from "../models/meal.model"
import { Meals } from "../components/Meals/Meals"

export function RestaurantsPage() {
    const [foodTypes, setFoodTypes] = useState<FoodCategory[] | null>(null)
    const [selectedFoodType, setSelectedFoodType] = useState<FoodCategory | null>(null)
    const [meals, setMeals] = useState<Meal[] | null>()

    const fetchFoodsTypes = () => {
        return axiosClient.get<{ categories: FoodCategory[] }>('api/json/v1/1/categories.php')
    }

    useEffect(() => {
        fetchFoodsTypes().then(response => response.data).then(data => {
            const foodTypes = [{ strCategory: 'All' }, ...data.categories]
            setFoodTypes(foodTypes);
            setSelectedFoodType(foodTypes[0]);
        })
    }, [])

    useEffect(() => {
        setMeals(null)
        if (selectedFoodType) {
            axiosClient.get<{ meals: Meal[] | null }>(`api/json/v1/1/filter.php?c=${selectedFoodType.strCategory}`).then(response => response.data).then(data => setMeals(data.meals))
        }
    }, [selectedFoodType])

    const foodTypesList = foodTypes?.map((ft: FoodCategory, index: number) => <Button onClick={() => setSelectedFoodType(ft)} key={index} className={selectedFoodType?.strCategory === ft.strCategory ? 'active' : ''}>{ft.strCategory}</Button>)

    return (
        <main>
            <h1>Discover Restaurants</h1>

            <section>
                <title>Type Of Food</title>

                <div className="food-types-list">{foodTypesList ?? 'Loading...'}</div>
            </section>

            <section className="foods-container">
                <title>Restaurants</title>

                {meals ? <Meals data={meals}></Meals> : <div className="loading-indicator">Loading...</div>}
            </section>
        </main>
    )
}