import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

import CartItem from "./CartItem/CartItem";
import useStyles from "./styles";

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
    const classes = useStyles();

    const handleEmptyCart = () => onEmptyCart();

    const renderEmptyCart = () => (
        <Typography variant="subtitle1">
            Bạn không có bất cứ món hàng nào trong giỏ hàng,
            <Link className={classes.link} to="/products">
                bắt đầu thêm một vài thứ
            </Link>
            !
        </Typography>
    );

    if (!cart.line_items) return "Loading";

    const renderCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((lineItem) => (
                    <Grid item xs={12} sm={4} key={lineItem.id}>
                        <CartItem
                            item={lineItem}
                            onUpdateCartQty={onUpdateCartQty}
                            onRemoveFromCart={onRemoveFromCart}
                        />
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h4">
                    Tổng cộng: {cart.subtotal.formatted_with_symbol}
                </Typography>
                <div>
                    <Button
                        className={classes.emptyButton}
                        size="large"
                        type="button"
                        variant="contained"
                        color="secondary"
                        onClick={handleEmptyCart}
                    >
                        LÀM TRỐNG GIỎ HÀNG
                    </Button>
                    <Button
                        className={classes.checkoutButton}
                        component={Link}
                        to="/checkout"
                        size="large"
                        type="button"
                        variant="contained"
                        color="primary"
                    >
                        THANH TOÁN
                    </Button>
                </div>
            </div>
        </>
    );

    return (
        <Container style={styles.Container}>
            <div className={classes.toolbar} style={styles.Container} />
            <Typography className={classes.title} variant="h3" gutterBottom>
                Giỏ hàng
            </Typography>
            {!cart.line_items.length ? renderEmptyCart() : renderCart()}
        </Container>
    );
};

const styles = {
    Container: {
        padding: "0 5em",
    },
};

export default Cart;
