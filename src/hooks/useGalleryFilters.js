import { useStaticQuery, graphql } from "gatsby"
export const useGalleryFilters = (filter = "") => {
  const data = useStaticQuery(
    graphql`
    query MyGallery {
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
}`
  )
  return filter ? data.allDatoCmsGalleryphoto.edges.filter((item) => item.node.category === filter)
    : data.allDatoCmsGalleryphoto.edges;

}

