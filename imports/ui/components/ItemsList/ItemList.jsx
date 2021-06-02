import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Item from '../Item';
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

export default function ItemList({items}) {
    const classes           = useStyles();
    const [items, setItems] = useState([]);

    return (
        <List className={classes.root}>
            {this.items.map(item => <Item />)}
            <Divider variant="inset" component="li" />
        </List>
    );
}


