import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import reducer from "./modules/reducer"

const create = () => {
  const store = createStore(reducer, composeWithDevTools(applyMiddleware()))

  return store;
}

export default create