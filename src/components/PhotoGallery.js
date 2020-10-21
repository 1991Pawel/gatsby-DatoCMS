import React from 'react'
// import { graphql } from 'gatsby';

const PhotoGallery = ({galleryPhotos}) => {
    console.log(galleryPhotos)

    return (
        <div>
            {galleryPhotos.map(({node}) => (
                <>
                <li>{node.title}</li>
                <img src={node.events[0].url} alt=""/>
                </>
            ))}
        </div>
    )
};

export default PhotoGallery;





 
