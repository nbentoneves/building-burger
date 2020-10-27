import React, {Component} from "react";
import Button from "../../../components/UI/Button/Button";

import style from "./ContactData.module.css";
import axios from '../../../axios-orders';
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";

import {connect} from "react-redux";

class ContactData extends Component {

    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Street'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Zip Code'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 10
                },
                valid: false,
                touched: false
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Country'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your E-mail'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {
                            value: 'fastest',
                            displayValue: 'Fastest'
                        },
                        {
                            value: 'chipper',
                            displayValue: 'Chipper'
                        }
                    ]
                },
                valid: true,
                value: 'faster'
            }
        },
        formIsValid: false,
        loading: false
    }

    orderHandler = (event) => {

        //Avoid default form request
        event.preventDefault();

        this.setState({
            loading: true
        })

        const formData = {};

        for (let formElemIdentifier in this.state.orderForm) {
            formData[formElemIdentifier] = this.state.orderForm[formElemIdentifier].value;

        }

        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price.toFixed(2),
            orderData: formData
        }

        axios.post("orders.json", order)
            .then(response => {
                console.log("Response -> ", response);
                this.setState({
                    loading: false
                })
                this.props.history.push("/")
            })
            .catch(error => {
                console.log("Error -> ", error);
                this.setState({
                    loading: false
                })
            });
    }

    checkValidity = (value, rules) => {

        let isValid = true;

        if (rules) {

            if (rules.required) {
                isValid = value.trim() !== '' && isValid;
            }

            if (rules.minLength) {
                isValid = value.length >= rules.minLength && isValid;
            }

            if (rules.maxLength) {
                isValid = value.length <= rules.maxLength && isValid;
            }
        }

        return isValid;
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updateOrderForm = {
            ...this.state.orderForm
        };

        const updateFormElem = {
            ...updateOrderForm[inputIdentifier]
        };

        updateFormElem.value = event.target.value;
        updateFormElem.valid = this.checkValidity(updateFormElem.value, updateFormElem.validation)
        updateFormElem.touch = true
        updateOrderForm[inputIdentifier] = updateFormElem

        let formIsValid = true
        for (let inputIdentifiers in updateOrderForm) {
            formIsValid = updateOrderForm[inputIdentifier].valid && formIsValid
        }

        this.setState({
            orderForm: updateOrderForm,
            formIsValid: formIsValid
        })
    }

    render() {

        const formElemArray = [];
        for (let key in this.state.orderForm) {
            formElemArray.push(({
                id: key,
                config: this.state.orderForm[key]
            }))
        }

        let form = <form onSubmit={this.orderHandler}>
            {formElemArray.map(formElem => {
                return (
                    <Input
                        key={formElem.id}
                        elementType={formElem.config.elementType}
                        elementConfig={formElem.config.elementConfig}
                        changed={(event) => this.inputChangedHandler(event, formElem.id)}
                        invalid={!formElem.config.valid}
                        validation={formElem.config.validation}
                        touched={formElem.config.touch}
                        value={formElem.config.value}/>
                )
            })}
            <Button btnType="Success" disabled={!this.state.formIsValid}>ORDER</Button>
        </form>;

        if (this.state.loading) {
            form = <Spinner/>
        }

        return (
            <div className={style.ContactData}>
                <h4>Enter your contact Data</h4>
                {form}
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        price: state.totalPrice
    }
}

export default connect(mapStateToProps)(ContactData);