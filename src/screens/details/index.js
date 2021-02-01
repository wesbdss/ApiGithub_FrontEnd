import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Navbar from '../components/navbar'
import api from "./../../services/api"
import Repository from './../components/repository'
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import {
    useParams
} from "react-router-dom";


const styleDetails = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column"
    },
    perfil: {
        display: "flex",
        flexDirection: "column",
        "& img": {
            width: '200px',
            height: '200px',
            margin: "50px auto 0px auto",
            borderRadius: "100%",
        },
        "& hr": {
            width: '80%'
        }
    },
    infos: {
        display: "flex",
        flexDirection: "column",
    },
    detalhe: {
        display: "flex",
        justifyContent: "space-between",
        width: "auto",
        "& hr": {
            width: "30%",
            margin: "0"
        }
    },
    infos1: {
        margin: " 0 auto 0 auto",
        textAlign: "center",
        color:"#869ccb",
    },
    detalhe1: {
        display: "flex",
        width: "80%",
        margin: "0 auto 0 auto",
        justifyContent: "space-between",
        textAlign: "center",
    },
    respository: {
        width: "80%",
        margin: "0 auto 0 auto"
    }
})

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: "#424242",
        marginTop:"20px",
        marginBottom:"20px",
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

export default function () {
    const { id } = useParams();
    const [user, setUser] = React.useState({});
    const [repo, setRepo] = React.useState([]);
    const classes = styleDetails();
    const list = useStyles();

    React.useEffect(async () => {
        try{
            let rest = await api('GET',"api/users/"+id+"/details");
            let rest1 = await api('GET',"api/users/"+id+"/repos");
            setUser(rest.response)
            setRepo(rest1.response)
            console.log(rest1)
        }catch(ex){
            alert(ex)
        }
    }, [])


    return (
        <div className={classes.root}>
            <Navbar></Navbar>
            <div className={classes.perfil}>
                <img src={user.avatar_url} alt="" />
                <div className={classes.infos1}>
                    <h1>{user.name}</h1>
                    <h3>id: {user.id}</h3>
                </div>
                <div className={classes.infos}>
                    <div className={classes.detalhe}>
                        <hr />
                        <hr />
                    </div>
                    <div className={classes.detalhe1}>
                        <p>Link Github: {user.html_url}</p>
                        <p>Login Creation: {`${user.created_at}`.substring(0, 10)}</p>
                    </div>
                </div>
                <hr />
            </div>
            <div className={classes.respository}>
                <List
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">Repository List </ListSubheader>
                    } className={list.root}>
                    <Repository disabled />
                    {repo.map((elem,i) =>{
                        return <Repository id={elem.id} repoName={elem.name} url={elem.url}/>

                    })}

                </List>
            </div>
            <Navbar></Navbar>
        </div>
    )
}
