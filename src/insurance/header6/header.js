import { CssBaseline, makeStyles } from "@material-ui/core"
import Container from "./container"
import Navbar from "./navbar"


const useStyle = makeStyles((theme)=>({
    root:{
        width:"100%",
        backgroundImage:"url('/img/bg-4.jpg')",
        backgroundRepeat: 'no-repeat',
        minHeight: "40em",
        color: "#fff",
        position: "relative",
        marginBottom: "105px",
    }
}))

const Header =()=>{

    const classes = useStyle()
    return <>
            <div className={classes.root}>
                <CssBaseline/>
                <Navbar/>
                <Container/>
            </div>
        </>
}
export default Header;