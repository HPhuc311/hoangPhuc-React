import { HANDLE_PRODUCTDETAIL, HANDLE_CARTS, HANDLE_CARTS_QUANTITY,HANDLE_CARTS_DELETE} from "./actionType";

const initialState = {
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
    }, //tham chiếu 

    carts:[]
}


export const baiTapPhoneReducer = (state = initialState, action) => {
    console.log('action: ', action)
    switch (action.type) {
        case HANDLE_PRODUCTDETAIL: {
            let newPrdDetail = { ...action.payload }

            return { ...state, productDetail: newPrdDetail }
        }
        case HANDLE_CARTS: {
            const newCarts = [...state.carts]

            //Kiểm tra xem trong carts đã tồn tại sản phẩm hay chưa
            const index = newCarts.findIndex((item) => item.maSP === action.payload.maSP)

            if (index !== -1) {
                newCarts[index].cartQuantity += 1
            } else {
                newCarts.push({ ...action.payload, cartQuantity: 1 })
            }

            return { ...state, carts: newCarts }
        }

        case HANDLE_CARTS_QUANTITY:{
            // Cách 1:
            const newCarts = [...state.carts]

            const index = newCarts.findIndex((item) => item.maSP === action.payload.maSP)

            newCarts[index].cartQuantity =
                newCarts[index].cartQuantity + action.payload.quantity || 1

            // Cách 2: 

            // const newCarts = state.carts.map((item) => {
            //     if(item.maSP === action.payload.maSP){
            //         return {
            //             ...item,
            //             cartQuantity: item.cartQuantity + action.payload.quantity
            //         }
            //     }
            // })



            return {...state, carts: newCarts}
        }

        case HANDLE_CARTS_DELETE: {
            
            const newCarts = state.carts.filter((item) => item.maSP !== action.payload)


            return {...state, carts: newCarts}
        }

        default:
            return state
    }
}
