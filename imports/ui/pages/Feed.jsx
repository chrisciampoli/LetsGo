import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Skeleton from '@material-ui/lab/skeleton';
import {MealsCollection} from "../../api/Model/MealsCollection";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

export default function Feed() {
    const classes = useStyles();
    const { meals, isLoading } = useTracker(() => {
        const noDataAvailable = { meals: [], pendingTasksCount: 0 };
        if (!Meteor.user()) {
            return noDataAvailable;
        }
        const handler = Meteor.subscribe('meals');

        if (!handler.ready()) {
            return { ...noDataAvailable, isLoading: true };
        }

        const meals = MealsCollection.find({}, {limit: 10});

        return { meals };
    });

    return (
        <React.Fragment>
            <Grid container spacing={4}>
                {(isLoading ? Array.from(new Array(3)) : meals).map((meal, index) => (
                    <Grid item key={meal ? meal._id : index} xs={12} sm={6} md={4}>
                        {meal ? (
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image={meal.image}
                                    title="Image title"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {meal.companyName} - {meal.name}
                                    </Typography>
                                    <Typography>
                                        {meal.ingredients}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        View
                                    </Button>
                                    <Button size="small" color="primary">
                                        Edit
                                    </Button>
                                </CardActions>
                            </Card>
                        ) : (
                            <Skeleton variant="rect" width={210} height={118} />
                        )}
                    </Grid>
                ))}
            </Grid>
        </React.Fragment>
    );
}