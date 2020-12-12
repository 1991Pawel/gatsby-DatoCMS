import React from 'react'
import Img from "gatsby-image"
import './Modal.scss'
import crossIcon from '../assets/cross.svg'


const Modal = ({ selectedImg, setSelectedImg }) => {

    const handleClick = (e) => {
        if (e.target.classList.contains('backdrop')) {
            setSelectedImg(null);
        }
    }

    return (
        <div className="backdrop" onClick={handleClick}>
            <div className="backdrop__inner">
                <button onClick={() => setSelectedImg(null)} className="backdrop__btn">
                    <img className="backdrop__icon" src={crossIcon} alt="cross icon" />
                </button>
                <Img className="backdrop__image" fluid={selectedImg} />
            </div>
        </div>
    )
}

export default Modal;