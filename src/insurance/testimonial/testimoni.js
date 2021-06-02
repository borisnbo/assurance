import { Avatar, Card, CardActionArea, CardActions, CardContent, Grid, makeStyles, Typography } from "@material-ui/core"
import StarIcon from '@material-ui/icons/Star';

const items = [
    {
        text : " Quick Demo of my Component page Quick Demo of my Component page Quick Demo of my Component page"
    }
]

const useStyle = makeStyles((theme)=>({
    root: {
        padding: "7%",
        textAlign: 'center',
        justifyItems:'center',
        justifyContent: 'center',
    },
    comp: {
        marginTop:"30px",
        paddingLeft: "9%",
        paddingRight: "9%",
    },
    large: {
        width: theme.spacing(10),
        height: theme.spacing(10), 
        margin: "0 auto",
        marginTop:'20px'
    }, 
    color:{
        color:'yellow'
    }
}))

const Testimoni = ()=>{
    const classes = useStyle()
    return <>
            <div className={classes.root}>
                <Grid container spacing="1">
                    <Grid item xs={12}>
                        <Typography variant="h4" component="h2" gutterBottom>
                            Industry
                        </Typography>
                        <Typography variant="body2" component="p" color="textSecondary" >
                            Un peu de lorem impsum azeazeaze aezaeaze azezaeza zaeazeaz
                        </Typography>
                    </Grid>
                </Grid>
                
                <Grid container spacing="3" className={classes.comp}>
                    {[1,2,3].map(it=>(
                    <Grid item  xs={12} md={4} sm={4}>
                        <Card>
                        <CardActionArea>
                            <Avatar src="/Capture.PNG" className={classes.large}/>
                            <CardContent>
                                <Typography variant="body2" component="p" color="textSecondary">
                                {items[0].text}
                                </Typography>
                            </CardContent>
                            <Typography>
                                {[1,2,3,4,5].map(st=>(
                                <StarIcon className={classes.color}/>
                                ))}
                            </Typography>
                        </CardActionArea>
                        </Card>
                    </Grid>
                    ))}
                </Grid>
            </div>
        </>
}

export default Testimoni;