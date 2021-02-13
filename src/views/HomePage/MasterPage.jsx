import React from 'react';
import { withStyles, Grid, Typography, Card, CardContent, withWidth } from '@material-ui/core';
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import Navbar from '../../components/Navbar';
import Home from './Home';
import AboutUs from '../AboutUs/AboutUs';
import ContactUs from '../ContactUs/ContactUs';
import OurServices from '../OurServices/OurServices';
import Footer from '../../components/Footer';

const styles = theme => ({
    root: {
        backgroundColor: '#A9A9A9',
        [theme.breakpoints.down('md')]: { margin: 0 },
    },
    navLink: { padding: "20px 20px", textDecoration: "none", display: "inline-flex", float: "left", color: "#001C61" },
    navLinkMobile: { marginLeft: "6px", padding: "2px 5px", textDecoration: "none", display: "inline-flex", float: "left", color: "#515974" },
    cardStyle: { height: "100%", width: "100%", backgroundColor: '#A9A9A9', padding: "2px" },
    headingStyle: { textAlign: "left", color: "#fff", fontWeight: 900, fontSize: "24px" },
    descriptionStyle: { textAlign: "left", color: "#fff", fontWeight: 900, fontSize: "14px" }
});

class MasterPage extends React.Component {
    render() {
        const { classes, width, match } = this.props;
        if (width == "xs" || width == "sm") {
            var Nav = [
                <NavLink to={`${match.url}/home`} className={classes.navLinkMobile + " " + classes.dispBlk} activeClassName="active" activeStyle={{ fontWeight: "bold", color: "red" }}>Home</NavLink>,
                <NavLink to={`${match.url}/aboutus`} className={classes.navLinkMobile + " " + classes.dispBlk} activeClassName="active" activeStyle={{ fontWeight: "bold", color: "red" }}>About Us</NavLink>,
                <NavLink to={`${match.url}/contactus`} className={classes.navLinkMobile + " " + classes.dispBlk} activeClassName="active" activeStyle={{ fontWeight: "bold", color: "red" }}>Contact Us</NavLink>,
                <NavLink to={`${match.url}/ourservices`} className={classes.navLinkMobile + " " + classes.dispBlk} activeClassName="active" activeStyle={{ fontWeight: "bold", color: "red" }}>Our Services</NavLink>
            ];
        } else {
            var Nav = [
                <NavLink to={`${match.url}/home`} className={classes.navLink} style={{ textDecorationLine: "none" }} activeClassName="active" activeStyle={{ fontWeight: "bold", color: "red" }}>Home</NavLink>,
                <NavLink to={`${match.url}/aboutus`} className={classes.navLink} style={{ textDecorationLine: "none" }} activeClassName="active" activeStyle={{ fontWeight: "bold", color: "red" }}>About Us</NavLink>,
                <NavLink to={`${match.url}/contactus`} className={classes.navLink} style={{ textDecorationLine: "none" }} activeClassName="active" activeStyle={{ fontWeight: "bold", color: "red" }}>Contact Us</NavLink>,
                <NavLink to={`${match.url}/ourservices`} className={classes.navLink} style={{ textDecorationLine: "none" }} activeClassName="active" activeStyle={{ fontWeight: "bold", color: "red" }}>Our Services</NavLink>
            ];
        }
        return (

            <div>
                <Navbar Nav={Nav} homeLink={'./home'} history={this.props.history} />
                <Switch>
                    <Route path={`${match.url}/home`} render={() => <Home />} />
                    <Route path={`${match.url}/aboutus`} render={() => <AboutUs />} />
                    <Route path={`${match.url}/contactus`} render={() => <ContactUs />} />
                    <Route path={`${match.url}/ourservices`} render={() => <OurServices />} />
                    <Redirect to={`${match.url}/Home`} ></Redirect>
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default withStyles(styles)(withWidth()(MasterPage));
