import React, { useState, useEffect } from "react";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {
    Navbar,
    Products,
    Cart,
    Checkout,
    HelloWorld,
    Login,
    Register,
    Forgot,
    TodoApp,
} from "./components";
import { commerce } from "./lib/commerce";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducers } from "./redux/ducks";
const store = createStore(reducers);

const App = () => {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});
    const [order, setOrder] = useState({});
    const [errorMessage, setErrorMessage] = useState("");

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
        commerce.customer.login('duonggiakhanhb@gmail.com','https://yourwebsite.com/login/callback').then((token) => console.log(token));
        setProducts(data);
    };

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
        
    };

    const handleAddToCart = async (productId, quantity) => {
        const item = await commerce.cart.add(productId, quantity);

        setCart(item.cart);
    };

    const handleUpdateCartQty = async (lineItemId, quantity) => {
        const response = await commerce.cart.update(lineItemId, { quantity });

        setCart(response.cart);
    };

    const handleRemoveFromCart = async (lineItemId) => {
        const response = await commerce.cart.remove(lineItemId);

        setCart(response.cart);
    };

    const handleEmptyCart = async () => {
        const response = await commerce.cart.empty();

        setCart(response.cart);
    };

    const refreshCart = async () => {
        const newCart = await commerce.cart.refresh();

        setCart(newCart);
    };

    const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
        try {
            const incomingOrder = await commerce.checkout.capture(
                checkoutTokenId,
                newOrder
            );

            setOrder(incomingOrder);

            refreshCart();
        } catch (error) {
            setErrorMessage(error.data.error.message);
        }
    };

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);

    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

    return (
        <Provider store={store}>
            <Router>
            <div id="flashMessage" style={{position: 'absolute'}}></div>
            <div style={{ display: "flex" , minHeight: "100vh"}}>
                    <CssBaseline />
                    <Navbar
                        totalItems={cart.total_items}
                        handleDrawerToggle={handleDrawerToggle}
                    />
                    <Switch>
                        <Route exact path="/">
                            <HelloWorld />
                        </Route>
                        <Route exact path="/products">
                            <Products
                                products={products}
                                onAddToCart={handleAddToCart}
                                handleUpdateCartQty
                            />
                        </Route>
                        <Route exact path="/cart">
                            <Cart
                                cart={cart}
                                onUpdateCartQty={handleUpdateCartQty}
                                onRemoveFromCart={handleRemoveFromCart}
                                onEmptyCart={handleEmptyCart}
                            />
                        </Route>
                        <Route exact path="/checkout">
                            <Checkout
                                cart={cart}
                                order={order}
                                onCaptureCheckout={handleCaptureCheckout}
                                error={errorMessage}
                            />
                        </Route>
                        <Route exact path="/login">
                            <Login />
                        </Route>
                        <Route exact path="/register">
                            <Register />
                        </Route>
                        <Route exact path="/forgot">
                            <Forgot />
                        </Route>
                        <Route exact path="/todo">
                            <TodoApp /> 
                        </Route>
                    </Switch>
                </div>
            </Router>
        </Provider>
    );
};

export default App;
