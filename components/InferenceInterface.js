import React, { useState, useEffect } from 'react';
import { Paper, Button, Box, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    button: {
      width: '100%',
      height: '100%',
    },
    paper: {
        marginTop: '10px',
        padding: '10px',
        border: '1px solid black',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    fullHeight: {
        height: '12vh',
        flex: '1 1 auto',
    },
    output: {
        '& input': {
            color: 'black', // This overrides the default disabled color
            textAlign: 'center',
        },
        padding: '15px',
    }
});

const InferenceInterface = ({ onInference }) => {

    const [output, setOutput] = React.useState('');
    const classes = useStyles();

    const handleRecognize = () => {
        const result = onInference();
        setOutput('CAR');
    };

    return(
        <Paper className={`${classes.paper} ${classes.fullHeight}`}>
            <TextField disabled value={output} className={classes.output} fullWidth />
            <Button variant="contained" color="primary" onClick={handleRecognize} className={classes.button}>
                Recognize
            </Button>
        </Paper>
    )
}

export default InferenceInterface;