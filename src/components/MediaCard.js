import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'
const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        marginBottom: '7px'
    },
    media: {
        height: 140,
    },
});

export default function MediaCard(props) {

    const classes = useStyles();

    const addToFavourites = () => {
        props.addToFavourites(props.result)
    }

    const deleteFromFavourites = () => {
        props.deleteFromFavourites(props.favourit)
    }
    const goBack = () => {
        props.history.goBack()
    }

    return (
        <Card className={classes.root}>
            {props.home ?
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={props.img}
                        title={props.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                : props.favourits ? <CardActionArea>
                    <Link to={`/favourites/${props.favourit._id}`}>
                        <CardMedia
                            className={classes.media}
                            image={props.favourit.imgUrl}
                            title={props.favourit.title}
                        />
                    </Link>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.favourit.title}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary" onClick={deleteFromFavourites}>
                            Unlike
                        </Button>
                    </CardActions>

                </CardActionArea>
                    :
                    props.isMatch ?
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={props.favourit.imgUrl}
                                title={props.favourit.title}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {props.favourit.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {props.favourit.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary" onClick={deleteFromFavourites}>
                                    Unlike
                                </Button>
                                <Link to='/favourites'>
                                    <Button size="small" color="primary">
                                        Back
                                 </Button>
                                </Link>
                            </CardActions>
                        </CardActionArea>

                        :
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={props.result.imgUrl}
                                title={props.result.title}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {props.result.title}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary" onClick={addToFavourites}>
                                    Like
                 </Button>
                            </CardActions>
                        </CardActionArea>
            }
        </Card >
    );
}