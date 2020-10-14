import React from "react";

import style from './Input.module.css';

const input = (props) => {

    let inputElem;

    switch (props.elementType) {
        case ('input'):
            inputElem = <input className={style.InputElement}
                {...props.elementConfig} value={props.value}/>
            break;
        case ('textarea'):
            inputElem = <textarea className={style.InputElement} {...props.elementConfig} value={props.value}/>
            break;
        case ('select'):
            inputElem = <select
                className={style.InputElement}>
                {props.elementConfig.options.map(option => (
                    <option key={option.value}
                            value={option.value}>
                        {option.displayValue}
                    </option>
                ))}
            </select>
            break;
        default:
            inputElem = <input {...props.elementConfig} value={props.value}/>
    }

    return (
        <div className={style.Input}>
            <label className={style.Label}>{props.label}</label>
            {inputElem}
        </div>
    );
};

export default input;