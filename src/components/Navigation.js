import React, { useState, useEffect, createRef } from 'react'
import { AnchorLink } from "gatsby-plugin-anchor-links";
import './Navigation.scss'



const Navigation = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [scrollY, setScrollY] = useState(false);
    const yourElement = createRef();

    const handleCloseMenu = (e) => {
        if (yourElement.current && yourElement.current.contains(e.target)) {
            setIsOpenMenu(false)
        }
    }

    const listener = e => {
        const isScrolled = window.scrollY >= 280
        setScrollY(isScrolled)
    };

    useEffect(() => {
        window.addEventListener("scroll", listener);
        window.addEventListener("click", handleCloseMenu);
        return () => {
            window.removeEventListener("scroll", listener);
            window.removeEventListener("click", handleCloseMenu);
        };
    });


    return (
        <nav className={scrollY ? 'nav nav--active' : 'nav'}>

            <div className="wrapper">
                <div className="logo">
                    <AnchorLink className="logo__link" to="/#intro" >
                        Michał Wroceński
                        <span className="logo__desc">
                            Fotografia
                         </span>
                    </AnchorLink>
                </div>
                <button aria-label="menu burger" className={isOpenMenu ? 'hamburger hamburger--active' : 'hamburger'} onClick={() => setIsOpenMenu(!isOpenMenu)}>
                    <span className="hamburger__box">
                        <span className="hamburger__inner"></span>
                    </span>
                </button>
                <ul ref={yourElement} className={isOpenMenu ? 'menu menu--active' : 'menu'}>
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