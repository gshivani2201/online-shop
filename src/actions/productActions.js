import onlineStoreApi from "../apis/onlineStoreApi";
import { ActionTypes } from "../constants/action-types"

export const fetchProducts = () => {
    return async (dispatch) => {
        const response = await onlineStoreApi.get('/products')
        console.log(response)
        dispatch({type: ActionTypes.FETCH_PRODUCTS, payload: response.data})
    }
};

export const fetchProduct = (id) => async (dispatch) => {
        const response = await onlineStoreApi.get(`/products/${id}`)
        dispatch({type: ActionTypes.SELECTED_PRODUCT, payload: response.data})
    };


export const setProducts = products => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    };
};

export const selectedProduct = product => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    };
};

export const removeSelectedProduct  = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCTS,
    };
};