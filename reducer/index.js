import { combineReducers } from "redux";
import search from "../modules/search";
import todolist from "../modules/todolist";

const rootReducer = combineReducers({ search, todolist });

export default rootReducer;
