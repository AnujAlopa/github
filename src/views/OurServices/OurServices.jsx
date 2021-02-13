import React from 'react';
import { withStyles,Typography } from '@material-ui/core';

const styles = theme => ({
    root: {
        backgroundColor: '#A9A9A9',
        [theme.breakpoints.down('md')]: { margin: 0 },
    },
    cardStyle: { height: "100%", width: "100%", backgroundColor: '#A9A9A9', padding: "2px" },
    headingStyle: { textAlign: "left", color: "#fff", fontWeight: 900, fontSize: "24px" },
    descriptionStyle: { textAlign: "left", color: "#fff", fontWeight: 900, fontSize: "14px" }
});

const OurServices = () => {
   
    return (

        <div>
            fdjhkfhdof
        </div>
    )
}

export default (withStyles(styles)(OurServices));
