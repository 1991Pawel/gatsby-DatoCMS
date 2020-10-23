import React, { useState, useEffect } from 'react'
import { AnchorLink } from "gatsby-plugin-anchor-links";
import './Navigation.scss'



const Navigation = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [scrollY, setScrollY] = useState(false);

    const listener = e => {
        const isScrolled = window.scrollY >= 200 ? true : false
        setScrollY(isScrolled)
    };

    useEffect(() => {
        window.addEventListener("scroll", listener);
        return () => {
            window.removeEventListener("scroll", listener);
        };
    }, []);




    return (

        <nav className={scrollY ? 'nav nav--active' : 'nav'}>
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
                        <AnchorLink className="menu__link" to="/#services" title="Usługi" />
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