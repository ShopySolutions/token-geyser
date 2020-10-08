import React from 'react';
import '../App.css'
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
    footerText: {
        color: '#24292e',
        textDecoration: 'none',
        fontSize: "16px",
        marginLeft: "5px"
    },
    appbar: {
        position: 'fixed',
        bottom: '0px',
        background: '#fafbfc !important',
        borderTop: '1px solid #efefef',
        width: '100%',
        height: '50px'
    }

}));

function Footer() {
    const classes = useStyles();

    return (

        <AppBar position="static" color="default" elevation={0} className={classes.appbar}>
            <Toolbar className={classes.toolbar}>
                <div className={classes.toolbarTitle}>
                    <div className={classes.headerTitle}>
                        {/* eslint-disable-next-line react/jsx-no-target-blank */}
                        <a href={"https://www.ampleforth.org/about/"} target={'_blank'}
                           className={classes.footerText}> About</a>
                        {/* eslint-disable-next-line react/jsx-no-target-blank */}
                        <a href={"https://www.ampltalk.org/app/forum/ampl-geyser-19/topic/about-the-geyser-21/"}
                           target={'_blank'} className={classes.footerText}> Docs</a>
                    </div>
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default Footer;
