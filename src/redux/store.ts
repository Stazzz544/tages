import { combineReducers, configureStore } from "@reduxjs/toolkit";
import filterMaterialsSlice from "./reducers/filterMaterialsSlice";
import productCardSlice from "./reducers/productCardSlice";


const rootReducer = combineReducers({
	productCardSlice,
	filterMaterialsSlice,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']