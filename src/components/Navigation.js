import React, { useState } from 'react'
import { AnchorLink } from "gatsby-plugin-anchor-links";
import './Navigation.scss'



const Navigation = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);


    return (

        <nav className="nav">
            <div className="wrapper">
                <div className="logo">
                    <AnchorLink className="logo__link" to="/#intro" title="Michał Wroceński" />
                    <span className="logo__desc">
                        Fotografia
                    </span>

                </div>
                <button className="burger" onClick={() => setIsOpenMenu(!isOpenMenu)}>{isOpenMenu ? 'X' : '-'}</button>
                <ul className={isOpenMenu ? 'menu menu--active' : 'menu'}>
                    <li className="menu__list">
                        <AnchorLink className="menu__link" to="/#intro" title="Start" />
                    </li>
                    <li className="menu__list">
                        <AnchorLink className="menu__link" to="/#portfolio" title="Portfolio" />
                    </li>
                    <li className="menu__list">
                        <AnchorLink className="menu__link" to="/#about" title="O mnie" />
                    </li>
                    <li className="menu__list">
                        <AnchorLink className="menu__link" to="/#contact" title="Kontakt" />
                    </li>
                </ul>
            </div>
        </nav>


    )
}

export default Navigation;