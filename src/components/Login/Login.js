import React from "react";
import { TextField, Button, Typography } from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
import { Link } from "react-router-dom";

import {
    signInWithEmailAndPassword,
    auth,
    db,
    getDoc,
    doc,
} from "../../firebase.js";
import {
    change_email,
    change_uid,
    change_name,
    change_login,
} from "../../redux/ducks";
import { useDispatch } from "react-redux";
import { FlashMessage } from "../../components";

const Login = () => {
    const methods = useForm();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const dispatch = useDispatch(email);

    const handleSubmit = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;

                getDoc(doc(db, "user", user.uid)).then((doc) => {
                    let data = doc.data();
                    dispatch(change_email(email));
                    dispatch(change_uid(user.uid));
                    dispatch(change_name(data.name));
                    dispatch(change_login(true));
                });

                FlashMessage("Login Success", 3000);
            })
            .catch((error) => {
                FlashMessage(error.message, 5000, "/", "error");
            });
    };
    return (
        <div style={styles.div}>
            <Typography variant="h2" gutterBottom>
                Đăng nhập
            </Typography>
            <FormProvider {...methods}>
                <form style={styles.form} onSubmit={(e) => handleSubmit(e)}>
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
                        label="Mật khẩu"
                        value={password}
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <br />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        style={styles.button}
                    >
                        Đăng nhập
                    </Button>
                    <br />
                    <a href="/forgot" style={{ paddingTop: 10 }}>
                        Quên mật khẩu
                    </a>
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

export default Login;
