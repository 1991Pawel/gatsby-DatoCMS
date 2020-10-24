import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import Img from "gatsby-image"
import Layout from '../components/Layout'
import { useGalleryFilters } from '../helpers/useGalleryFilters'

const GalleryList = ({ item }) => {
    return (
        <li className="gallery__item">
            <Img className="gallery__image" fluid={item.node.events[0].fluid} />
            <span>{item.node.title}</span>
        </li>
    )
};

const GalleryPage = (props) => {
    const path = props.location.state?.query;
    const [filter, setFilter] = useState('');
    const filterList = useGalleryFilters(filter);

    useEffect(() => {
        if (path === false) {
            setFilter('')
        } else {
            setFilter(path);
        }
    }, [path])

    return (
        <Layout Layout >
            <div className="gallery">
                <div className="wrapper">
                    <h2 className="gallery__title">Zdjęcia</h2>
                    <nav className="gallery__nav">
                        <ul className="gallery__menu">
                            <li className="gallery__category">
                                <button onClick={() => setFilter('')} className="gallery__btn">Wszystko</button>
                            </li>
                            <li className="gallery__category">
                                <button onClick={() => setFilter('portrait')} params={{ query: "portrait" }} className="gallery__btn" to="/gallery/">Portrety</button>
                            </li>
                            <li className="gallery__category">
                                <button onClick={() => setFilter('event')} params={{ query: "event" }} className="gallery__btn" to="/gallery/">Eventy</button>
                            </li>
                            <li className="gallery__category">
                                <button onClick={() => setFilter('wedding')} params={{ query: "wedding" }} className="gallery__btn" to="/gallery/">Wesela</button>
                            </li>
                        </ul>
                    </nav>
                    <div className="gallery__container">
                        {filterList.length ? (filterList.map((item) =>
                            <GalleryList key={item.node.id} item={item} />)
                        ) :
                            <div className="gallery__info">Brak zdjęć</div>}
                    </div>
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