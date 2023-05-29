import React from 'react';
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  button: {
    width: '100%',
    height: '100%',
  },
});


const AddImageButton = ({ addImage }) => {

  const classes = useStyles();

  return (
    <Button 
      variant="contained" 
      color="primary" 
      onClick={addImage} 
      className={classes.button} 
    >
      Add Images
    </Button>
  )
};

export default AddImageButton;