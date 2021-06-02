import { Card, CardContent, Grid, makeStyles, Paper, Typography } from "@material-ui/core"
import { PeopleOutlineOutlined } from "@material-ui/icons"

const items = [
    {
        title: "Peace Of Mind",
        text : "So it's really behaves that like nther, now we have given up "
    },
    {
        title: "set For Life",
        text : "So it's really behaves that like nther, now we have given up "
    },
    {
        title: "100% Satisfaction",
        text : "So it's really behaves that like nther, now we have given up "
    }
]


const useStyle= makeStyles((theme)=>({
    items: {
        padding: '4%',
        paddingLeft: "15%",
        paddingRight: "15%",
        position: "relative",
    }
}))

const Feature= ()=>{
    const classes = useStyle()
    return <>
            <div>    
                <Paper className={classes.items}>
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
                </Paper>
            </div>  
        </>
}

export default Feature;