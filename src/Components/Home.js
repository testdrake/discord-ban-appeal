import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { oauth } from '../App';
import { ReactComponent as DiscordLogo } from '../Images/Discord-Logo-White.svg';
import { makeStyles } from '@material-ui/core/styles';

const crypto = require('crypto');

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        backgroundColor: '#121212', // Dark background for the whole view
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    button: {
        backgroundColor: '#5865F2', // Primary blue color
        color: '#ffffff',
        padding: '12px 24px',
        borderRadius: '5px',
        fontSize: '16px',
        fontWeight: 'bold',
        transition: 'background-color 0.3s ease, transform 0.2s ease',
        '&:hover': {
            backgroundColor: '#4752c4', // Darker blue on hover
            transform: 'translateY(-2px)', // Lift effect
        },
        '&:active': {
            backgroundColor: '#4752c4',
            transform: 'translateY(0)', // Reset lift effect on active
        },
        display: 'flex',
        alignItems: 'center',
    },
    logo: {
        width: '25px',
        height: 'auto',
        marginRight: '8px', // Space between icon and text
    },
}));

class Home extends Component {
    render() {
        const classes = useStyles();
        const url = oauth.generateAuthUrl({
            scope: ['identify', 'email'],
            state: crypto.randomBytes(16).toString('hex'), // Generate random state for security
        });

        return (
            <div className={classes.root}>
                <Grid container alignItems="center" justifyContent="center">
                    <Grid item xs={12}>
                        <Button 
                            startIcon={<DiscordLogo className={classes.logo} />} 
                            href={url} 
                            size="large" 
                            className={classes.button}
                            aria-label="Login with Discord" // Added accessibility label
                        >
                            Login with Discord
                        </Button>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Home;
