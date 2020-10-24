import { createWrapper } from "next-redux-wrapper";
import { createStore } from "redux";
import rootReducer from "../reducer/index";

const configureSotre = () => {
  const store = createStore(rootReducer);
  return store;
};

const wrapper = createWrapper(configureSotre, {
  debug: process.env.NODE_ENV === "development,",
});

export default wrapper;
