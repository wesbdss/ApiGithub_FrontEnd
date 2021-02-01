import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Navbar from "./../components/navbar"
import Header_git from "./../components/header_git"
import Card_git from "../components/Card_git"
import Button from '@material-ui/core/Button'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import api from "./../../services/api"


const mystyle = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#212121",
        height: "100%",
        width: "100%",
        color: "#ffffff"
    },
})

const sectionStyles = makeStyles({
    root: {
        display: "flex",
        // marginLeft:"auto",
        // marginRight:"auto",
        justifyContent: "space-evenly",
        height: "auto"
    },
    linha: {
        display: "flex",
        flexDirection: "column",
        width: "20%",
        height: "100%",
        justifyContent: "space-around",
        marginBottom: "20px",
        "& div": {
            marginTop: "10px",
            marginBottom: "10px",
        }
    },
    roll: {
        display: "flex",
        alignSelf: "center",
        alignItems: "center",
        fontSize: "30px",
    },
    '@media only screen and (max-width:780px)': {
        root: {
            flexDirection: "column",
            marginLeft: "unset",
            marginRight: "unset",
            justifyContent: "unset",
        },
        linha: {
            marginBottom: "0",
            width: "80%",
            marginLeft: "auto",
            marginRight: "auto"
        },
        roll: {
            fontSize: "400%",
            "& button": {
                width: "130px",
                height: "130px",

                "& svg": {
                    fontSize: "-webkit-xxx-large !important"
                }
            }
        }
    }
})

export default function () {


    const [users, setUsers] = React.useState([])
    const [iteratorPage, setIteratorPage] = React.useState({ current: 1, nextPage: null, previousPage: null });

    React.useEffect(() => {
        updateIterator("api/users?since=0", false, "init")
    }, [])


    const updateIterator = async (url, fullurl = false, iter = false) => {
        try {
            let res = await api("GET", url, fullurl);
            console.log(res)
            var itera = iteratorPage;
            itera.nextPage = await res.nextPage;
            itera.previousPage = await res.previousPage;
            if (iter != "init") {
                if (iter) itera.current = itera.current + 1
                else itera.current = itera.current - 1
            }
            await setIteratorPage(itera)
            await (() => setUsers(res.response))()


        } catch (Ex) {
            alert(Ex)

        }
        console.log(iteratorPage)
        console.log(users)
    }

    const handleClickNext = async (e) => {
        document.getElementById('butNext').disabled = true;
        await updateIterator(iteratorPage.nextPage, true, true)
        document.getElementById('butNext').disabled = false;

    }

    const handleClickBack = async (e) => {
        if (iteratorPage.current <= 1)
            return
        document.getElementById('butBack').disabled = true;
        await updateIterator(iteratorPage.previousPage, true, false)
        document.getElementById('butBack').disabled = false;

    }

    const classes = mystyle()
    const clsection = sectionStyles()
    return (
        <div className={classes.root}>
            <Navbar />
            <Header_git />

            <section className={clsection.root}>
                <div className={clsection.linha}>
                    {users.slice(0, 5).map((user, i) => {
                        return <Card_git key={i} username={user.login} id={user.id} image={user.avatar_url} />
                    })}
                </div>

                <div className={clsection.linha}>
                    {users.slice(5, 10).map((user, i) => {
                        return <Card_git key={i} username={user.login} id={user.id} image={user.avatar_url} />
                    })}
                </div>

                <div className={clsection.linha}>
                    {users.slice(10, 15).map((user, i) => {
                        return <Card_git key={i} username={user.login} id={user.id} image={user.avatar_url} />
                    })}
                </div>

                <div className={clsection.linha}>
                    {users.slice(15, 20).map((user, i) => {
                        return <Card_git key={i} username={user.login} id={user.id} image={user.avatar_url} />
                    })}
                </div>
            </section>
            <section className={clsection.roll}>
                <Button id="butBack" onClick={handleClickBack}>
                    <ArrowBackIosIcon style={{ color: "white", fontSize: "large" }} />
                </Button>
                <span>{iteratorPage.current}</span>
                <Button id="butNext" onClick={handleClickNext} >
                    <ArrowForwardIosIcon style={{ color: "white", fontSize: "large" }} />
                </Button>
            </section>
            <br/>
            <Navbar />
        </div>
    )
}
