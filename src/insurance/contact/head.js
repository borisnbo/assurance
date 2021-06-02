import { Grid, Typography } from "@material-ui/core"


const Head = ()=>{

    return <>
            <div>
                <Grid container>
                    <Grid sm={6} md={6} xs={6}>
                        <Typography component="h2">
                            We Have Branches All Over The World
                        </Typography>
                        <Typography component="h4">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore
                        </Typography>
                    </Grid>
                    <Grid sm={6} md={6} xs={6} style={{height:"20px"}}>
                        demo
                    </Grid>
                </Grid>
            </div>
        </>
}

export default Head;