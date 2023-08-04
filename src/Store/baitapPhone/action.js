import {HANDLE_PRODUCTDETAIL, HANDLE_CARTS, HANDLE_CARTS_QUANTITY,HANDLE_CARTS_DELETE} from "./actionType"

export const baiTapPhoneActions =  {
    handleProductDetails: (payload) => {
        return{
            type: HANDLE_PRODUCTDETAIL,
            payload,
        }
    },

    handleCarts: (payload) => {
        return {
            type: HANDLE_CARTS,
            payload,
        }
    },

    handleCartQuantity: (payload) => {
        return {
            type: HANDLE_CARTS_QUANTITY,
            payload,
        }
    },

    handleDeleteCart: (payload) => {
        return{
            type: HANDLE_CARTS_DELETE,
            payload,
        }
    }
}