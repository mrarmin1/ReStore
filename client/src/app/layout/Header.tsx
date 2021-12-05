import { AppBar, Toolbar, Typography } from "@material-ui/core";

export default function Header() {
    return (
        <AppBar position='static' sx={{mb: 4}}>
            <Toolbar>
                <Typography variant='h6'>
                    React-STORE
                </Typography>
            </Toolbar>
        </AppBar>
    )
}