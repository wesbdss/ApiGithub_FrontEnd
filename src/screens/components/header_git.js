import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import img1 from "./assets/github.png"

const useStyles = makeStyles({
    "@keyframes floater": {
        "0%": {
            opacity: "100%",
            transform: "translateY(0%)",
        }, "50%": {
            opacity: "90%",
            transform: "translateY(-8%)",
        },

        "100%": {
            opacity: "100%",
            transform: "translateY(0%)",

        }
    }, header: {
        width: "100%",
        height: "auto",
        marginTop: "30px",
        "& #img_git": {
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            height: "100%",
            "& img": {
                margin: "auto",
                animation: "$floater 5s ease-in-out infinite"
            },

        },

    }
});

export default function () {
    const classes = useStyles();
    return (
        <header className={classes.header} >
            <div id="img_git">
                <img src={img1} alt="" />
                <h1>GITHUB API HUB</h1>
            </div>
            <hr style={{borderColor: 'white', width: '90%'}}/>

        </header >
    )
}
