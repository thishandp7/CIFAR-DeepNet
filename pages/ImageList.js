import React, { useState, useEffect } from 'react';
import { Box, List } from '@material-ui/core';
import ImageItem from './ImageItem';
import { makeStyles } from '@material-ui/styles';

const ImageList = ({ images, selectImage, deleteImage }) => {

    images = [
        {
            name: 'Car',
            url: 'dead.url.cq1'
        }, {
            name: 'Bus',
            url: 'dead.url.cq2'
        }, {
            name: 'Cat',
            url: 'dead.url.cq3'
        }, {
            name: 'Bird',
            url: 'dead.url.cq4'
        }, {
            name: 'Cow',
            url: 'dead.url.cq5'
        }, {
            name: 'Bike',
            url: 'dead.url.cq6'
        }, {
            name: 'Bike',
            url: 'dead.url.cq6'
        }, {
            name: 'Bike',
            url: 'dead.url.cq6'
        }, {
            name: 'Bike',
            url: 'dead.url.cq6'
        }, {
            name: 'Bike',
            url: 'dead.url.cq6'
        }, {
            name: 'Bike',
            url: 'dead.url.cq6'
        }, {
            name: 'Bike',
            url: 'dead.url.cq6'
        }, {
            name: 'Bike',
            url: 'dead.url.cq6'
        }, {
            name: 'Bike',
            url: 'dead.url.cq6'
        }, {
            name: 'Bike',
            url: 'dead.url.cq6'
        }, {
            name: 'Bike',
            url: 'dead.url.cq6'
        }, {
            name: 'Bike',
            url: 'dead.url.cq6'
        }, {
            name: 'Bike',
            url: 'dead.url.cq6'
        }, {
            name: 'Bike',
            url: 'dead.url.cq6'
        }, {
            name: 'Bike',
            url: 'dead.url.cq6'
        }, {
            name: 'Bike',
            url: 'dead.url.cq6'
        }, {
            name: 'Bike',
            url: 'dead.url.cq6'
        }, {
            name: 'Bike',
            url: 'dead.url.cq6'
        }, {
            name: 'Bike',
            url: 'dead.url.cq6'
        }, {
            name: 'Bike',
            url: 'dead.url.cq6'
        }, {
            name: 'Bike',
            url: 'dead.url.cq6'
        }, {
            name: 'Bike',
            url: 'dead.url.cq6'
        }, {
            name: 'Bike',
            url: 'dead.url.cq6'
        },
    ]

    const useStyles = makeStyles({
        scrollable: {
          overflowY: 'auto',
          maxHeight: '70vh',
        },
    });
    
    const classes = useStyles();

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