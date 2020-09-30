import React from "react";
import style from './Burger.module.css';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {

    let ingredients = Object.keys(props.ingredients)
        .map(igkey => {
            return [...Array(props.ingredients[igkey])].map((_, i) => {
                return <BurgerIngredient key={igkey + i} type={igkey}/>
            })
        })
        .reduce((previous, current) => {
            return previous.concat(current)
        }, []);

    if (ingredients.length === 0) {
       ingredients = <p>Please start adding ingredients!</p>
    }

    return (
        <div className={style.Burger}>
            <BurgerIngredient type="bread-top"/>
            {ingredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default burger;