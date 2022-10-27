import { combineReducers } from "@reduxjs/toolkit";

import users from "./userReducer";

const rootReducer = combineReducers({
    users
})

export default rootReducer