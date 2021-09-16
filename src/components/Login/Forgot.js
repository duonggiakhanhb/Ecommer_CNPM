import React from "react";
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom';


import FormInput from '../CheckoutForm/CustomTextField';

const Forgot = () => {
    const methods = useForm();
    return (
        <div style={styles.div}>
            <Typography variant="h2" gutterBottom>Forgot</Typography>
            <FormProvider {...methods}>
            <form style={styles.form}>

            <FormInput helperText="Email!" name="username" label="Email" />
            
            <Button type="submit" variant="contained" color="primary" style={styles.button}>Submit</Button>
            
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

export default Forgot;