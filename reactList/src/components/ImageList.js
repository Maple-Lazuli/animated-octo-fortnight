import React from 'react';

const ImageList = (props) => {
    const images = props.images.map((image) => {
        //The key has to be added to the root element of each item in the list
        return <img key={image.id} src={image.regular} alt={image.description} />
    })

    return <div>{images}</div>
};

export default ImageList;