import { createStore } from 'redux';

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(counterReducer);

// This is rendering the state in dom
const render = () => {
  document.getElementById('root').innerText = store.getState();
}
render();

// We subscribe this `render` function, so each time state is changing this function will be called
store.subscribe(render);

// This dispatch and action
document.addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' });
})
