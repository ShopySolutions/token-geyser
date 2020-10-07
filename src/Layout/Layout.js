import React from 'react';
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import {makeStyles} from "@material-ui/styles";
import Header from "./Header";
import Main from "./Main";


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
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
        backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
    },
    cardPricing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing(2),
    },
    footer: {
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
        },
    },


    box: {
        border: '1px solid #eee',
        borderRadius: '8px',
        width: 'auto',
        padding: '10px 15px',
        marginTop: '0px',
        background: '#f8f8f8',
        color: ' #000',
        boxSizing: 'border-box !important'
    },

    bodyText: {
        fontSize: '1rem',
        textAlign: 'left',
        fontWeight: '300',
        lineHeight: '25px'
    },
    price: {
        fontSize: '1.5rem',
        textAlign: 'left',
        fontWeight: '500',
        lineHeight: '25px',
        color: "#000"
    },
    helpIconGrid: {
        textAlign: "right"
    },
    helpIcon: {
        color: "#2c2c2c",
        fontSize: "1.25em"
    }
}));






function Layout() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Header/>
            {/* End hero unit */}


            <Main/>

            {/* Footer */}




            {/* End footer */}





        </React.Fragment>
    );
}

export default Layout;
