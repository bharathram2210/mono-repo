import { Button, Typography } from '@mui/material';
import CustomAlert from '../../components/alert';
import { Context, ContextTypes } from '../../context/context';
import { useContext } from 'react';

const Dashboard = () => {
    const context = useContext(Context);
    const { setAlert } = context as ContextTypes;
    return (
        <div>
            <CustomAlert />
            <Typography variant='h2'>Hello iam a Dashboard</Typography>
            <br />
            <Button
                color='success'
                variant='contained'
                onClick={() => setAlert({ open: true, message: 'my name is bharathram S', severity: 'success' })}
            >
                click me{' '}
            </Button>
        </div>
    );
};
export default Dashboard;
