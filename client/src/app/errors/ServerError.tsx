import { Button, Container, Divider, Paper, Typography } from "@material-ui/core";
import { useHistory, useLocation } from "react-router";

export default function ServerError()
{
    const history = useHistory();
    const {state} = useLocation<any>();
    return(
        <Container component={Paper}>
            {state?.error ? (
                <>
                    <Typography>Server error</Typography>
                    <Divider />
                    <Typography>{state.error.detail || 'Internal server error'}</Typography>
                </>
            ) : (
                <Typography>Server error</Typography>
            )}
            <Button onClick={() => history.push('/catalog')}>Go back to the store</Button>
        </Container>
    )
}




