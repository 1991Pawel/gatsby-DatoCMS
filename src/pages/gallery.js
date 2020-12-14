import React, { useState, useEffect, useCallback } from 'react'
import { graphql } from 'gatsby'
import Img from "gatsby-image"

import Modal from '../components/Modal'
import Layout from '../components/Layout'
import { useGalleryFilters } from '../helpers/useGalleryFilters'
import { motion } from "framer-motion"

const tabs = [
    { content: 'Wszystko', path: '', id: '' },
    { content: 'Eventy', path: '/event', id: 'event' },
    { content: 'Portrety', path: '/portrait', id: 'portrait' },
    { content: 'Wesela', path: '/weeding', id: 'wedding' },
]

const GalleryList = ({ item, setSelectedImg, handleUserKeyPress }) => {
    return (
        <motion.li
            onKeyUp={(e) => handleUserKeyPress(e, item.node.events[0].fluid)}
            onClick={() => setSelectedImg(item.node.events[0].fluid)}
            initial={{ opacity: 0, scale: .8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: .6 }}
            tabIndex="0"
            className="gallery__item">
            <Img className="gallery__image" fluid={item.node.events[0].fluid} />
            <span>{item.node.title}</span>
        </motion.li>
    )
};

const GalleryPage = (props) => {
    const path = props.location.state?.query;
    const [filter, setFilter] = useState('');
    const filterList = useGalleryFilters(filter);
    const [activeTab, setActiveTab] = useState(path);
    const [selectedImg, setSelectedImg] = useState(null);



    useEffect(() => {
        if (path === false) {
            setFilter('')
        } else {
            setFilter(path.toLowerCase());
        }
    }, [path])

    const changeCategory = (id) => {
        setActiveTab(id)
        setFilter(id);
    }

    const handleUserKeyPress = useCallback((e, image) => {
        const { key } = e;
        if (key === 'Enter') {
            setSelectedImg(image)
        }
    }, []);

    return (
        <Layout >
            {selectedImg && <Modal setSelectedImg={setSelectedImg} selectedImg={selectedImg} />}
            <div className="gallery">
                <div className="wrapper">
                    <h2 className="gallery__title">Zdjęcia</h2>
                    <nav className="gallery__nav">
                        <ul role="navigation" aria-label="gallery filter" className="gallery__menu">
                            {tabs.map((tab) => {
                                return (
                                    <li key={tab.id} className="gallery__category">
                                        <button
                                            className={tab.id === activeTab ? "gallery__btn gallery__btn--active" : "gallery__btn"}
                                            id={tab.id}
                                            onClick={() => changeCategory(tab.id)}>{tab.content}
                                        </button>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                    <ul className="gallery__container">
                        {filterList.length ? filterList.map((item) => <GalleryList handleUserKeyPress={handleUserKeyPress} setSelectedImg={setSelectedImg} key={item.node.id} item={item} />) : <p>Brak zdjęć</p>}
                    </ul>
                </div>
            </div>
        </Layout >
    )
}

export const query = graphql`
query MyQuery {
                    allDatoCmsGalleryphoto {
                    edges {
                    node {
                    id
                    title
                    category
                        events {
                      url
                 fluid(maxWidth:600) {
                ...GatsbyDatoCmsFluid
             }
             
         }
      }
    }
  }
}
`;


export default GalleryPage;