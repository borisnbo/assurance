import { Button, FormControl, Grid, Input, InputLabel, Typography } from "@material-ui/core"


const Formulaire = ()=>{

    return <>
            <div>
                <Grid container>
                    <Grid sm={6} md={12} xs={6}>
                        <Typography component="h4">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        </Typography>
                    </Grid>
                    <Grid sm={6} md={12} xs={6} style={{height:"100px"}}>
                        <form style={{widht:"50%"}} action="d">
                            <h1>Contact Form</h1>
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
                                <Input id="message" multiline rows={6} type="text" />
                            </FormControl>
                            <Button size="meduim" type="submit" variant="contained" color="primary">Send</Button>
                        </form>
                    </Grid>
                </Grid>
            </div>
        </>
}

export default Formulaire;