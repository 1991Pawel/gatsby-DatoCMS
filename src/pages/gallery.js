import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from "gatsby-image"
import Layout from '../components/Layout'


const GalleryPage = ({ data }) => {
    const items = data.allDatoCmsGalleryphoto.edges
    return (
        <Layout Layout >
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
                        {items.map((item) => {
                            return (
                                <div key={item.node.id} className="gallery__item">
                                    <Img className="gallery__image" fluid={item.node.events[0].fluid} />
                                    <span>{item.node.title}</span>
                                </div>
                            )
                        })}
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
          fluid {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
}
`;


export default GalleryPage;