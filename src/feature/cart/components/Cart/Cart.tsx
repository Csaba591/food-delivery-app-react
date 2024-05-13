import { useContext, useEffect, useRef, useState } from "react";

import { CartContext } from "@feature/cart/CartContext";
import { Button } from "@shared/components";
import './Cart.css'
import { Meal } from "@feature/restaurants/models/meal.model";


export function Cart() {
    const { meals, setMeals } = useContext(CartContext)

    const [showDropdown, setShowDropdown] = useState<boolean>(true)
    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!meals.length) {
            setShowDropdown(false)
        }
    }, [meals])

    function toggleDropdown() {
        setShowDropdown(!showDropdown)
    }

    function removeMeal(meal: Meal) {
        setMeals(meals.filter(mealInOrder => mealInOrder !== meal))
    }

    return (
        <>
            <div className="cart__dropdown-container">
                <Button onClick={toggleDropdown}>{meals.length ? `Cart ${meals.length}` : 'Cart'}</Button>
                <div ref={dropdownRef} hidden={!showDropdown} className="cart__dropdown">
                    <ul>
                        {meals.map(
                            (meal, index) =>
                                <li key={index}>
                                    <span onClick={() => removeMeal(meal)}>[ - ]</span> {meal.strMeal}
                                </li>
                        )}
                    </ul>
                </div>
            </div>
        </>
    )
}