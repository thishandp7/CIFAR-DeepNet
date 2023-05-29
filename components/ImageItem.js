import React, { useState, useEffect } from 'react';
import { IconButton, List, ListItem, ListItemText, ListItemAvatar, ListItemSecondaryAction, Avatar, Button, Paper } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    paper: {
        margin: '3px',
        padding: '5px',
        border: '1px solid gray', // Customize as needed
        listStyle: 'none',
    },
});

const ImageItem = ({ image, selectImage, deleteImage }) => {
    
    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <ListItem button onClick={() => selectImage(image)}>
                <ListItemAvatar>
                    <Avatar alt={image.name} src={image.url} />
                </ListItemAvatar>
                <ListItemText primary={image.name} />
                <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete" onClick={() => deleteImage(image)}>
                    <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        </Paper>
    );
};

export default ImageItem;