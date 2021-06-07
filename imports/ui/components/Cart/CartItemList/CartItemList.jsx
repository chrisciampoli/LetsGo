    import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from "@material-ui/core/ListItem";
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '36ch',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));

export default function CartItemList() {
    const classes           = useStyles();
    const [items, setItems] = useState([]);

    return (
        <List className={classes.root}>
            {this.items = [{name: 'test'}, {name: 'test2'}, {name: 'test3'}].map(item => <ListItem />)}
            <Divider variant="inset" component="li" />
        </List>
    );
}


