import React from 'react';
import './App.css';
import Layout from "./Layout/Layout";
import CssBaseline from "@material-ui/core/CssBaseline";
import {ThemeProvider} from '@material-ui/styles';
import {createMuiTheme} from "@material-ui/core";

function App() {

    function getThemeType() {
        return createMuiTheme({
            palette: {
                type: "light",
                background: {
                    default: '#ffffff',
                },
            },
        });
    }

    return (

        <ThemeProvider theme={getThemeType()}>
            <CssBaseline/>
            <Layout/>
        </ThemeProvider>

    );
}

export default App;
