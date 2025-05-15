import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import CustomTextField from '../../components/textfield';
import { CustomButton } from '../../elements/button-element';
import React from 'react';
import type { LoginCredentialProps, LoginFormProps } from './login-type';

// Validation schema with regex
const loginSchema = yup.object().shape({
    userId: yup
        .string()
        .required('User ID is required')
        .min(2, 'Minimum 2 characters required')
        .max(10, 'Max 10 characters allowed')
        .matches(/^[a-zA-Z0-9_]+$/, 'Only letters, numbers, and underscores allowed'),

    password: yup
        .string()
        .required('Password is required')
        .min(2, 'Minimum 2 characters required')
        .max(10, 'Max 10 characters allowed')
        .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]+$/, 'Must contain at least one letter and one number'),
});

const LoginForm: React.FC<LoginFormProps> = ({ setUserDetails }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(loginSchema),
    });

    const onSubmit = (data: unknown) => {
        setUserDetails(data as LoginCredentialProps);
        console.log('Login Data:', data);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'start',
                alignItems: 'start',
                flexDirection: 'column',
                rowGap: '26px',
            }}
        >
            <CustomTextField
                {...register('userId')}
                placeholder='User ID'
                label='User ID'
                variant='outlined'
                size='small'
                fullWidth
                error={!!errors.userId}
                helperText={errors.userId?.message}
            />

            <CustomTextField
                {...register('password')}
                placeholder='Password'
                label='Password'
                type='password'
                variant='outlined'
                size='small'
                fullWidth
                error={!!errors.password}
                helperText={errors.password?.message}
            />

            <CustomButton type='submit' fullWidth variant='contained' size='large' color='secondary' sx={{ mt: 2 }}>
                Login
            </CustomButton>
        </form>
    );
};

export default LoginForm;
