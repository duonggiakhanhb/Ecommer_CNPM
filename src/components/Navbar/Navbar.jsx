import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    Badge,
    MenuItem,
    Menu,
    Typography,
    Button,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/commerce.png";
import useStyles from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { change_logout } from "../../redux/ducks";

const PrimarySearchAppBar = ({ totalItems }) => {
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
    const classes = useStyles();
    const location = useLocation();

    const dispatch = useDispatch();

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

    const mobileMenuId = "primary-search-account-menu-mobile";
    const isLogin = useSelector((state) => state.user.login);
    const name = useSelector((state) => state.user.name);
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton
                    component={Link}
                    to="/cart"
                    aria-label="Show cart items"
                    color="inherit"
                >
                    <Badge badgeContent={totalItems} color="secondary">
                        <ShoppingCart />
                    </Badge>
                </IconButton>
                <p>Cart</p>
            </MenuItem>
        </Menu>
    );

    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <div style={styles.navLeft}>
                        <Typography
                            component={Link}
                            to="/"
                            variant="h6"
                            className={classes.title}
                            color="inherit"
                            flexGrow={0.1}
                        >
                            <div style={{}}>
                                <img
                                    src={logo}
                                    alt="commerce.js"
                                    height="25px"
                                    className={classes.image}
                                />{" "}
                                Shopping Cart
                            </div>
                        </Typography>
                        <Typography
                            component={Link}
                            to="/products"
                            variant="h6"
                            className={classes.title}
                            color="inherit"
                        >
                            Sản phẩm
                        </Typography>
                        <Typography
                            component={Link}
                            to="/todo"
                            variant="h6"
                            className={classes.title}
                            color="inherit"
                        >
                            Todo App
                        </Typography>
                    </div>
                    <div className={classes.grow} />
                    {location.pathname === "/products" && (
                        <div className={classes.button}>
                            <IconButton
                                component={Link}
                                to="/cart"
                                aria-label="Show cart items"
                                color="inherit"
                            >
                                <Badge
                                    badgeContent={totalItems}
                                    color="secondary"
                                >
                                    <ShoppingCart />
                                </Badge>
                            </IconButton>
                        </div>
                    )}
                    {!isLogin && (
                        <div style={styles.FormLogin}>
                            <Typography
                                style={{ padding: 5 }}
                                component={Link}
                                to="/login"
                                variant="h6"
                                className={classes.title}
                                noWrap
                                color="inherit"
                            >
                                Đăng nhập
                            </Typography>
                            <Typography
                                style={{ padding: 5 }}
                                component={Link}
                                to="/register"
                                variant="h6"
                                className={classes.title}
                                color="inherit"
                                noWrap
                            >
                                Đăng kí
                            </Typography>
                            <Typography
                                style={{ padding: 5 }}
                                component={Link}
                                to="/login"
                                variant="h6"
                                className={classes.title}
                                color="inherit"
                                noWrap
                            >
                                {name}
                            </Typography>
                        </div>
                    )}
                    {isLogin && (
                        <div style={styles.FormLogin}>
                            <Typography
                                style={{ padding: 5 }}
                                noWrap
                                component={Link}
                                to="/"
                                variant="h6"
                                className={classes.title}
                                color="inherit"
                            >
                                {name}
                            </Typography>
                            <Typography
                                style={{ padding: 5 }}
                                noWrap
                                component={Link}
                                onClick={() => dispatch(change_logout())}
                                to="/"
                                variant="h6"
                                className={classes.title}
                                color="inherit"
                            >
                                (Đăng xuất)
                            </Typography>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
        </>
    );
};

const styles = {
    navLeft: {
        display: "flex",
        flex: 0.6,
    },
    FormLogin: {
        display: "flex",
        flex: 0.2,
        marginLeft: 0,
        paddingLeft: 10,
    },
};

export default PrimarySearchAppBar;
