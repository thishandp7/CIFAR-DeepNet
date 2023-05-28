import React from 'react';
import { Typography, Card, CardMedia } from '@material-ui/core';

const ImageViewer = ({ selectedImage }) => {
  if (!selectedImage) return <Typography variant="h6">Select an image to view</Typography>;

  return (
    <Card>
      <CardMedia component="img" alt={selectedImage.name} height="140" image={selectedImage.url} title={selectedImage.name} />
      <Typography variant="h6">{selectedImage.name}</Typography>
    </Card>
  );
};

export default ImageViewer;