import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import villagersReducer from "./reducers/villagers";
import fetchVillagers from "./fetchVillagers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const villagersStore = createStore(
  villagersReducer,
  composeEnhancers(applyMiddleware(thunk.withExtraArgument(fetchVillagers())))
);