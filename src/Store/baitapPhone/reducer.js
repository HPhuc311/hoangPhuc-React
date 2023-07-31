import { HANDLE_PRODUCTDETAILS } from "./actionType";

const inintialState = {
    productDetail:{
        "maSP": 1, 
        "tenSP": "VinSmart Live", 
        "manHinh": "AMOLED, 6.2, Full HD+", 
        "heDieuHanh": "Android 9.0 (Pie)", 
        "cameraTruoc": "20 MP", 
        "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", 
        "ram": "4 GB", 
        "rom": "64 GB", 
        "giaBan": 5700000, 
        "hinhAnh": "./images/phone/vsphone.jpg"
    } //tham chiếu 

}


export const baiTapPhoneReducer = ( state = inintialState, action) => {
    switch (action.type) {
        case HANDLE_PRODUCTDETAILS: 
            let newPrdetails = {...action.payload}
            return {...state, productDetail:newPrdetails}
        default:
            return state
    }
}