import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Button, Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route,
} from "react-router-dom";

const FlashMessage = (
    message = "Success",
    time = 3000,
    url = "/",
    severity = "success"
) => {
    const Flash = () => {
        const [open, setOpen] = useState(true);

        const handleClick = () => {
            setOpen(false);
        };
        return (
            <Router>
                <Snackbar open={open}>
                    <Alert severity={severity}>
                        {message}
                        <Button onClick={handleClick}>x</Button>
                    </Alert>
                </Snackbar>
                {setTimeout(() => {
                    setOpen(false);
                     if(severity!="error") window.location.reload();
                }, time)}
                {severity != "error" && !open ? <Redirect to={url} /> : ""}
            </Router>
        );
    };
    ReactDOM.render(<Flash />, document.getElementById("flashMessage"));
};
export default FlashMessage;
