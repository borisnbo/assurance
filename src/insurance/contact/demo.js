import { Grid, Card, Typography, makeStyles, CardContent, Button, FormControl, InputLabel, Input } from "@material-ui/core"
import { PeopleOutlineOutlined } from "@material-ui/icons"

const items = [
    {
        title: "Peace Of Mind",
        text : "The quick for jumps over the lazy dogs"
    },
    {
        title: "Peace Of Mind",
        text : "The quick for jumps over the lazy dogs"
    },
    {
        title: "Peace Of Mind",
        text : "The quick for jumps over the lazy dogs"
    }
]

const useStyle = makeStyles((theme)=>({
    box: {
        position:"absolute",
        width: "80%",
        left: "10%",
        textAlign: "center",
        marginTop:"20px",
        marginBottom: "10px"
    },
    items:{
        marginTop:"60px"
    }
}))
const Demo = ()=>{
    
    const classes = useStyle()

    return <>
            <div className={classes.box}>
                <Grid container spacing="2" style={{width:"95%", margin:"0 auto"}}>
                    <Grid item xs={12} sm={8} md={6}>
                        <h1>We Have Branches All Over The World</h1>
                        <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        sed do eiusmodLorem ipsum dolor sit amet, </h4>
                    </Grid>
                    <Grid item xs={12} sm={4} md={6}>
                        <img src="./demo2.jpg" style={{width:"60%", height:"95%"}} />
                    </Grid>
                </Grid>


                <Grid container spacing="2" style={{width:"95%", margin:"0 auto", backgroundColor:"#fff"}}>
                    <Grid item xs={12} sm={3} md={5}>
                        <img src="./demo2.jpg" style={{width:"95%", height:"95%"}} />
                    </Grid>
                    <Grid item xs={12} sm={9} md={7}>
                    <form style={{widht:"50%"}} action="d">
                            <h2 style={{color:"#000"}}>Book apointment</h2>
                            <FormControl margin="normal" fullWidth>
                                <InputLabel htmlFor="name">Name</InputLabel>
                                <Input id="name" type="text"/>
                            </FormControl>
                            <FormControl margin="normal" fullWidth>
                                <InputLabel htmlFor="email">Email</InputLabel>
                                <Input id="email" type="text"/>
                            </FormControl>
                            <FormControl margin="normal" fullWidth>
                                <InputLabel htmlFor="phone">Phone</InputLabel>
                                <Input id="phone" type="text"/>
                            </FormControl>
                            <FormControl margin="normal" fullWidth>
                                <InputLabel htmlFor="message">Message</InputLabel>
                                <Input id="message" type="text" />
                            </FormControl>
                            <Button size="meduim" type="submit" variant="contained" color="primary">Send</Button>
                        </form>
                    </Grid>
                </Grid>

            </div>
        </>
}
export default Demo;