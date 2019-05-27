import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};

const middleware = [thunk];

// const store;
// const store = createStore(
//   rootReducer,
//   initialState,
//   compose(
//     applyMiddleware(...middleware),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );
const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(...middleware))
);

// if(process.env.NODE_ENV === 'production') {
//   store = createStore(rootReducer, initialState, compose(
//       applyMiddleware(...middleware)
//   ));
// } else {
//   store = createStore(rootReducer, initialState, compose(
//       applyMiddleware(...middleware),
//       window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   ));
// }

export default store;
