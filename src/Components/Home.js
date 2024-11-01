import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { oauth } from "../App";
import { ReactComponent as DiscordLogo } from '../Images/Discord-Logo-White.svg';
import { makeStyles } from '@material-ui/core/styles';

const crypto = require('crypto');

const useStyles = makeStyles((theme) => ({
    container: {
        minHeight: '100vh',
        backgroundColor: '#121212',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#5865F2',
        color: '#FFFFFF',
        padding: '12px 24px',
        borderRadius: '8px',
        fontSize: '16px',
        fontWeight: '600',
        transition: 'background-color 0.2s ease',
        '&:hover': {
            backgroundColor: '#4752c4',
        },
        '&:focus': {
            outline: 'none',
            boxShadow: '0 0 5px #5865F2',
        },
    },
    logo: {
        width: '25px',
        height: 'auto',
        marginRight: theme.spacing(1),
    },
}));

class Home extends Component {
    render() {
        const classes = useStyles();
        const url = oauth.generateAuthUrl({
            scope: ["identify", "email"],
            state: crypto.randomBytes(16).toString("hex"),
        });

        return (
            <Grid container className={classes.container}>
                <Grid item xs={12}>
                    <Button
                        startIcon={<DiscordLogo className={classes.logo} />}
                        href={url}
                        size={"large"}
                        className={classes.button}
                    >
                        Login with Discord
                    </Button>
                </Grid>
            </Grid>
        );
    }
}

export default Home;
