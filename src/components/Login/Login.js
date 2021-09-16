import React from "react";
import { Grid, Button, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom';


import FormInput from '../CheckoutForm/CustomTextField';

const Login = () => {
    const methods = useForm();
    return (
        <div style={styles.div}>
            <Typography variant="h2" gutterBottom>Login</Typography>
            <FormProvider {...methods}>
            <form style={styles.form}>

            <FormInput required name="username" label="Username" />
            <FormInput required name="password" label="Password" />

            <br />
            <Button type="submit" variant="contained" color="primary" style={styles.button}>Login</Button>
            <br />
            <a href="/forgot" style={{paddingTop: 10}}>Forgot Password</a>
            </form>
        </FormProvider>
        </div>
    );
}

const styles = {
    div: {
        display: 'flex',
        margin: '10% auto',
        alignItems: 'center',
        flexDirection: 'column',
        
    },
    form: {
        width: '600px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

    },
    button: {
        marginTop: '10px',
    }
}

export default Login;