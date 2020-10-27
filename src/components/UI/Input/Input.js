import React from "react";

import style from './Input.module.css';

const input = (props) => {

    let inputElem;
    const inputClasses = [style.InputElement];

    if(props.invalid && props.validation && props.touched){
        inputClasses.push(style.Invalid);
    }

    switch (props.elementType) {
        case ('input'):
            inputElem = <input className={inputClasses.join(" ")}
                               onChange={props.changed}
                {...props.elementConfig} value={props.value}/>
            break;
        case ('textarea'):
            inputElem = <textarea
                onChange={props.changed}
                className={inputClasses.join(" ")} {...props.elementConfig} value={props.value}/>
            break;
        case ('select'):
            inputElem = <select
                onChange={props.changed}
                className={inputClasses.join(" ")}>
                {props.elementConfig.options.map(option => (
                    <option key={option.value}
                            value={option.value}>
                        {option.displayValue}
                    </option>
                ))}
            </select>
            break;
        default:
            inputElem = <input
                className={inputClasses.join(" ")}
                onChange={props.changed}
                {...props.elementConfig} value={props.value}/>
    }

    return (
        <div className={style.Input}>
            <label className={style.Label}>{props.label}</label>
            {inputElem}
        </div>
    );
};

export default input;