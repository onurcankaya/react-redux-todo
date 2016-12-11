import * as Redux from 'redux';
import { searchTextReducer, showCompletedReducer, todosReducer } from 'reducers';

export const configure = (initialState = {}) => {
  const reducer = Redux.combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer
  });

  const store = Redux.createStore(reducer, initialState, Redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
