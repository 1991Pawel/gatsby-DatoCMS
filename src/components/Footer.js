import React from 'react'
import './Footer.scss'
import facebookIcon from '../assets/instagram.svg'
import instagramIcon from '../assets/facebook.svg'

const Footer = () => (
    <footer id="contact" className="contact">
        <div className="wrapper">
            <div className="socials">
                <h4>Kontakt</h4>
                <ul className="socials__list">
                    <li className="socials__item">
                        <a className="socials__link" href="tel:+18506484200">
                            tel 123-456-789</a>
                    </li>
                    <li className="socials__item">
                        <a className="socials__link" href="mailto:example@.com">mwrocenski@gmail.com</a>
                    </li>
                    <li className="socials__item">
                        www.mwrocenski.pl
                    </li>
                </ul>
                <h4>znajdz mnie</h4>
                <ul className="socials__list socials__list--flex">

                    <li className="socials__item socials__item--mr">
                        <a className="socials__link" target="_blank" rel="noreferrer" href="https://www.instagram.com/wrocenskifoto">
                            <img className="socials__icon" src={facebookIcon} alt="facebook icon" />
                        </a>
                    </li>
                    <li className="socials__item socials__item--mr">
                        <a className="socials__link" target="_blank" rel="noreferrer" href="https://www.facebook.com/WrocenskiFoto">
                            <img className="socials__icon" src={instagramIcon} alt="instagram icon" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <p className="copyright"><a href="http://pavdev.pl">© 2020 P.L All Rights Reserved</a></p>
    </footer>
)

export default Footer;

