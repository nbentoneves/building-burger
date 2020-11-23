import * as actionType from './actionsTypes';
import axios from "../../axios-orders";

export const addIngredient = (name) => {
    return {
        type: actionType.ADD_INGREDIENTS,
        payload: {ingredientName: name}
    }
}

export const removeIngredient = (name) => {
    return {
        type: actionType.REMOVE_INGREDIENTS,
        payload: {ingredientName: name}
    }
}

export const fetchIngredientsFailed = () => {
    return {
        type: actionType.FETCH_INGREDIENTS_FAILED
    }
}

export const setIngredients = (ingredients) => {
    return {
        type: actionType.SET_INGREDIENTS,
        payload: {ingredients: ingredients}
    };
}

export const initIngredients = () => {
    return dispatch => {
        axios.get("https://building-burger-001.firebaseio.com/ingredients.json")
            .then(resp => {
                dispatch(setIngredients(resp.data))
            })
            .catch(error => {
                dispatch(fetchIngredientsFailed())
            });
    }
}