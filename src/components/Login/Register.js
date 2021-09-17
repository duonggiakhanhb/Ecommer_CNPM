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
import {
    doc,
    setDoc,
    createUserWithEmailAndPassword,
    auth,
    db,
} from "../../firebase";
import { FlashMessage } from "../../components";
import { useDispatch } from "react-redux";
import { change_name, change_email, change_uid } from "../../redux/ducks";

const Register = () => {
    const methods = useForm();

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [rePassword, setRePassword] = React.useState("");
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name, email, password);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                const data = {
                    uid: user.uid,
                    email: user.email,
                    name: name,
                };
                setDoc(doc(db, "user", user.uid), data)
                    .then(() => {
                        dispatch(change_name(name));
                        dispatch(change_email(email));
                        dispatch(change_uid(user.uid));
                        FlashMessage("Register Success", 3000);
                    })
                    .catch((e) => {
                        FlashMessage(e.message, 5000, "/", "error");
                    });
            })
            .catch((error) => {
                FlashMessage(error.message, 5000, "/", "error");
            });
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
                        name="name"
                        label="Name"
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
