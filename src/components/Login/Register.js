import React from "react";
import {
    Select,
    MenuItem,
    Button,
    Grid,
    Typography,
    TextField,
} from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
import { Link } from "react-router-dom";

import FormInput from "../CheckoutForm/CustomTextField";
import { registerWithEmailAndPassword } from "../../firebase";

const Register = () => {
    const methods = useForm();

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [rePassword, setRePassword] = React.useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name, email, password);

        registerWithEmailAndPassword(name, email, password);
    };
    return (
        <div style={styles.div}>
            <Typography variant="h2" gutterBottom>
                Register
            </Typography>
            <FormProvider {...methods}>
                <form style={styles.form} onSubmit={(e) => handleSubmit(e)}>
                    <TextField
                        required
                        name="username"
                        label="Username"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />
                    <TextField
                        required
                        name="email"
                        label="Email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                    <TextField
                        required
                        name="password"
                        label="Password"
                        value={password}
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <TextField
                        required
                        type="password"
                        name="password confirm"
                        label="Password Confirm"
                        value={rePassword}
                        onChange={(e) => setRePassword(e.target.value)}
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
