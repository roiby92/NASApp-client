import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

export default function SimpleTabs(props) {
    const classes = useStyles();

    const handleClick = (name) => {  
        props.handleClick(name)
    }

    return (
        <AppBar className={classes.root} >
            <Tabs aria-label="simple tabs example">
                <Tab label="Home" onClick={()=>handleClick("home")} />
                <Tab label="Search" onClick={()=>handleClick("search")} />
                <Tab label="Favourites"  onClick={()=>handleClick("favourites")} />
            </Tabs>
        </AppBar>
    );
}