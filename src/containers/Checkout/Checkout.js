import React, {Component} from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummery/CheckoutSummery"
import {Route} from "react-router-dom";
import ContactData from "./ContactData/ContactData";

import {connect} from "react-redux";

class Checkout extends Component {

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
                    ingredients={this.props.ingredients}
                    onCheckoutCancelled={this.onCheckoutCancelled}
                    checkoutContinued={this.checkoutContinued}/>
                <Route
                    path={this.props.match.path + "/contact-data"}
                    component={ContactData}/>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients
    }
}

export default connect(mapStateToProps)(Checkout);
