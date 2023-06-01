import React, { useState, useEffect } from 'react';
import { Box, List } from '@material-ui/core';
import ImageItem from './ImageItem';
import { makeStyles } from '@material-ui/styles';

const ImageList = ({ images, selectImage, deleteImage }) => {

    const useStyles = makeStyles({
        scrollable: {
            overflowY: 'auto',
            maxHeight: '70vh',
        },
    });

    const classes = useStyles();

    console.log('selected: ', selectImage)

    return (
        <Box className={classes.scrollable}>
            {images.map((image, index) => (
                <ImageItem
                    key={index}
                    image={image}
                    selectImage={selectImage}
                    deleteImage={deleteImage}
                />
            ))}
        </Box>
    );
};

export default ImageList;