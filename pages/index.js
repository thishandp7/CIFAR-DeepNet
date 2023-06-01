import React, { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  Container,
  Paper,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ImageList from '../components/ImageList';
import ImageViewer from '../components/ImageViewer';
import InferenceInterface from '../components/InferenceInterface';
import AddImageButton from '../components/AddImageButton';
import Head from 'next/head';
import '../styles/Home.module.css';

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
  header: {
    margin: '50px',
  }
});

export default function Home() {

  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Load images from your API
    const loadImages = async () => {
      let response = await fetch('/api/images');
      let loadedImages = await Promise.resolve(response.json())
      console.log('loadedImages', loadedImages)
      if (loadedImages.length > 0) {
        setSelectedImage(loadedImages[0]);
        setImages(loadedImages);
      } else {
        setSelectedImage();
        setImages([]);
      }
    }

    loadImages();
  }, []);

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

  const onInference = () => {
    // Perform inference on the selected image
  }

  return (
    <div>
      <Head>
        <title>CIFAR DeepNet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box>
          <Box display="flex" flexDirection="column" justifycontent="center" alignItems="center" className={classes.header}>
            <Typography variant="h3" component="h1" gutterBottom>CIFAR DeepNet</Typography>
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
                  <ImageViewer selectedImage={selectedImage} />
                  <InferenceInterface onInference={onInference} />
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Box>
      </main>
    </div>
  )
}
