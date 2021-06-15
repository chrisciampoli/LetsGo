import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import {NavLink} from "react-router-dom";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        maxWidth: "100%",
        position: "fixed",
        bottom: 0,
        width: "100%"
    },
});

export default function Nav() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Paper square className={classes.root}>
            <Tabs
                value={value}
                onChange={handleChange}
                centered
            >
                <a><NavLink to="/"><Tab icon={<PhoneIcon />} label="FEED"/></NavLink></a>
                <a><NavLink to="/myMeals"><Tab icon={<FavoriteIcon />} label="MY MEALS" /></NavLink></a>
                <a><NavLink to="/account"><Tab icon={<PersonPinIcon />} label="SETTINGS" /></NavLink></a>
            </Tabs>
        </Paper>
    );
}