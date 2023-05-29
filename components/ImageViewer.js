import React from 'react';
import { Typography, Card, CardMedia, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  paper: {
    padding: '10px',
    border: '1px solid black',
    display: 'flex',
    flexDirection: 'column',
  },
  fullHeight: {
    height: '60vh',
    flex: '1 1 auto',
  },
});

const ImageViewer = ({ selectedImage }) => {

  const classes = useStyles();

  if (!selectedImage) return <Typography variant="h6">Select an image to view</Typography>;

  return (
    <Paper className={`${classes.paper} ${classes.fullHeight}`}>
      <Card>
        <CardMedia component="img" alt={selectedImage.name} height="140" image={selectedImage.url} title={selectedImage.name} />
        <Typography variant="h6">{selectedImage.name}</Typography>
      </Card>
    </Paper>
  );
};

export default ImageViewer;