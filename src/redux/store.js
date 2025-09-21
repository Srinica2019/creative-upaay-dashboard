import { createStore } from "redux";
import rootReducer from "./reducers";

const saveToLocalStorage = (state) => {
  localStorage.setItem("appState", JSON.stringify(state));
};

const loadFromLocalStorage = () => {
  const data = localStorage.getItem("appState");
  return data ? JSON.parse(data) : undefined;
};

const store = createStore(rootReducer, loadFromLocalStorage());

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
