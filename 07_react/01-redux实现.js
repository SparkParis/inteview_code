const createStore = (reducer) => {
  let state;
  let listeners = [];
  //订阅
  const subscribe = (listener) => {
    listeners.push(listener);
    //取消订阅
    return function unSubscribe() {
      let index = listeners.indexOf(listener);
      listeners.splice(index, 1)
    }
  }

  const dispatch = (actions) => {
    state = reducer(state, actions);
    listeners.map((l) => l())
  }

  const getState = () => state

  dispatch({ type: Symbol() });
  return {
    dispatch,
    getState,
    subscribe
  }
}

const combineReducers = (reducers) => {
  return function combine(state = {}, actions = {}) {
    let newState = {};
    for (let attr in reducers) {
      newState[attr] = reducers[attr](state[attr], actions);
    }
    return newState
  }
}
export { createStore, combineReducers }


