import { Link } from 'react-router-dom'
import './Header.css'

export function Header() {
    return (
        <nav>
            <ul className="header">
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/restaurants'}>Restaurants</Link></li>
                <li><Link to={'/promotions'}>Promotions</Link></li>
                <li className="end"><Link to={'/profile'}>Profile</Link></li>
            </ul>
        </nav>
    )
}
