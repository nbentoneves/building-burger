import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";

import style from "./CheckoutSummary.module.css";

const checkoutSummary = (props) => {
    return (
        <div className={style.CheckoutSummary}>
            <h1>We hope it testes well!</h1>
            <div style={{
                width: '100%',
                margin: 'auto'
            }}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button btnType="Danger" clicked={props.onCheckoutCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.checkoutContinued}>CONTINUE</Button>
        </div>
    )
}

export default checkoutSummary;