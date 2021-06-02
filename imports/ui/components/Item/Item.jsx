import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";
import Typography from "@material-ui/core/Typography";

export default function Item() {
    return (
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
                primary="Oui Oui"
                secondary={
                    <React.Fragment>
                        <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                        >
                            Sandra Adams
                        </Typography>
                        {' — Do you have Paris recommendations? Have you ever…'}
                    </React.Fragment>
                }
            />
        </ListItem>
    )
}