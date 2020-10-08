import React, {useContext, useState} from 'react';
import '../App.css'
import {makeStyles} from "@material-ui/styles";
import {TokenGeyserContext} from "../Context/TokenGeyserContext";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import {AccountBalanceWallet, Close} from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Grid from "@material-ui/core/Grid";
import clsx from "clsx";
import WalletConnect from "../images/WalletConnect.svg";
import CoinBase from "../images/CoinBase.svg";
import Link from "@material-ui/core/Link";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({

    modalHeader: {
        display: "flex"
    },
    accountButton: {

        display: 'flex',
        alignItems: 'center',
        border: 'none',
        margin: '0.33em 0',
        background: 'inherit',
        fontSize: 'inherit',
        width: '18em',
        padding: '0.625em 1.25em',
        transition: 'box-shadow 150ms ease-in-out, background 200ms ease-in-out',
        borderRadius: '40px',
        cursor: 'pointer',
        color: 'inherit',
        lineHeight: '1.15',
        fontFamily: 'inherit',
        "&:hover": {
            boxShadow: '0 2px 10px 0 rgba(0, 0, 0, 0.1)',
            borderRadius: "40px"
        }

    },
    active: {
        background: '#c3c3c3',
    },
    accountIcon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        height: '40px',
        width: '40px',
        lineHeight: '40px'
    },
    accountName: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: 'inherit',
        marginLeft: '0.66em',
        fontWeight: 'bold',
        textAlign: 'left',
        fontFamily: 'inherit'
    },
    modalIcon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 'inherit',
        fontFamily: 'inherit',
        padding: '0.3em',
        borderRadius: '30px',
        background: '#eeeeee'
    },
    headerModal: {
        marginTop: "10px",
        fontWeight: "bold",
        fontSize: "18px",
        marginLeft: "10px"
    },
    bodyTextModal: {
        fontSize: "12px",
        color: "#000"
    }, closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },

}));


function AccountModal() {
    const classes = useStyles();
    const {openAccountPopup, setOpenAccountPopUp, connected, setConnected, setConnectedName, connectedName} = useContext(TokenGeyserContext)
    const [walletInfo, setWalletInfo] = useState(false)
    return (

        <Dialog
            open={openAccountPopup}
            onClose={() => setOpenAccountPopUp(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                <Grid container direction={"row"} alignContent={"space-between"}>
                    <div className={classes.modalHeader}>
                        <div className={classes.modalIcon}>
                            <AccountBalanceWallet/>&nbsp;&nbsp;
                        </div>
                        <Typography component={"h5"} variant={"body1"} className={classes.headerModal}> Select
                            Wallet</Typography>
                    </div>
                    <IconButton aria-label="close" className={classes.closeButton}
                                onClick={() => setOpenAccountPopUp(false)}>
                        <Close/>
                    </IconButton>


                </Grid>
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description" className={classes.bodyTextModal}>Please select a
                    wallet to connect to this
                    dapp:</DialogContentText>

                <Grid container direction={"row"} spacing={2}>
                    <Grid item>
                        <button
                            className={clsx(classes.accountButton, connectedName === "MetaMask" ? classes.active : "")}
                            onClick={() => {
                                setConnected(true)
                                setConnectedName('MetaMask')
                            }}>
                            <div className="svelte-1skxsnk">
                                <img
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAoCAMAAACl6XjsAAABfVBMVEVHcEx/Rh2ARx2ESiLwiCLMu67cfCagZDOddlJ+Rx7pgiPlfyPshSN/Rxx+Rh2CSB6ASB2JTR7gkkl1SCbQciPUwLLMu6+BSB5/Rx2DSR5+RxzefR3ogCPlfiPGuLHhfiP2jCTvhyN/Rx3nfyPfo2/lfCTIuK7kfyP2jCPkfiPuhSTFtKjogSThfCR/Rx5+Rx3lfiPeeiTDs6koIR2DSh/ifCajWx6qYCDckVOBSR7jfiTyiCOYYTXLcCKpXiHEs6fDs6fCsKYjHBwhHx8iHR0iICB1a2ZyaGIiHyCPTx7ogSTlfyTwhyOASB7ziSTngCTrgyT2jCTthCT1iyPuhCX4jSSESh5/Rx6ITR/+kSTYbyDheSLjfSPBaiPacSDdcyCvYSK0ZCGTVSPGcSblhi/ngSPqgSTdu56mXSDaeSP6jiPmfSD5jSQcGhvimFdqUj/TbSJARUsyQE6tbDLOeyzZx7nayr7hsog7Nza/raDjjUF/VTjFtKhKNCB0amRMd0DeAAAASnRSTlMAe/oOkv4TAwgrpnA9n1n9vkYfHPv+xu2r9mgN6uI4Us5ji/n9Ln7G7pO61/K35ZXYiUji5s21zMnb0/r5aMipm2UkYjSGnPy0/l1QcU4AAALOSURBVHhehdJXXxpNFAbwBYIgoICCIKhgi91ETe/9fZ3ZXui92bvp5bPnzCwzK79c+Fxws3/mOXN2BSe+0Tnh1oBKTI7eqvypSUnaHP4XDIVeRn1cucKSJIUj4wMF6cVgYDr2KsrVXE4imUx6mEmHgoH786ZZ3b3H/usZAWW7R3fsAFFNhCrVwmaKdY4ylZdaqEgjI4yxUm7mpAjvjABjbt/QIIZJ1MF+Pu+eY3MMuwEwl2sfEidiBcdaeUl6yrcEkzks38IWMBnG2gUVTrIljSco4LUNGZxRaeZASW4X63Q5hznHyTGqpAfRwU5+WKGtaxC1SQsSKb+tfOyeTHWRDEyuNGhpf7me5EBjoYowFoEZ+gFx7pH+FYaTA0qBfSG6ErI2KcxZJMxVDhSkS1sV4twuNls0wVi4CYpEJ6yHwXEmpHJ5OxJTGNHhMLjH/BP0uQp2GpTwVhHY+orAExLt9ChxWhFWprYcFihaNKLDegZt7U4FuRpbPtbssONgRNECVjm6wYJFrR+5XK/VavVa9byO4L3qpWqMl/qznGlipV46b5xdturYIK//54sND7sAR3SnlfbZxeVFFYkw3MHV9dIQv8CAQ7qlXl+1kUoO78mMsQvwXiRbh8VjEenEqat9NlvUBmLJol2v6jDe89U0Vb7sDQa7k/UjxZSp04mjpw1ewBBRuV6qVbCCRFmzNNE0rOVZP2EZE9F0u10F10qQsr1hVTQ0WTSs7KwP2NA0wjxlUHWCmJRlo5jNELdlYidQaR92RINRp1P4vfPxnSAszis3XLkMD3Gn8+P0dGHh697e3vdvJyf/f4CrLqm8xFx/+IQ+jH/+QgK/wHbek9ZZwhSkq1MbwUW/f+buRJyIfn79+e/TuGBfomfi6UBmjH3NIL19Ffd6J2YEmhX92UqGbpEHzlzzeuNxL6ht9lmG0g5w5PbrtbWJN2/HyGB/AYd1QUewqrrRAAAAAElFTkSuQmCC"
                                    srcSet="data:image/png;base64,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"
                                    alt="MetaMask" className={classes.accountIcon}/></div>
                            <span className={classes.accountName}>MetaMask </span>
                        </button>
                    </Grid>
                    <Grid item>

                        <button
                            className={clsx(classes.accountButton, connectedName === "WalletConnect" ? classes.active : "")}
                            onClick={() => {
                                setConnected(true)
                                setConnectedName('WalletConnect')
                            }}>
                            <div className="svelte-1skxsnk">
                                <img src={WalletConnect} alt={"WalletConnect"}/>
                            </div>
                            <span className={classes.accountName}>WalletConnect </span>
                        </button>
                    </Grid>

                </Grid>

                <Grid container direction={"row"} spacing={2}>
                    <Grid item>
                        <button
                            className={clsx(classes.accountButton, connectedName === "Coinbase Wallet" ? classes.active : "")}
                            onClick={() => {
                                setConnected(true)
                                setConnectedName('Coinbase Wallet')
                            }}>
                            <div className="svelte-1skxsnk">
                                <img src={CoinBase} alt={"Coinbase Wallet"} className={classes.accountIcon}/>
                            </div>
                            <span className={classes.accountName}>Coinbase Wallet </span>
                        </button>
                    </Grid>

                    <Grid item>

                        <button
                            className={clsx(classes.accountButton, connectedName === "Authereum" ? classes.active : "")}
                            onClick={() => {
                                setConnected(true)
                                setConnectedName('Authereum')
                            }}>
                            <div className="svelte-1skxsnk">
                                <img
                                    src="data:image/png;base64,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"
                                    alt="Authereum" className="svelte-1skxsnk" className={classes.accountIcon}/>
                            </div>
                            <span className={classes.accountName}>Authereum </span>
                        </button>
                    </Grid>
                </Grid>


            </DialogContent>

            <DialogContent>

                <Link href="#" onClick={() => setWalletInfo(!walletInfo)}>What is wallet ?</Link>


                {walletInfo === true ? (<p>

                    Wallets are used to send, receive, and store digital assets like Ether. Wallets come in many
                    forms. They are either built into your browser, an extension added to your browser, a piece of
                    hardware plugged into your computer or even an app on your phone. For more information about
                    wallets,<a
                    href={'https://docs.ethhub.io/using-ethereum/wallets/intro-to-ethereum-wallets/'} target={"_blank"}> see this
                    explanation.</a>

                </p>) : ""}

            </DialogContent>

        </Dialog>
    );
}

export default AccountModal;
