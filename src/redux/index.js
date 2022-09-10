import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

// reducers
import userReducer from "./reducers/user";

const reducers = combineReducers({
  userReducer,
});

const store = createStore(reducers, compose(applyMiddleware(thunk)));
export default store;
