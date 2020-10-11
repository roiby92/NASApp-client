import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import { fade,makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        border:'3px blue solid',
        marginBottom:'7px',
        backgroundColor: fade(theme.palette.common.white, 1.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
      },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}))

export default function SearchBar(props) {
    const classes = useStyles();

    const handleSearch = (event) => {
        props.handleSearch(event.target.value)
    }

    return (
        <div className={classes.search}>
            <div className={classes.searchIcon}>
            </div>
            <InputBase
                placeholder="Search…"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                value={props.searchValue}
                onChange={handleSearch}
            />
        </div>
    )
}
