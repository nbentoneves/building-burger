import * as actionType from "../actions/actionsTypes"

import {updateObject} from "../utility";

const initState = {
    ingredients: null,
    error: false,
    totalPrice: 4
}

const INGREDIENT_PRICE = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

const addIngredient = (state, action) => {
    const updatedIngredientAdd = {[action.payload.ingredientName]: state.ingredients[action.payload.ingredientName] + 1}
    const updatedIngredientsAdd = updateObject(state.ingredients, updatedIngredientAdd)

    const updatedStateAdd = {
        ingredients: updatedIngredientsAdd,
        totalPrice: state.totalPrice + INGREDIENT_PRICE[action.payload.ingredientName]
    }

    return updateObject(state, updatedStateAdd);
}

const removeIngredient = (state, action) => {
    const updatedIngredientRemove = {[action.payload.ingredientName]: state.ingredients[action.payload.ingredientName] - 1}
    const updatedIngredientsRemove = updateObject(state.ingredients, updatedIngredientRemove)

    const updatedState = {
        ingredients: updatedIngredientsRemove,
        totalPrice: state.totalPrice + INGREDIENT_PRICE[action.payload.ingredientName]
    }

    return updateObject(state, updatedState);
}

const setIngredient = (state, action) => {
    return updateObject(state, {
        error: false,
        totalPrice: 4,
        ingredients: action.payload.ingredients
    })
}

const fetchIngredientsFailed = (state, action) => {
    return updateObject(state, {error: true})
}

const burgerBuilder = (state = initState, action) => {

    switch (action.type) {
        case actionType.ADD_INGREDIENTS:
            return addIngredient(state, action)
        case actionType.REMOVE_INGREDIENTS:
            return removeIngredient(state, action)
        case actionType.SET_INGREDIENTS:
            return setIngredient(state, action)
        case actionType.FETCH_INGREDIENTS_FAILED:
            return fetchIngredientsFailed(state, action)
        default:
            return state;
    }
}

export default burgerBuilder;