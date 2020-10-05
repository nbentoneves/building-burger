import React, {Component} from "react";
import Button from "../../../components/UI/Button/Button";

import style from "./ContactData.module.css";
import axios from '../../../axios-orders';
import Spinner from "../../../components/UI/Spinner/Spinner";

class ContactData extends Component {

    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
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

        let form = <form>
            <input className={style.Input} type="text" name="name" placeholder="Your name"/>
            <input className={style.Input} type="email" name="email" placeholder="Your email"/>
            <input className={style.Input} type="text" name="street" placeholder="Street"/>
            <input className={style.Input} type="text" name="postCode" placeholder="Post Code"/>
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