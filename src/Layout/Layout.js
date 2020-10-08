import React from 'react';
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import {makeStyles} from "@material-ui/styles";
import Header from "./Header";
import Main from "./Main";
import AccountModal from "./AccountModal";
import Footer from "./Footer";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({

}));


function Layout() {
    return (
        <React.Fragment>
            <Header/>
            {/* End hero unit */}

            <Main/>
            <AccountModal/>
            {/* Footer */}
            <Footer/>
            {/* End footer */}
        </React.Fragment>
    );
}

export default Layout;
