import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import ListItem from '@material-ui/core/ListItem';



const useStyles = makeStyles({
    root: {
        display: 'flex',
        textAlign: "center",
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
            width: "60%",
        }
    },
    '@media only screen and (max-width:480px)':{

        root: {
            '& #id': {
                display:"none",
            },
            '& #name': {
                display:"none",
            }
            ,
            '& #url': {
                fontSize:"10px",
                overflowX:"auto"
            }
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
