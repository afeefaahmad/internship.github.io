// Action creators are defined

import axios from "axios";
// This will allow you to use Axios to make HTTP requests

import { 
    ALL_RESTAURANTS_REQUEST, 
    ALL_RESTAURANTS_SUCCESS, 
    ALL_RESTAURANTS_FAIL, 
    CLEAR_ERRORS 
} from "../constants/restaurantConstant";

export const getRestaurants = () => async(dispatch) => {
    try{

        dispatch({ type: ALL_RESTAURANTS_REQUEST});
        let link = "/api/v1/eats/stores";
        const {data} = await axios.get(link);
        const {restuarant, count} = data;

        dispatch({
            type: ALL_RESTAURANTS_SUCCESS,
            payload: {restuarant, count},
        });

    }catch(error){
        dispatch({
            type: ALL_RESTAURANTS_FAIL,
            payload: error.response.data.message,
        });
    }

};

export const CLEAR_ERRORS = () => async(dispatch) => {
    dispatch({
        type: CLEAR_ERRORS,

    });
};
