import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'
const mystyle = makeStyles({
    '@keyframes hoverCard': {
        '0%': {
            transform: 'translateY(0)',
            boxShadow: "#ffffdb 5px 5px 8px",
        },
        '50%': {
            transform: 'translateY(-10px)',
            boxShadow: "#b8dbeb 10px 10px 16px",
        },
        '100%': {
            transform: 'translateY(0)',
            boxShadow: "#ffffdb 5px 5px 8px",
        }
    },

    '@keyframes leds1': {
        '0%': { borderColor: "#5d5d62" },
        '50%': { borderColor: "#939399" },
        '100%': { borderColor: "#5d5d62" }
    },
    '@keyframes leds': {
        '0%': { boxShadow: "#5d5d62 5px 5px 8px" },
        '50%': { boxShadow: "#939399 5px 5px 8px" },
        '100%': { boxShadow: "#5d5d62 5px 5px 8px" }
    },
    root: {
        backgroundColor: "#424242",
        display: 'flex',
        borderRadius: "10px",
        boxShadow: "#5d5d62 5px 5px 8px",
        animation: "$leds 7s ease-in-out infinite",
        width: "100%",
        height: "100%",
        "& img": {
            position: "relative",
            width: "80px",
            height: "80px",
            marginLeft: "3%",
            marginRight: "5%",
            left: "0",
            alignSelf: "center",
            borderRadius: "200px",
            borderColor: "white 2px outlined"
        },
        "&:hover": {
            animation: "$hoverCard 2s ease-in-out infinite"
        }
    },
    infos: {
        display: "flex",
        flexDirection: "column",
        alignSelf: "center",
        alignItems: "center",
        width: "100%",
        "& h4": {
            color: "#90a9dfde",
            padding: "0",
            margin: "0",
            wordWrap: "break-word"
        },
        "& p": {
            margin: "0",
            color: "#a7a7a7",
            padding: "0",
            fontSize: "11px",
            marginBottom: 'auto',
            wordWrap: "break-word"
        }
    },
    "& hr": {
        animation: "$leds1 2s ease-in-out infinite",
    },
    '@media only screen and (max-width:780px)': {
        root: {
            backgroundColor: "#424242",
            display: 'flex',
            borderRadius: "10px",
            boxShadow: "#5d5d62 5px 5px 8px",
            animation: "$leds 7s ease-in-out infinite",
            "& img": {
                position: "relative",
                width: "100px",
                height: "100px",
            }
        },
        infos: {
            "& h4": {
                color: "#90a9dfde",
                padding: "0",
                margin: "0",
                fontSize: "1em",
                wordWrap: "break-word"
            },
            "& p": {
                margin: "0",
                color: "#a7a7a7",
                padding: "0",
                fontSize: "1em",
                marginBottom: 'auto',
                wordWrap: "break-word"
            }
        }
    }
});

export default function Card_git(props) {
    const classes = mystyle()
    const history = useHistory();
    const handleClickRedirect = (e) => {
        history.push("/details/" + props.username)
    }

    return (
        <div className={classes.root} onClick={handleClickRedirect} >
            <img src={props.image ? props.image : "https://cdn.discordapp.com/attachments/722697729381236767/805239035123335188/tenor_5.gif"} alt="" />

            <div className={classes.infos} >
                <hr style={{ width: "80%" }} />
                <h4 >{props.username ? props.username : "."}</h4>
                <p><strong>ID:</strong> {props.id ? props.id : '.'}</p>
                <hr style={{ width: "80%" }} />
            </div>
        </div >
    )
}
