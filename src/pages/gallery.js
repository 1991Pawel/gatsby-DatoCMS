import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import galleryImg from '../assets/gallery.jpeg';


const GalleryPage = () => {
    return (
        <Layout>
            <div className="gallery">
                <div className="wrapper">
                    <h2 className="gallery__title">Zdjęcia</h2>
                    <nav className="gallery__nav">
                        <ul className="gallery__list">
                            <li className="gallery__category">
                                <Link className="gallery__link" to="/">Wszystko</Link>
                            </li>
                            <li className="gallery__category">
                                <Link className="gallery__link" to="/">Portrety</Link>
                            </li>
                            <li className="gallery__category">
                                <Link className="gallery__link" to="/">Eventy</Link>
                            </li>
                            <li className="gallery__category">
                                <Link className="gallery__link" to="/">Wesela</Link>
                            </li>
                        </ul>
                    </nav>

                    <div className="gallery__container">
                        <div className="gallery__item">
                            <img className="gallery__image" src={galleryImg} alt="" />
                        </div>
                        <div className="gallery__item">
                            <img className="gallery__image" src={galleryImg} alt="" />
                        </div>
                        <div className="gallery__item">
                            <img className="gallery__image" src={galleryImg} alt="" />
                        </div>
                        <div className="gallery__item">
                            <img className="gallery__image" src={galleryImg} alt="" />
                        </div>
                        <div className="gallery__item">
                            <img className="gallery__image" src={galleryImg} alt="" />
                        </div>
                        <div className="gallery__item">
                            <img className="gallery__image" src={galleryImg} alt="" />
                        </div>
                        <div className="gallery__item">
                            <img className="gallery__image" src={galleryImg} alt="" />
                        </div>
                        <div className="gallery__item">
                            <img className="gallery__image" src={galleryImg} alt="" />
                        </div>
                        <div className="gallery__item">
                            <img className="gallery__image" src={galleryImg} alt="" />
                        </div>
                        <div className="gallery__item">
                            <img className="gallery__image" src={galleryImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </Layout >
    )
}

export default GalleryPage;