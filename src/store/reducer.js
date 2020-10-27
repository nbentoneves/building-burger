import * as actionType from "./actions"

const initState = {
    ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    },
    totalPrice: 4
}

const INGREDIENT_PRICE = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

const reducer = (state = initState, action) => {

    switch (action.type) {
        case actionType.ADD_INGREDIENTS:
            return {
                ...state,
                ingredients: {
                    //Deep cloning
                    ...state.ingredients,
                    [action.payload.ingredientName]: state.ingredients[action.payload.ingredientName] + 1
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICE[action.payload.ingredientName]
            }
        case actionType.REMOVE_INGREDIENTS:
            return {
                ...state,
                ingredients: {
                    //Deep cloning
                    ...state.ingredients,
                    [action.payload.ingredientName]: state.ingredients[action.payload.ingredientName] -1
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICE[action.payload.ingredientName]
            }
        default:
            return state;
    }
}

export default reducer;