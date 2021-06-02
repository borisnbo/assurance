import { Button, Grid, ListItem, ListItemText, makeStyles } from "@material-ui/core"

const useStyle = makeStyles((theme)=>({

    header: {
        paddingLeft: "10%",
        paddingRight: "10%",
    },
    content: {
        paddingLeft: "10%",
        marginTop: '2%',
        backgroundColor:"#fff"
    },
}))

const Footer = ()=>{
    const classes = useStyle()
    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <Grid container xs>
                    <Grid item xs='12' sm='8'>
                        <ListItemText primary="Consulting Agency For Your Business"
                                        secondary="The quick fox jumps over the lazy dog" />
                    </Grid>
                    <Grid item xs='12' sm='4'>
                        <Button variant='contained' color="primary">Contact Us</Button>
                    </Grid>
                </Grid>
            </div>
            <div className={classes.content}>
                <Grid container spacing="3">
                    <Grid item xs="12" sm="2">
                        <ListItem>
                            <ListItemText primary="Company Info"/>
                        </ListItem>
                        <ListItem>
                            <ListItemText secondary="About Us"/>
                        </ListItem>
                        <ListItem>
                            <ListItemText secondary="Carrier"/>
                        </ListItem>
                        <ListItem>
                            <ListItemText secondary="We are hiring"/>
                        </ListItem>
                        <ListItem>
                            <ListItemText secondary="Blog"/>
                        </ListItem>
                    </Grid>
                    <Grid item xs="12" sm="2">
                        <ListItem>
                            <ListItemText primary="Legal"/>
                        </ListItem>
                        <ListItem>
                            <ListItemText secondary="About Us"/>
                        </ListItem>
                        <ListItem>
                            <ListItemText secondary="Carrier"/>
                        </ListItem>
                        <ListItem>
                            <ListItemText secondary="We are hiring"/>
                        </ListItem>
                        <ListItem>
                            <ListItemText secondary="Blog"/>
                        </ListItem>
                    </Grid>
                    <Grid item xs="12" sm="2">
                        <ListItem>
                            <ListItemText primary="Features"/>
                        </ListItem>
                        <ListItem>
                            <ListItemText secondary="Business marketing"/>
                        </ListItem>
                        <ListItem>
                            <ListItemText secondary="user Analitic"/>
                        </ListItem>
                        <ListItem>
                            <ListItemText secondary="live chat"/>
                        </ListItem>
                        <ListItem>
                            <ListItemText secondary="Blog"/>
                        </ListItem>
                    </Grid>
                    <Grid item xs="12" sm="2">
                        <ListItem>
                            <ListItemText primary="Ressources"/>
                        </ListItem>
                        <ListItem>
                            <ListItemText secondary="About Us"/>
                        </ListItem>
                        <ListItem>
                            <ListItemText secondary="Carrier"/>
                        </ListItem>
                        <ListItem>
                            <ListItemText secondary="We are hiring"/>
                        </ListItem>
                        <ListItem>
                            <ListItemText secondary="Blog"/>
                        </ListItem>
                    </Grid>
                    <Grid item xs="12" sm="2">
                        <ListItem>
                            <ListItemText primary="Get In Touch"/>
                        </ListItem>
                        <ListItem>
                            <ListItemText secondary="About Us"/>
                        </ListItem>
                        <ListItem>
                            <ListItemText secondary="Carrier"/>
                        </ListItem>
                        <ListItem>
                            <ListItemText secondary="We are hiring"/>
                        </ListItem>
                        <ListItem>
                            <ListItemText secondary="Blog"/>
                        </ListItem>
                    </Grid>
                </Grid>
            </div>
        </div>
    )

}
export default Footer;