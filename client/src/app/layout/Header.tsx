import { AppBar, Badge, Box, IconButton, List, ListItem, Toolbar, Typography } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { NavLink } from "react-router-dom";

const midLinks = [
    {title: 'catalog', path: '/catalog'},
    {title: 'contact', path: '/contact'},
    {title: 'home', path: '/'},
]
const rightLinks = [
    {title: 'login', path: '/login'},
    {title: 'register', path: '/register'},
]

export default function Header() {
    return (
        <AppBar position='static' sx={{mb: 4}}>
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Box display='flex' alignItems='center'>
                <Typography variant='h6'>
                    React-STORE
                </Typography>
                </Box>
                <List sx={{display: 'flex'}}>
                    {midLinks.map(({title, path}) => (
                        <ListItem
                            component={NavLink}
                            to={path}
                            key={path}
                            sx={{
                                color: 'inherit', 
                                typography: 'h6',
                                '&:hover': {
                                    color: 'grey.500'
                                },
                                '&.active': {
                                    color: 'text.secondary'
                                }
                            }}
                        >
                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                </List>

                <Box display='flex' alignItems='center'>
                <IconButton size='large' sx={{color: 'inherit'}}>
                    <Badge badgeContent={4} color='secondary'>
                            <ShoppingCart />
                    </Badge>
                </IconButton>
                <List sx={{display: 'flex'}}>
                    {rightLinks.map(({title, path}) => (
                        <ListItem
                            component={NavLink}
                            to={path}
                            key={path}
                            sx={{
                                color: 'inherit', 
                                typography: 'h6',
                                '&:hover': {
                                    color: 'grey.500'
                                },
                                '&.active': {
                                    color: 'text.secondary'
                                }
                            }}
                        >
                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                  </List>
               </Box>
            </Toolbar>
        </AppBar>
    )
}