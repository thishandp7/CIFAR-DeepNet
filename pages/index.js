import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Grid, 
  Container, 
  Paper, 
  AppBar, 
  Toolbar, 
  Typography 
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ImageList from './ImageList';
import ImageViewer from './ImageViewer';
import AddImageButton from './AddImageButton';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {

  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Load images from your API
  }, []);

  const useStyles = makeStyles({
    paper: {
      padding: '10px',
      border: '1px solid black',
      display: 'flex',
      flexDirection: 'column',
    },
    fullHeight: {
      height: '75vh',
      flex: '1 1 auto',
    },
    addButton: {
      paddingTop: '10px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
    },
  });

  const classes = useStyles();

  const selectImage = (image) => {
    setSelectedImage(image);
  };

  const deleteImage = (image) => {
    // Delete image via API, then update local state
  };

  const addImage = () => {
    // Open a file dialog and upload image via API, then update local state
  };

  return (
    <div>
      <Head>
        <title>CIFAR Deep Net</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box>
          <Box display="flex" flexDirection="column" justifycontent="center" alignItems="center">
            <Typography variant="h3" component="h1" gutterBottom>CIFAR Deep Net</Typography>
          </Box>
          <Box display="flex" flexDirection="column" justifycontent="center" height="calc(80vh - 64px)" >
            <Container className={classes.fullHeight}>
              <Grid container spacing={3} className={classes.fullHeight}>
                <Grid item xs={6} sm={3}>
                  <Paper className={`${classes.paper} ${classes.fullHeight}`}>
                    <Box className={classes.scrollable}>
                      <ImageList images={images} selectImage={selectImage} deleteImage={deleteImage} />
                    </Box>
                    <Box className={classes.addButton}>
                      <AddImageButton addImage={addImage} />
                    </Box>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={9}>
                  <Paper className={`${classes.paper} ${classes.fullHeight}`}>
                    <ImageViewer selectedImage={selectedImage} />
                  </Paper>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Box>
      </main>
    </div>
  )
}
