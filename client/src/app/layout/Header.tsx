import { AppBar, Badge, Box, IconButton, List, ListItem, Toolbar, Typography } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link, NavLink } from "react-router-dom";
import { useAppSelector } from "../store/configureStore";
import SignedInMenu from "./SignedInMenu";

const midLinks = [
    {title: 'catalog', path: '/catalog'},
    {title: 'contact', path: '/contact'},
    {title: 'home', path: '/'},
]
const rightLinks = [
    {title: 'login', path: '/login'},
    {title: 'register', path: '/register'},
]

const navStyles = {
    color: 'inherit',
    textDecoration: 'none',
    typography: 'h6',
    '&:hover': {
        color: 'grey.500'
    },
    '&.active': {
        color: 'text.secondary'
    }
}

export default function Header() {
    const {basket} = useAppSelector(state => state.basket);
    const { user } = useAppSelector(state => state.account);
    const itemCount = basket?.items.reduce((sum, item) => sum + item.quantity, 0);

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
                <IconButton component={Link} to='/basket' size='large' sx={{color: 'inherit'}}>
                    <Badge badgeContent={itemCount} color='secondary'>
                            <ShoppingCart />
                    </Badge>
                </IconButton>
                {user ? (
                        <SignedInMenu />
                    ) : (
                        <List sx={{ display: 'flex' }}>
                            {rightLinks.map(({ title, path }) => (
                                <ListItem
                                    component={NavLink}
                                    to={path}
                                    key={path}
                                    sx={navStyles}
                                >
                                    {title.toUpperCase()}
                                </ListItem>
                            ))}
                        </List>
                    )}
               </Box>
            </Toolbar>
        </AppBar>
    )
}