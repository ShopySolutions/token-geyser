import React from 'react';
import '../App.css'
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import {HelpOutline, Phone} from "@material-ui/icons";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/styles";
import Popper from "@material-ui/core/Popper";
import Fade from "@material-ui/core/Fade";
import Tooltip from "@material-ui/core/Tooltip";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Deposit from "../TabComponents/Deposit";
import Withdraw from "../TabComponents/Withdraw";
import Stats from "../TabComponents/Stats";

const longText = `
Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.
Praesent non nunc mollis, fermentum neque at, semper arcu.
Nullam eget est sed sem iaculis gravida eget vitae justo.
`;


const useStyles = makeStyles((theme) => ({
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
        fontSize: '1rem',
        textAlign: 'left',
        fontWeight: '600',
        lineHeight: '25px',
        color: "#000"
    },
    helpIconGrid: {
        textAlign: "right"
    },
    helpIcon: {
        color: "#2c2c2c",
        fontSize: "1.25em"
    },
    card: {
        padding: '12px',
        marginTop: "50px",
        boxShadow: '0px -2px 25px -3px rgba(0, 0, 0, 0.1) !important'
    },
    tabs: {
        marginTop: "12px"
    },
    tabsStyle: {
        backgroundColor: "#000",
        color: '#fff',
        borderRadius: "8px",
        '& .MuiTab-textColorPrimary': {
            color: '#fff',
            fontWeight: "bold"
        },
        '& .MuiTab-textColorPrimary.Mui-selected': {
            color: '#000000',
            border: '1.5px solid #2c2c2c',
            background: '#fff',
            boxSizing: 'border-box',
            borderRadius: '10px',
            fontWeight: "bold"
        }
    },
    indicator: {
        backgroundColor: "#000000",
    },
    tabRoot: {
        width: "100%",
    }
}));

const useStylesBootstrap = makeStyles((theme) => ({
    arrow: {
        color: theme.palette.common.black,
    },
    tooltip: {
        backgroundColor: theme.palette.common.black,
    },
}));

function BootstrapTooltip(props) {
    const classes = useStylesBootstrap();

    return <Tooltip arrow classes={classes} {...props} />;
}

function Main() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [placement, setPlacement] = React.useState();
    const handleClick = (newPlacement) => (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((prev) => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
    };

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Container maxWidth="md" component="main">
            <Grid container spacing={5} alignItems="center" justify={"center"}>
                <Grid item md={9}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Grid container spacing={2} alignItems="center" justify={"center"}>
                                <Grid item md={4}>
                                    <Paper elevation={0} variant="outlined" className={classes.box}>
                                        <Grid container spacing={0} alignItems="center" justify={"center"}>
                                            <Grid item md={10}>
                                                <Typography variant={"body1"}
                                                            className={classes.bodyText}>APY</Typography>
                                            </Grid>
                                            <Grid item md={2} className={classes.helpIconGrid}>
                                                <BootstrapTooltip title={longText} placement="top">
                                                    <HelpOutline className={classes.helpIcon}/>
                                                </BootstrapTooltip> </Grid>
                                            <Grid item md={12}>
                                                <Typography variant={"body1"}
                                                            className={classes.price}>240.43%</Typography>
                                            </Grid>
                                        </Grid>

                                    </Paper>
                                </Grid>

                                <Grid item md={4}>
                                    <Paper elevation={0} variant="outlined" className={classes.box}>
                                        <Grid container spacing={0} alignItems="center" justify={"center"}>
                                            <Grid item md={10}>
                                                <Typography variant={"body1"}
                                                            className={classes.bodyText}>Reward Multiplier
                                                </Typography>
                                            </Grid>
                                            <Grid item md={2} className={classes.helpIconGrid}>
                                                <BootstrapTooltip title={longText} placement="top">
                                                    <HelpOutline className={classes.helpIcon}/>
                                                </BootstrapTooltip>
                                            </Grid>
                                            <Grid item md={12}>
                                                <Typography variant={"body1"}
                                                            className={classes.price}>1.0x
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                </Grid>

                                <Grid item md={4}>
                                    <Paper elevation={0} variant="outlined" className={classes.box}>
                                        <Grid container spacing={0} alignItems="center" justify={"center"}>
                                            <Grid item md={10}>
                                                <Typography variant={"body1"}
                                                            className={classes.bodyText}>Accrued Rewards
                                                </Typography>
                                            </Grid>
                                            <Grid item md={2} className={classes.helpIconGrid}>
                                                <BootstrapTooltip title={longText} placement="top">
                                                    <HelpOutline className={classes.helpIcon}/>
                                                </BootstrapTooltip> </Grid>
                                            <Grid item md={12}>
                                                <Typography variant={"body1"}
                                                            className={classes.price}>0.00 AMPL
                                                </Typography>
                                            </Grid>
                                        </Grid>

                                    </Paper>
                                </Grid>
                            </Grid>

                            <Grid container spacing={2} alignItems="center" justify={"center"} className={classes.tabs}>
                                <Tabs
                                    classes={{root: classes.tabRoot, indicator: classes.indicator}}

                                    className={classes.tabsStyle}
                                    value={value}
                                    onChange={handleChange}
                                    variant="fullWidth"
                                    indicatorColor="primary"
                                    textColor="primary"
                                    aria-label="icon tabs example"
                                >
                                    <Tab label="DEPOSIT"/>
                                    <Tab label="WITHDRAW"/>
                                    <Tab label="STATS"/>
                                </Tabs>
                            </Grid>
                            <Grid container spacing={2} alignItems="center" justify={"center"}>
                                {value === 0 ? <Deposit/> : ""}
                                {value === 1 ? <Withdraw/> : ""}
                                {value === 2 ? <Stats/> : ""}
                            </Grid>


                        </CardContent>
                        <CardActions>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>


            <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
                {({TransitionProps}) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <Paper>
                            <Typography className={classes.typography}>{longText}</Typography>
                        </Paper>
                    </Fade>
                )}
            </Popper>
        </Container>

    );
}

export default Main;
