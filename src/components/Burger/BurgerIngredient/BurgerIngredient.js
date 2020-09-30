import React from "react";
import style from "./BurgerIngredient.module.css";
import PropTypes from 'prop-types';

const burgerIngredient = (props) => {

    let ingredient;

    switch (props.type) {
        case ('bread-bottom'):
            ingredient = <div className={style.BreadBottom}/>;
            break;
        case ('bread-top'):
            ingredient = (
                <div className={style.BreadTop}>
                    <div className={style.Seeds1}/>
                    <div className={style.Seeds2}/>
                </div>
            );
            break;
        case ('meat'):
            ingredient = <div className={style.Meat}/>
            break;
        case ('cheese'):
            ingredient = <div className={style.Cheese}/>
            break;
        case ('salad'):
            ingredient = <div className={style.Salad}/>
            break;
        case ('bacon'):
            ingredient = <div className={style.Bacon}/>
            break;
        default:
            ingredient = null;
    }

    return (ingredient)

};

burgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
}

export default burgerIngredient;