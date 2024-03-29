import { combineReducers } from "@reduxjs/toolkit"

import auth from "./slices/auth"

const reducer = combineReducers({ auth })

export default reducer
