import React from 'react';
import { useHistory } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import AppBar from './AppBar'


function Layout(props) {
    let history = useHistory();

    function handleClick(name) {
        if (name === 'home') {
            history.push("/");
        }
        else if (name === 'search') {
            history.push("/search");
        }
        else if (name === 'favourites') {
            history.push("/favourites");
        }
    }

    return (
        <Grid container
            spacing={8}
            direction="column"
            justify="space-between"
            alignItems="center">
            <Grid item xs={12}>
                <AppBar handleClick={handleClick} history={history} />
            </Grid >
            <Grid item xs={12} spacing={6} direction="column"
            justify="space-between"
            alignItems="center">
                    {props.children}
            </Grid>
        </Grid>
    )

}

export default Layout;