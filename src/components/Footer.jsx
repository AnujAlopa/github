import React from 'react';
import { makeStyles, Grid, Typography, Card, CardContent } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: { backgroundColor: '#A9A9A9', left: 0, bottom: 0, right: 0 },
    containerStyle: { paddingLeft: "120px" },
    cardStyle: { height: "100%", width: "100%", backgroundColor: '#A9A9A9', padding: "2px" },
    headingStyle: { textAlign: "left", color: "#fff", fontWeight: 900, fontSize: "24px" },
    descriptionStyle: { textAlign: "left", color: "#fff", fontWeight: 900, fontSize: "14px" }
}));

const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Card className={classes.cardStyle}>
                <CardContent>
                    <Grid container >
                        <Grid item lg={4} md={4} sm={12} xs={12} className={classes.containerStyle}>
                            <Typography className={classes.headingStyle}>CONTACT INFORMATION</Typography>
                            <Typography className={classes.descriptionStyle}>9335471256, 8176976885, 8960338825</Typography>
                            <Typography className={classes.descriptionStyle}>sales@electricaltrendz.com</Typography>
                        </Grid>
                        <Grid item lg={4} md={4} sm={12} xs={12} className={classes.containerStyle}>
                            <Typography className={classes.headingStyle}>OUR SERVICES</Typography>
                            <Typography className={classes.descriptionStyle}>Result Management</Typography>
                            <Typography className={classes.descriptionStyle}>Attendance Management</Typography>
                        </Grid>
                        <Grid item lg={4} md={4} sm={12} xs={12} className={classes.containerStyle}>
                            <Typography className={classes.headingStyle}>ADDRESS</Typography>
                            <Typography className={classes.descriptionStyle}>ED/459 Sector Q</Typography>
                            <Typography className={classes.descriptionStyle}>Aliganj Lucknow (UP)-226024</Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </div>
    )
}

export default Footer;
