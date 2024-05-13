import { Link } from 'react-router-dom'

import './Header.css'
import { Cart } from '@feature/cart/components'

export function Header() {
    return (
        <nav className="header">
            <ul className="header-items">
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/restaurants'}>Restaurants</Link></li>
                <li><Link to={'/promotions'}>Promotions</Link></li>

                <li className="end"><Cart></Cart></li>
                <li><Link to={'/profile'}>Profile</Link></li>
            </ul>
        </nav>
    )
}
