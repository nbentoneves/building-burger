import React from "react";
import style from "./BuildControls.module.css"
import BuildControl from "./BuildControl/BuildControl";

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
]

const buildControls = (props) => {
    return (
        <div className={style.BuildControls}>
            <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
            {controls.map(control => {
                return <BuildControl
                    key={control.label}
                    label={control.label}
                    disabled={props.disabled[control.type]}
                    added={() => props.ingredientAdded(control.type)}
                    removed={() => props.ingredientRemoved(control.type)}/>
            })}
            <button
                className={style.OrderButton}
                onClick={props.ordered}
                disabled={!props.purchasable}>ORDER NOW
            </button>
        </div>
    )
}

export default buildControls;