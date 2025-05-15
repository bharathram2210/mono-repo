import { Grid, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigateTo = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('token')) {
            navigateTo('/');
        }
    });

    return (
        <Grid>
            <Typography variant='h4' letterSpacing={10}>
                abcdefghijklmnopqrstuvwxyz
            </Typography>
            <Typography variant='h3' textTransform={'uppercase'} letterSpacing={10}>
                abcdefghijklmnopqrstuvwxyz
            </Typography>
        </Grid>
    );
};

export default Login;
