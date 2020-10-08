import React, {useContext, useState} from 'react';
import '../App.css'
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import {makeStyles, withStyles} from "@material-ui/styles";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import {InputBase} from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import {TokenGeyserContext} from "../Context/TokenGeyserContext";
import CoinBase from "../images/CoinBase.svg";

const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    appBar: {
        backgroundColor: 'rgb(255, 255, 255)',

    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    headerTitle: {
        display: 'flex',
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    select: {
        marginLeft: '20px',
        minWidth: '150px',

    },
    walletButton: {
        minWidth: '150px',
        height: '30px',
        fontWeight: 'bold',
        fontSize: '15px',
        padding: '0.5rem',
        borderRadius: '15px',
        backgroundColor: 'rgb(255, 255, 255)',
        boxShadow: "none"
    },
    walletIcon: {
        width: '32px',
        height: '32px',
        position: 'relative',
        top: '0px',
        left: '-5px',
        borderRadius: '15px'
    },
    conect: {
        color: 'white',
        textTransform: 'uppercase',
        backgroundColor: '#FF2D55',
        boxShadow: 'none',
        marginTop:"8px",
        marginBottom:"8px",
        "&:hover": {
            color: 'white',
            textTransform: 'uppercase',
            backgroundColor: '#FF2D55',
            boxShadow: 'none',
        }
    },

    icon: {
        marginLeft: "10px",
        height: "26px",
        cursor: "pointer"
    },
    itemText: {
        textTransform: 'uppercase',
        fontSize: '10px',
        fontWeight: 'bold',
        fontFamily: 'Avenir',
        left: '45px',
        top: '10px'
    }

}));


const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 10,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '4px 26px 4px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);

function Header() {
    const classes = useStyles();
    const {openAccountPopup, setOpenAccountPopUp, connected, setConnected, setConnectedName, connectedName} = useContext(TokenGeyserContext)


    const [selectOptions, setSelectOptions] = useState([{
        id: 1,
        name: "ETH-AMPL"
    }, {
        id: 2,
        name: "BAL-AMPL"
    }, {
        id: 3,
        name: "COMP-AMPL"
    }, {
        id: 4,
        name: "BZRX-AMPL"
    }, {
        id: 5,
        name: "AMPL-CRV"
    }, {
        id: 6,
        name: "LINK-AMPL"
    }, {
        id: 7,
        name: "MKR-AMPL"
    }, {
        id: 8,
        name: "NMR-AMPL"
    }, {
        id: 9,
        name: "YFI-AMPL"
    }, {
        id: 10,
        name: "AMPL-YCRV"
    }, {
        id: 11,
        name: "ETH-AMPL"
    },])
    const [selected, setSelected] = useState({
        id: 1,
        name: "ETH-AMPL"
    })

    const handleChange = (item) => {
        setSelected(item.target.value)
    }

    const handleGo = () => {
        window.location.href = "https://app.uniswap.org/#/add/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/0xD46bA6D942050d489DBd938a2C909A5d5039A161"
    }

    return (

        <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <div className={classes.toolbarTitle}>
                    <div className={classes.headerTitle}>
                        <Typography variant={"body1"}> Geyser</Typography>
                        <FormControl>
                            <Select
                                labelId="demo-customized-select-label"
                                id="demo-customized-select"
                                value={selected}
                                onChange={handleChange}
                                input={<BootstrapInput/>}
                                className={classes.select}
                                renderValue={data => data.name}
                            >
                                {selectOptions.map((item, indexed) => (
                                    <MenuItem value={item} key={indexed}>{item.name} </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <img src={CoinBase} alt={"Coinbase Wallet"} className={classes.icon}
                             onClick={handleGo}/>&nbsp;<span className={classes.itemText}>Uniswap</span>
                    </div>
                </div>


                {connected ? (<div className="NavbarWeb3AccountContainer">
                    <Button variant={"contained"}
                            className={classes.walletButton}
                            tabIndex="0" type="button">
                        <span className="MuiButton-label">
                        <img src="https://assets.fragments.org/bundles/assets/metamask_icon.jpg"
                             className={classes.walletIcon}
                        />0x14f2..4a08</span>
                    </Button>
                </div>) : (


                    <Button variant={"contained"} size={"small"}
                            onClick={() => setOpenAccountPopUp(true)} className={classes.conect}>CONNECT</Button>

                )}


            </Toolbar>
        </AppBar>
    );
}

export default Header;
