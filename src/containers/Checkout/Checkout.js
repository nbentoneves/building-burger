import React, {Component} from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummery/CheckoutSummery"
import {Route} from "react-router-dom";
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {

    state = {
        ingredients: {},
        price: 0
    }

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};

        let price = 0;

        for (let param of query.entries()) {
            // ['salad', '1']
            if (param[0] === 'price') {
                price = param[1]
            } else {
                ingredients[param[0]] = +param[1]
            }
        }

        this.setState({
            ingredients: ingredients,
            price: price
        })
    }

    onCheckoutCancelled = () => {
        this.props.history.goBack();
    }

    checkoutContinued = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {

        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    onCheckoutCancelled={this.onCheckoutCancelled}
                    checkoutContinued={this.checkoutContinued}/>
                <Route
                    path={this.props.match.path + "/contact-data"}
                    render={(props) => {
                        return (
                            <ContactData
                                {...props}
                                ingredients={this.state.ingredients}
                                price={this.state.price}/>)
                    }}
                />
            </div>
        );
    }

}

export default Checkout;
