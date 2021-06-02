import { CssBaseline, makeStyles } from "@material-ui/core";
import Demo from "./demo";
import Formulaire from "./form"
import Head from "./head"

const useStyle = makeStyles((theme)=>({
    root:{
        width:"100%",
        backgroundColor: "#101010",
        backgroundRepeat: 'no-repeat',
        minHeight: "40em",
        color: "#fff",
        position: "relative",
        marginBottom: "234px",
    }
}))

const Contact =()=>{
    const classes = useStyle()
    return <>
            <div className={classes.root}>
                <CssBaseline/>
                <Demo/>
            </div>
        </>
}

export default Contact;