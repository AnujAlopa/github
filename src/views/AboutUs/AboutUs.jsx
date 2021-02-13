import React from 'react';
import { makeStyles,Typography, Card } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#A9A9A9',
        marginTop:"80px",
    },
    cardStyle: { height: "100%", width: "100%", backgroundColor: '#fff', padding: "25px" },
    headingStyle: { textAlign: "left", color: "#fff", fontWeight: 900, fontSize: "24px" },
    descriptionStyle: { textAlign: "left", color: "#fff", fontWeight: 900, fontSize: "14px" }
}));

const AboutUs = () => {
    const classes = useStyles();
   
    return (
        <div className={classes.root}>
            <Card className={classes.cardStyle}>
                <Typography>
                Electricaltrendz is a fully forward- integrated and comprehensive EPC solution provider. We have skilled and dedicated EPC team to ensure the completion of work. Our dedicated teams work in strong cohesion to deliver customized solution to our dedicated customers keeping a delivery focused approach and excellence as the crux of our initiative. We never compromise with our commitment.
                </Typography>
                <Typography>
                Electricaltrendz is a fully forward- integrated and comprehensive EPC solution provider. We have skilled and dedicated EPC team to ensure the completion of work. Our dedicated teams work in strong cohesion to deliver customized solution to our dedicated customers keeping a delivery focused approach and excellence as the crux of our initiative. We never compromise with our commitment.
                </Typography>
            
            </Card>
        </div>
    )
}

export default AboutUs;
