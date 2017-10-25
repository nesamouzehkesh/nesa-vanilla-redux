
const counter = (state = 0, action) => {
  console.log(state);

  switch(action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

const createStore = (reducer) => {
  let state;
  let listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  }

  const subscribe = (listener) => {
    listeners.push(listener);

    return () => {
      listeners = listeners.filter(l => l !== listener);
    }
  }

  // To just initializing the sate
  dispatch({})

  return {
    getState,
    dispatch,
    subscribe
  }
}

const store = createStore(counter);
let unSubscribeRender;

const render = () => {
  document.getElementById('root').innerText = store.getState();
  if (store.getState() > 10) {
    unSubscribeRender();
  }
}

render();

unSubscribeRender = store.subscribe(render);

document.addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' });
})