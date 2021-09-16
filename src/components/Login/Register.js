import React from "react";
import {
    InputLabel,
    Select,
    MenuItem,
    Button,
    Grid,
    Typography,
} from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
import { Link } from "react-router-dom";

import FormInput from "../CheckoutForm/CustomTextField";
import { auth, registerWithEmailAndPassword } from "../../firebase.js";

const Register = () => {
    const methods = useForm();

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [rePassword, setRePassword] = React.useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        registerWithEmailAndPassword(name, email, password);
    };
    return (
        <div style={styles.div}>
            <Typography variant="h2" gutterBottom>
                Register
            </Typography>
            <FormProvider {...methods}>
                <form style={styles.form} onSubmit={(e) => handleSubmit(e)}>
                    <FormInput
                        required
                        name="username"
                        label="Username"
                        value={name}
                        onChange={(name) => setName(name)}
                    />
                    <FormInput
                        required
                        name="name"
                        label="Name"
                        value={email}
                        onChange={(email) => setName(email)}
                    />
                    <FormInput
                        required
                        name="password"
                        label="Password"
                        value={password}
                        type="password"
                        onChange={(password) => setPassword(password)}
                    />
                    <FormInput
                        required
                        type="submit"
                        name="password confirm"
                        label="Password Confirm"
                        value={rePassword}
                        onChange={(rePassword) => setRePassword(rePassword)}
                    />

                    <br />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        style={styles.button}
                    >
                        Register
                    </Button>
                </form>
            </FormProvider>
        </div>
    );
};

const styles = {
    div: {
        display: "flex",
        margin: "10% auto",
        alignItems: "center",
        flexDirection: "column",
    },
    form: {
        width: "600px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    button: {
        marginTop: "10px",
    },
};

export default Register;
