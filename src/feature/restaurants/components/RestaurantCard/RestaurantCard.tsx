import './RestaurantCard.css'

export function RestaurantCard({ data }: { data: any }) {
    return (
        <img className="restaurant-card__logo" src={data.strMealThumb}></img>
    )
}