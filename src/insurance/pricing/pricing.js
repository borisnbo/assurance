import { Box, Button, Card, CardContent, Grid, List, ListItem, ListItemText, makeStyles } from "@material-ui/core"
import { CheckCircle } from "@material-ui/icons"

const items = [
    {
        title: "Free",
        desc : "Organize accros all\n apps by hand"
    },
    {
        title: "Standard",
        desc : "Organize accros all\n apps by hand",
        style: {
            backgroundColor:"#000",
            color: "#fff",
            height: "530px",
            marginTop: "-15px"
        }
    },
    {
        title: "Premium",
        desc : "Organize accros all\n apps by hand"
    },
]

const useStyle = makeStyles((theme)=>({
    root: {
        textAlign: 'center'
    },
    time: {
        fontSize: '15px',
        marginLeft: '-10px'
    },
    prices: {
        paddingLeft:"15%",
        paddingRight:"15%",
        marginTop: "5%",
        marginBottom: "5%",
    },
    list:{
        fontSize: "5px"
    },
}))

const Pricing = ()=>{

    const classes = useStyle()

    return (
        <div className={classes.root}>
            <div className={classes.title}>
                <h1>Pricing</h1>
                <p>Problems trying to resolve conflict <br/> between the two major realms of classical physics. Newtonians Mecanics</p>
            </div>
            <div className={classes.prices}>
                <Grid container spacing='1'>
                    {items.map(it=>(
                    <Grid item xs="12" sm="4" md="4">
                        <Card style={it.style}>
                            <CardContent>
                                <h1>{it.title}</h1>
                                <h5>{it.desc}</h5>
                                <span>
                                    <h1 style={{color:"blue"}}>0 <sup>$</sup><span className={classes.time}><sub>per Month</sub></span></h1>
                                </span>
                                <div className={classes.list}>
                                    <List className={classes.list}>
                                        {[1,2,3].map(()=>(
                                        <ListItem Button>
                                            <CheckCircle  style={{ color: 'green'}}/> 
                                            <ListItemText primary="Unlimited Product Update"></ListItemText>
                                        </ListItem>
                                        ))}
                                        <ListItem Button>
                                            <CheckCircle  style={{ color: 'grey'}}/> 
                                            <ListItemText primary="1GB cloud storage"></ListItemText>
                                        </ListItem>
                                        <ListItem Button>
                                            <CheckCircle  style={{ color: 'grey'}}/> 
                                            <ListItemText primary="Email and community support"></ListItemText>
                                        </ListItem>
                                    </List>
                                </div>
                                <Button variant="contained" color="primary">Try for free</Button>
                            </CardContent>
                        </Card>
                    </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    )
}

export default Pricing;