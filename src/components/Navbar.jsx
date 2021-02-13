import React, {useEffect } from 'react';
import { withStyles, withWidth, Hidden, Button, IconButton, Typography, Toolbar, AppBar, ListItem, Divider, List, SwipeableDrawer } from '@material-ui/core';
import { NavLink } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import AdminImage from '../assets/images/logo.png';

const styles = theme => ({
    list: { width: 250 },
    fullList: { width: 'auto' },
    menuButton: { marginRight: 20, height: 46, position: "absolute", left: "2%"},
    root: { flexGrow: 1, marginBottom: "65px" },
    logoutBtn: { textDecoration: "none", color: "#515974", display: "inline-flex", float: "right", textTransform: "capitalize", marginRight: "2%", paddingTop:"10px" },
    logoBg: { backgroundColor: "#fff",padding: "0px"},
    logoForMobile: { left: "30%", width:"100px", position: "absolute" },
    navLinkMobile: { textDecoration: "none", display: "inline-flex", color: "#515974" },
    avatar:{ width: 40, height: 40, marginLeft:"40px" },
    dispBlk:{
        [theme.breakpoints.down('sm')]:{
            display:"block",
            width:"100%"
        }
    },
});

function Navbar(props) {
    const [state, setState] = React.useState({
        left: false
    });
    const { classes,  homeLink } = props;
    
    const toggleDrawer = (side, open) => event => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ state, [side]: open });
    };

    const sideList = side => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <List>
                <ListItem>
                    <span style={{display:"flex"}}> 
                    <Avatar alt="No Images" src={AdminImage} className={classes.avatar} />
                    </span>
                </ListItem>
                <Divider />
                {props.Nav.map((links, i) =>
                <div key={i}><ListItem ><div className={classes.dispBlk}>{links}</div></ListItem></div>
                )}
                <ListItem >
                 
                </ListItem>
            </List>
        </div>
    );

    return (
        <div className={classes.root}>
            <AppBar position="fixed" style={{ backgroundColor: '#f5f5f5' }}>
                <Toolbar style={{ padding: "0" }}>
                    <Hidden smDown>
                        <Typography variant="h6" color="inherit" className={classes.logoBg}>
                            <NavLink to={homeLink} className={classes.navLink} activeClassName="active" activeStyle={{ fontWeight: "bold", color: "red" }}>
                            <img src={AdminImage} alt="logo"  width="150px" height="50px"/>
                            </NavLink>
                        </Typography>
                    </Hidden>
                    <Hidden mdUp>
                        <Typography variant="h6" color="inherit" className={classes.logoForMobile}>
                            <NavLink to={"#"} className={classes.navLink} activeClassName="active" activeStyle={{ fontWeight: "bold", color: "red" }}>
                            <img src={AdminImage} alt="logo" width="150px" height="50px"/>
                            </NavLink>
                        </Typography>
                    </Hidden>
                    <Hidden mdUp>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={toggleDrawer('left', true)}>
                            <MenuIcon />
                        </IconButton>
                    </Hidden>
                    <Hidden smDown>
                        <div style={{ width: "100%" }}>
                            {props.Nav.map((links, i) =>
                                <div key={i}>{links}</div>
                            )}

                        </div>
                    </Hidden>
                </Toolbar>
            </AppBar>
            <SwipeableDrawer
                open={state.left}
                onClose={toggleDrawer('left', false)}
                onOpen={toggleDrawer('left', true)}
            >
                {sideList('left')}
            </SwipeableDrawer>
        </div>
    );

}

export default withStyles(styles, { withTheme: true })(Navbar);
