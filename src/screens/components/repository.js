import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import ListItem from '@material-ui/core/ListItem';



const useStyles = makeStyles({
    root: {
        display: 'flex',
        textAlign: "center",
        fontSize: "1px !important !important",
        justifyContent: "space-around",
        '& #id': {
            color: "#869ccb",
            width: "10%"
        },
        '& #name': {
            width: "20%"
        }
        ,
        '& #url': {
            width: "60%"
        }
    }
})


export default function (props) {
    const classes = useStyles();

  
    return (
        <ListItem button className={classes.root} >
            <p id="id">{props.id}</p>
            <p id="name">{props.repoName}</p>
            <p id="url">{props.url}</p>
        </ListItem>

    )
}
