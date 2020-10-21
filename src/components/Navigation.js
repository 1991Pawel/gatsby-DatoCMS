import React from 'react'
import './Navigation.scss'



const Navigation = () => {
    return (
        <nav className="nav">
            <div className="logo">
                <a className="logo__link" href="/">Michał Wroceński</a>
                <span className="logo__desc">
                    Fotografia
                </span>
            </div>
            <ul className="menu">
                <li className="menu__list">
                    <a className="menu__link" href="/">Start</a>
                </li>
                <li className="menu__list">
                    <a className="menu__link" href="/">Portfolio</a>
                </li>
                <li className="menu__list">
                    <a className="menu__link" href="/">O mnie</a>
                </li>
                <li className="menu__list">
                    <a className="menu__link" href="/">Kontakt</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;