import { createStore } from "redux";
import { Reducer } from "./redux/index";

const store = createStore(reducers, {});

export default store;