import './Header.css'

export function Header() {
    return (
        <nav>
            <ul className="header">
                <li>Home</li>
                <li>Restaurants</li>
                <li>Promotions</li>
                <li className="end">Profile</li>
            </ul>
        </nav>
    )
}
