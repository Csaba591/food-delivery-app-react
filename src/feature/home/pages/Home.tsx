import { Link } from "react-router-dom";

export function HomePage() {
    return (
        <main>
            <h1>Food Delivery App</h1>
            <section>
                <h2><Link to={'/restaurants'}>Discover New Restaurants!</Link></h2>
            </section>

            <section>
                <h2><Link to={'/promotions'}>Check Out Currently Running Promotions!</Link></h2>
            </section>
        </main>
    )
}