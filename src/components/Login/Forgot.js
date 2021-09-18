import React from "react";
import {  Button, Typography, TextField } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import { validateEmail, validate } from "../Validation/Validation";
import { FlashMessage } from "../../components";
import { sendPasswordResetEmail } from './../../firebase'




const Forgot = () => {
    const methods = useForm();
    const [email, setEmail] = React.useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        if(!validate()) return;
        sendPasswordResetEmail(email);
    }
    return (
        <div style={styles.div}>
            <Typography variant="h2" gutterBottom>Forgot</Typography>
            <FormProvider {...methods}>
            <form style={styles.form} onSubmit={(e) => handleSubmit(e)}>

            <TextField
                required
                error={validateEmail(email)}
                helperText={validateEmail(email)??false}
                name="email"
                label="Email"
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
            />
            
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