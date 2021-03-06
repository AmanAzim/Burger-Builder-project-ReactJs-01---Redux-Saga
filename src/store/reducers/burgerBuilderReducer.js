import * as actionType from '../actions/actionTypes'
import {updateObject} from '../utility'

const initialState={
    ingredients:null,
    totalPrice:2,
    loading:false,
    error:false,
    building:false
};

const INGREDIENT_PRICES={
    salat:0.5,
    cheese:0.4,
    meat:1.3,
    bacon:0.7
};

const setError=(state)=>{
    return updateObject(state, {error:true}); //just to test the method of utility.js
};



const burgerBuilderReducer=(state=initialState, action)=>{
    switch (action.type) {
        case actionType.ADD_INGREDIENT:
            return{
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingredientName]:state.ingredients[action.ingredientName]+1 // shortcut of finding that particular ingredient using if or for loop then updating it
                },
                totalPrice:state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
                building:true
            };
        case actionType.REMOVE_INGREDIENT:
            let updatedIngredient={ [action.ingredientName]:state.ingredients[action.ingredientName]-1};
            let updatedIng=updateObject(state.ingredients, updatedIngredient);
            return{
                ingredients:updatedIng, //just use the method from utility.js to do the same thing ADD_INGREDIENT
                //ingredients:{
                //  ...state.ingredients,
                //[action.ingredientName]:state.ingredients[action.ingredientName]-1
                //},
                totalPrice:state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
                building:true
            };
        case actionType.SET_INGREDIENTS:
            return{
                ...state,
                ingredients:action.ingredients,
                error:false,
                totalPrice:2,
                building:false
            };
        case actionType.FETCH_INGREDIENTS_FAIL:
            return setError(state);
        default:
            return state;
    }
};

export default burgerBuilderReducer;
