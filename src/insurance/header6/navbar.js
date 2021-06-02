import { Box, Drawer, Grid, IconButton, List, ListItem, ListItemText, makeStyles, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from "@material-ui/core"
import { MenuBook } from "@material-ui/icons"
import { useState } from "react"

const useStyle = makeStyles((theme)=>({
    toolBar: {
        width: '90%',
        margin: '0 auto',
        color: "yellow",
    },
    top:{
        width: '25em'
    }
}))



const Navbar = ()=>{
    const classes= useStyle()

    // responsive using breakpoint
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('xs')) 

    
    return <>
            <div>
                <Box>
                    <Toolbar className={classes.toolBar}>
                        <Typography component="h1">Project Name</Typography>
                        
                        {isMatch ? <Draw />:(
                            <>
                            <Tabs>
                                <Tab label="demo 1 " />
                                <Tab label="demo 1 " />
                                <Tab label="demo 1 " />
                            </Tabs>
    
                            </>    
                        )}
                    </Toolbar>
                </Box>

            </div>
        </>
}

const Draw = ()=>{

    const [open, setOpen] = useState(false)
    const classes = useStyle()
    return (
        <Grid container justify="space-between">
            <Grid item>
                <Drawer open={open} onClose={()=>setOpen(false)} variant="persistent" anchor="right">
                    <List className={classes.top} >
                        <ListItem button onClick={()=>setOpen(false)}>
                            <ListItemText>Home</ListItemText>
                        </ListItem>
                        <ListItem button onClick={()=>setOpen(false)}>
                            <ListItemText>page 1 </ListItemText>
                        </ListItem>
                        <ListItem button onClick={()=>setOpen(false)}>
                            <ListItemText>page 2 </ListItemText>
                        </ListItem>
                    </List>
                </Drawer>
            </Grid>
            <Grid item>
                <IconButton onClick={()=>setOpen(!open)}>
                    <MenuBook/>
                </IconButton>
            </Grid>
        </Grid>
    )
}

export default Navbar;