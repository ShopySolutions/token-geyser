import React, {useContext, useState} from 'react';
import '../App.css'
import {makeStyles, withStyles} from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import Paper from "@material-ui/core/Paper";
import {fade, InputBase} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {Cached, HelpOutline} from "@material-ui/icons";
import Tooltip from "@material-ui/core/Tooltip";
import {TokenGeyserContext} from "../Context/TokenGeyserContext";

const useStyles = makeStyles((theme) => ({

    box: {
        width: 'auto',
        padding: '10px 15px',
        marginTop: '0px',
        boxShadow: '0px -1px 25px -3px rgba(0, 0, 0, 0.1) !important',
        borderLeft: '8px solid #ff2d55'
    },

    bodyText: {
        fontSize: '15px',
        colo: "gray",
        textAlign: 'left',
        fontWeight: '300',
        lineHeight: '25px'
    },
    price: {
        fontSize: '18px',
        textAlign: 'left',
        fontWeight: 'bold',
        lineHeight: '25px',
        color: "#000"
    },
    helpIconGrid: {
        textAlign: "right"
    },
    helpIcon: {
        color: "#2c2c2c",
        fontSize: "1.25em",
        marginLeft: "5px",
        marginTop: "2px"
    },
    stats: {
        marginTop: '20px'
    },
    withdraw: {
        color: 'white',
        textTransform: 'uppercase',
        backgroundColor: '#FF2D55',
        padding: '8px 22px',
        height: '70px',
        fontSize: '15px',
        borderRadius: '8px',
        fontWeight: 600,
        marginTop: "16px",
        marginBottom: "8px",
        "&:hover": {
            backgroundColor: '#FF2D55',
            color: 'white',

        }
    },
    amount: {
        textAlign: 'right',
        fontSize: '12.5px',
        padding: '5px'
    },
    refresh: {
        fontSize: "60px",
        marginTop: "10px"
    },
    connectBox: {
        width: 'auto',
        padding: '10px 15px',
        marginTop: '0px',
        boxShadow: '0px -1px 25px -3px rgba(0, 0, 0, 0.1) !important',
        borderLeft: '8px solid #7424cc',
        backgroundColor: "#912dff",

    },

    connectText: {
        fontSize: '15px',
        fontFamily: 'Avenir',
        fontWeight: 'bold',
        lineHeight: '1.334',
        color: "white"
    },
    connectButton: {
        color: '#fff',
        border: '1px solid #7424CC',
        textTransform: 'uppercase',
        backgroundColor: '#7424CC',
        boxShadow: 'none',
        padding: '10px 20px',
        borderRadius: '8px',
        fontWeight: 'bold !important',
        fontSize: "12px",
        "&:hover": {
            border: '1px solid #fff',
            backgroundColor: '#7424CC',
            color: '#fff',
        }
    }

}));


const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.common.white,
        border: '1px solid #ced4da',
        fontSize: 20,
        fontWeight: 800,
        width: '100%',
        padding: '16px 12px',
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
            boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.primary.main,
        },
    },
}))(InputBase);


const useStylesBootstrap = makeStyles((theme) => ({
    arrow: {
        color: theme.palette.common.black,
    },
    tooltip: {
        backgroundColor: theme.palette.common.black,
    },
}));
const longText = `
Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.
Praesent non nunc mollis, fermentum neque at, semper arcu.
Nullam eget est sed sem iaculis gravida eget vitae justo.
`;

function BootstrapTooltip(props) {
    const classes = useStylesBootstrap();

    return <Tooltip arrow classes={classes} {...props} />;
}

function Deposit() {
    const classes = useStyles();
    const {openAccountPopup, setOpenAccountPopUp, connected} = useContext(TokenGeyserContext)

    const [value, setValue] = useState(null)
    const handleChangeAmount = (event) => {
        setValue(event.target.value)
    }

    const handleInsufficientBalance = () => {
        window.location.href = "https://mooniswap.exchange/#/add/0x56d811088235F11C8920698a204A5010a788f4b3/0xD46bA6D942050d489DBd938a2C909A5d5039A161";
    }
    return (

        <Grid container spacing={2} alignItems="center" justify={"center"} className={classes.stats}>
            <Grid item md={12}>
                <Typography variant={"body1"} className={classes.amount}>Deposited: 0.000000&nbsp;<span
                    className="small-text">(MOON-V1-BZRX-AMPL)</span></Typography>
                <FormControl className={classes.margin} fullWidth={true}>
                    <BootstrapInput type={"number"} id="bootstrap-input" placeholder={"Enter Amount"}
                                    onChange={handleChangeAmount}/>
                </FormControl>
            </Grid>
            <Grid item md={12}>
                <Paper elevation={0} variant="elevation" className={classes.box}>
                    <Grid container spacing={0} alignItems="center" justify={"center"}>
                        <Grid item md={2}>
                            <Cached className={classes.refresh}/>
                        </Grid>
                        <Grid item md={10}>
                            <Typography variant={"body1"}
                                        className={classes.bodyText}>Your Estimated Rewards
                                <BootstrapTooltip title={longText} placement="top">
                                    <HelpOutline className={classes.helpIcon}/>
                                </BootstrapTooltip>
                            </Typography>

                            <Typography variant={"body1"}
                                        className={classes.price}>0.00 AMPL / month
                            </Typography>
                        </Grid>

                    </Grid>
                </Paper>
            </Grid>

            {connected === false ? (
                <Grid item md={12}>
                    <Paper elevation={0} variant="elevation" className={classes.connectBox}>
                        <Grid container spacing={0} alignItems="center" justify={"center"}>
                            <Grid item md={10}>
                                <Typography variant={"body1"} className={classes.connectText}>Connect your ethereum
                                    wallet
                                </Typography>
                            </Grid>
                            <Grid item md={2}>
                                <Button size={"large"} variant={"contained"} fullWidth={true}
                                        onClick={() => setOpenAccountPopUp(true)}
                                        className={classes.connectButton}>CONNECT</Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            ) : ""}

            {value !== null ? (
                <Grid item md={12}>
                    <Paper elevation={0} variant="elevation" className={classes.connectBox}>
                        <Grid container spacing={0} alignItems="center" justify={"center"}>
                            <Grid item md={7}>
                                <Typography variant={"body1"} className={classes.connectText}>Insufficient balance
                                </Typography>
                            </Grid>
                            <Grid item md={5}>
                                <Button size={"large"} variant={"contained"} fullWidth={true}
                                        onClick={() => handleInsufficientBalance(true)}
                                        className={classes.connectButton}>GET MOON-V1-BZRX-AMPL</Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            ) : ""}


            <Grid item md={12}>
                <Button size={"large"} variant={"contained"} fullWidth={true}
                        className={classes.withdraw}>WITHDRAW</Button>
            </Grid>
        </Grid>
    );
}

export default Deposit;
