import { Grid, Card, Typography, makeStyles, CardContent, Button } from "@material-ui/core"
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
    title: {
        fontWeight:"bold",
        marginTop: '80px'
    },
    items:{
        marginTop:"60px"
    }
}))
const Container = ()=>{

    const classes = useStyle()

    return <>
            <div className={classes.box}>
                <div className={classes.title}>
                    <h1>We Ensure A Best<br/> Insurance Service</h1>
                </div>
                <div className={classes.title}>
                    <h4>We know how large objects will act. But things on a small scale just do not act that way</h4>
                </div>
                <Grid container spacing="2" style={{width:"60%", margin:"0 auto"}}>
                    <Grid item xs={12} sm={6} md={6}><Button variant="contained" color="primary">Get Quote Now</Button></Grid>
                    <Grid item xs={12} sm={6} md={6}><Button>Learn More</Button></Grid>
                </Grid>
                <div className={classes.items}>
                    <Grid container spacing="3">
                        {items.map(op=>(
                            <Grid item xs={12} sm={4} md={4}>
                                <Card>
                                    <CardContent>
                                        <Typography gutterBottom variant="p">
                                            <PeopleOutlineOutlined fontSize="large"/>
                                        </Typography>
                                        <Typography gutterBottom component="h2" variant="h5">
                                            {op.title}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {op.text} 
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </div>
        </>
}
export default Container;