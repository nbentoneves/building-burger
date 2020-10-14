import React, {Component} from "react";
import Button from "../../../components/UI/Button/Button";

import style from "./ContactData.module.css";
import axios from '../../../axios-orders';
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";

class ContactData extends Component {

    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: ''
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Street'
                },
                value: ''
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Zip Code'
                },
                value: ''
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Country'
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your E-mail'
                },
                value: ''
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
                value: 'faster'
            }
        },
        loading: false
    }

    orderHandler = (event) => {

        //Avoid default form request
        event.preventDefault();

        this.setState({
            loading: true
        })

        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Nuno Bento',
                address: {
                    street: 'Test Street',
                    zipCode: '4153',
                    country: 'UK'
                },
                email: 'test@gmail.com'
            },
            deliveryMethod: 'faster'
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

    render() {

        const formElemArray = [];
        for (let key in this.state.orderForm) {
            formElemArray.push(({
                id: key,
                config: this.state.orderForm[key]
            }))
        }

        let form = <form>
            {formElemArray.map(formElem => {
                return (
                    <Input
                        key={formElem.id}
                        elementType={formElem.config.elementType}
                        elementConfig={formElem.config.elementConfig}
                        value={formElem.config.value}/>
                )
            })}
            <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
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

export default ContactData;