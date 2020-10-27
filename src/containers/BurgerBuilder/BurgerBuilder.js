import React, {Component} from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from '../../axios-orders';
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as actionType from "../../store/actions";

import {connect} from "react-redux";

class BurgerBuilder extends Component {

    state = {
        purchasable: false,
        purchasing: false,
        loading: false,
        error: false
    }

    componentDidMount() {

        /*        axios.get("https://building-burger-001.firebaseio.com/ingredients.json")
                    .then(resp => {
                        this.setState({
                            ingredients: resp.data
                        })
                    })
                    .catch(error => {
                        this.setState({
                            error: true
                        })
                    });*/

    }

    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey]
            })
            .reduce((sum, elem) => {
                return sum + elem;
            }, 0);

        return sum > 0
    }

    purchaseHandler = () => {
        this.setState({
            purchasing: true
        });
    }

    purchaseCancelHandler = () => {
        this.setState({
            purchasing: false
        })
    }

    purchaseContinueHandler = () => {
        const queryParam = [];

        for (let i in this.props.ingredients) {
            queryParam.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.props.ingredients[i]));
        }

        queryParam.push('price=' + this.state.totalPrice.toFixed(2));

        const queryString = queryParam.join("&");

        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString
        });
    }

    render() {

        // {salad: true, meat: false, ...}
        const disabledInfo = {
            ...this.props.ingredients
        };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        let orderSummary = <Spinner/>
        let burger = this.state.error ? <p>Ingredients can't be loaded</p> : <Spinner/>

        if (this.props.ingredients) {
            burger =
                <React.Fragment>
                    <Burger ingredients={this.props.ingredients}/>
                    <BuildControls
                        price={this.props.price}
                        disabled={disabledInfo}
                        ingredientAdded={this.props.onIngredientAdded}
                        ingredientRemoved={this.props.onIngredientRemoved}
                        ordered={this.purchaseHandler}
                        purchasable={this.updatePurchaseState(this.props.ingredients)}/>
                </React.Fragment>

            orderSummary = <OrderSummary
                price={this.props.price}
                ingredients={this.props.ingredients}
                purchaseCanceled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler}/>
        }

        if (this.state.loading) {
            orderSummary = <Spinner/>
        }

        return (
            <React.Fragment>
                <Modal
                    show={this.state.purchasing}
                    modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        price: state.totalPrice
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingredientName) => dispatch({
            type: actionType.ADD_INGREDIENTS,
            payload: {ingredientName: ingredientName}
        }),
        onIngredientRemoved: (ingredientName) => dispatch({
            type: actionType.REMOVE_INGREDIENTS,
            payload: {ingredientName: ingredientName}
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));