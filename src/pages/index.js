import React from "react"
import Layout from "../components/layout"
import PhotoGallery from "../components/PhotoGallery"
import { graphql } from 'gatsby';


const IndexPage = ({data}) => {
  const galleryPhotos = data.allDatoCmsGalleryphoto.edges
  return (
    <Layout>
    <PhotoGallery galleryPhotos={galleryPhotos}/>
  </Layout>
  )
};


export const query = graphql`
query {
  allDatoCmsGalleryphoto {
    edges {
      node {
        id
        title
        category
        events {
          url
        }
      }
    }
  }

}`;

export default IndexPage
