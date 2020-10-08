import React, {useState} from 'react';
import '../App.css'
import {makeStyles} from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({

    box: {
        width: 'auto',
        padding: '10px 15px',
        marginTop: '0px',
        boxShadow: '0px -1px 25px -3px rgba(0, 0, 0, 0.1) !important'
    },
    bodyText: {
        fontSize: '1rem',
        textAlign: 'left',
        fontWeight: '300',
        lineHeight: '25px'
    },
    price: {
        fontSize: '14px',
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
    stats: {
        marginTop: '20px'
    },
    backdrop: {
        color: '#000',
        backgroundColor: "#fff"
    }
}));


function Stats() {
    const classes = useStyles();
    const [loading, setLoading] = useState(true)

    const [items, setItem] = useState([
        {
            id: 1,
            name: "Total Rewards",
            price: "128,973.78 AMPL"
        },
        {
            id: 2,
            name: "Total Deposits",
            price: "200,268.79 USD"
        },
        {
            id: 3,
            name: "Locked Rewards",
            price: "61,734.30 AMPL"
        },
        {
            id: 4,
            name: "Unlocked Rewards",
            price: "67,239.47 AMPL"
        },
        {
            id: 5,
            name: "Program duration",
            price: "43.2 days left"
        },
        {
            id: 6,
            name: "Reward unlock rate",
            price: "42,902.73 AMPL / month"
        }
    ])
    setInterval(function () {
        setLoading(false)
    }, 1000);

    return (<>
            {loading === true ? (
                <Backdrop className={classes.backdrop} open={loading}>
                    <CircularProgress color="inherit"/>
                </Backdrop>
            ) : (
                <Grid container spacing={2} alignItems="center" justify={"center"} className={classes.stats}>
                    {items.map((item, index) => (
                        <Grid item md={6} sm={6} xs={12} key={index}>
                            <Paper elevation={0} variant="elevation" className={classes.box}>
                                <Grid container spacing={0} alignItems="center" justify={"center"}>
                                    <Grid item md={12} sm={12} xs={12}>
                                        <Typography variant={"body1"}
                                                    className={classes.bodyText}>{item.name}
                                        </Typography>
                                    </Grid>
                                    <Grid item md={12} sm={12} xs={12}>
                                        <Typography variant={"body1"}
                                                    className={classes.price}>{item.price}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>)}
        </>
    );
}

export default Stats;
