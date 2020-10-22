import React, { useState } from 'react'
import './Navigation.scss'



const Navigation = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);



    return (

        <nav className="nav">
            <div className="wrapper">
                <div className="logo">
                    <a className="logo__link" href="/">Michał Wroceński</a>
                    <span className="logo__desc">
                        Fotografia
                </span>
                </div>
                <button className="burger" onClick={() => setIsOpenMenu(!isOpenMenu)}>{isOpenMenu ? 'X' : '-'}</button>
                <ul className={isOpenMenu ? 'menu menu--active' : 'menu'}>
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
            </div>
        </nav>


    )
}

export default Navigation;