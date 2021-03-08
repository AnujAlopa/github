import React from 'react';
import { makeStyles, Typography, Card } from '@material-ui/core';
import solor from '../../assets/images/homepic.png';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#A9A9A9',
        marginTop: "80px",
    },
    main: {
        width: '100%',
        backgroundImage: `url(${solor})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '530px'
    },
    headingStyle: { textAlign: "center", color: "blue", fontWeight: 900, fontSize: "60px", paddingTop: "55px" },
    descriptionStyle: { textAlign: "center", color: "#blue", fontWeight: 900, fontSize: "25px" }
}));

const Home = () => {
    const classes = useStyles();

    return (
        <div className={classes.main}>
            {/* <Typography className={classes.headingStyle}>Welcome to Electricaltrendz</Typography>
            <Typography className={classes.descriptionStyle}> This is the place where you will get all kind of solar solution.</Typography>
            <Typography className={classes.descriptionStyle}>Complete SOLAR solution under single roof.</Typography> */}
        </div>
    )
}

export default Home;
