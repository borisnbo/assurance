import { Box, Grid, TextField, Typography, makeStyles, Toolbar, Paper, Tabs, Tab } from "@material-ui/core";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import RedditIcon from '@material-ui/icons/Reddit';
import PinterestIcon from '@material-ui/icons/Pinterest';
import TwoWheelerSharpIcon from '@material-ui/icons/TwoWheelerSharp';

const useStyle = makeStyles((theme)=>({
    root: {
        textAlign: "center",
        paddingLeft: "5%",
        paddingRight: "5%"
    },
    paper: {
        width:"100%"
    },
    form: {
        marginTop: "15px",
        backgroundColor: "#61c9fb"

    }
}))

const Content = ()=>{
    const classes = useStyle()
    return <>
    <div className={classes.root} className={classes.root}>
        <div>
            <Grid container spacing="1">
                <Grid item sm={2} md={2}>
                    <Typography ><FacebookIcon style={{ fontSize:70 }} /></Typography>
                </Grid>
                <Grid item sm={2} md={2}>
                    <Typography ><TwitterIcon style={{ fontSize:70 }} /></Typography>
                </Grid>
                <Grid item sm={2} md={2}>
                    <Typography ><LinkedInIcon style={{ fontSize:70 }} /></Typography>
                </Grid>
                <Grid item sm={2} md={2}>
                    <Typography ><PinterestIcon style={{ fontSize:70 }} /></Typography>
                </Grid>
                <Grid item sm={2} md={2}>
                    <Typography ><TwoWheelerSharpIcon style={{ fontSize:70 }} /></Typography>
                </Grid>
                <Grid item sm={2} md={2}>
                    <Typography ><RedditIcon style={{ fontSize:70 }} /></Typography>
                </Grid>
            </Grid>
        </div>
        <div className={classes.form}>
            <Box>
                <Toolbar>
                    <Grid container style={{width: "100%"}}>
                        <Grid item md={6}>
                            Subscribe For Latest News Letter
                        </Grid>
                        <Grid item md={6}>
                            <TextField fullWidth/>
                        </Grid>
                    </Grid>
                </Toolbar>
            </Box>
        </div>
    </div>
</>
}
export default Content;