import React from 'react';
import { withStyles, Grid, Card } from '@material-ui/core';
import image9 from '../../assets/images/image9.jpg';

const styles = theme => ({
    cardStyle: { backgroundColor: '#DCDCDC', height: "1000px", width: "100%" },
    avatar: { width: "100%", height: "100%" }
});

class Certificate extends React.Component {
    render() {
        const { classes } = this.props;
        const imagesArray = [image9];
        return (
            <Grid container>
                {imagesArray.map((imageName, index) =>
                    <Grid item lg={12} md={12} sm={12} xs={12} key={'accountname' + index}>
                        <Card className={classes.cardStyle}>
                            <img alt="No Images" src={imageName} className={classes.avatar} />
                        </Card>
                    </Grid>
                )}
            </Grid>
        )
    }
}

export default withStyles(styles)(Certificate);
