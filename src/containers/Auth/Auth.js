import React, {useState} from "react";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import axios from "../../axios-orders";
import {connect} from "react-redux";

import * as actions from "../../store/actions/index"

import styles from "./Auth.module.css";

const Auth = (props) => {

    const [form, setForm] = useState({
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Mail Address'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            }
        }
    })

    const [isSignup, setIsSignup] = useState(true)

    const checkValidity = (value, rules) => {

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

    const switchAuthModeHandler = () => {
        setIsSignup(!isSignup)
    }

    const inputChangedHandler = (event, controlName) => {

        const updateControls = {...form};

        updateControls.controls[controlName] = {
            ...form.controls[controlName],
            value: event.target.value,
            valid: checkValidity(event.target.value, form.controls[controlName].validation),
            touched: true
        }

        setForm(updateControls);

    }

    const submitHandler = (event) => {
        event.preventDefault();
        props.onAuth(form.controls.email.value, form.controls.password.value, isSignup)
    }

    const formElemArray = [];
    for (let key in form.controls) {
        formElemArray.push(({
            id: key,
            config: form.controls[key]
        }))
    }

    const formRender = formElemArray.map(formElem => {
        return (
            <Input
                key={formElem.id}
                elementType={formElem.config.elementType}
                elementConfig={formElem.config.elementConfig}
                changed={(event) => inputChangedHandler(event, formElem.id)}
                invalid={!formElem.config.valid}
                validation={formElem.config.validation}
                touched={formElem.config.touched}
                value={formElem.config.value}/>
        )
    })

    return (<div className={styles.Auth}>
            <form onSubmit={submitHandler}>
                {formRender}
                <Button btnType="Success">Login</Button>
            </form>
            <Button clicked={switchAuthModeHandler} btnType="Danger">Switch to {isSignup ? "SIGNIN": "SIGNUP"}</Button>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (mail, password, isSignup) => dispatch(actions.auth(mail, password, isSignup))
    }
}

export default connect(null, mapDispatchToProps)(withErrorHandler(Auth, axios));