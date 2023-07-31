import { HANDLE_PRODUCTDETAILS } from "./actionType"

export const baiTapPhoneActions =  {
    handleProductDetails: (payload) => {
        return{
            type: HANDLE_PRODUCTDETAILS,
            payload,
        }
    }
}