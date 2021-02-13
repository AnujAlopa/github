import React from 'react';
import { makeStyles, Typography, Card, Grid } from '@material-ui/core';
import GoogleMap from './GoogleMap';
import FormDetails from './FormDetails';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#A9A9A9',
        marginTop: "80px",
    },
    cardStyle: { height: "100%", width: "100%", backgroundColor: '#fff', padding: "25px" },
    headingStyle: { textAlign: "left", color: "#fff", fontWeight: 900, fontSize: "24px" },
    descriptionStyle: { textAlign: "left", color: "#fff", fontWeight: 900, fontSize: "14px" }
}));

const ContactUs = () => {
    const classes = useStyles();

    return (
        <>
            <GoogleMap />
            <FormDetails />
        </>
    )
}

export default ContactUs;
