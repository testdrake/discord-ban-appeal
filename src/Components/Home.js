import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { oauth } from "../App";
import { ReactComponent as DiscordLogo } from '../Images/Discord-Logo-White.svg';

const crypto = require('crypto');

class Home extends Component {
    render() {
        const url = oauth.generateAuthUrl({
            scope: ["identify", "email"],
            state: crypto.randomBytes(16).toString("hex"), // Random bytes for state
        });
        return (
            <Grid container alignItems={"center"} justify="center" direction="column">
                <Grid item xs={12}>
                    <Button
                        startIcon={<DiscordLogo style={{ width: '25px', height: 'auto' }} />}
                        href={url}
                        size={"large"}
                        className={"button"}
                    >
                        <b>Login with Discord</b>
                    </Button>
                </Grid>
            </Grid>
        );
    }
}

export default Home;
