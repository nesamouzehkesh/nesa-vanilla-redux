
const counter = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

let state;

state = counter(state, {});
console.log(state); // 0

state = counter(state, { type: 'INCREMENT' });
console.log(state); // 1

state = counter(state, { type: 'INCREMENT' });
console.log(state); // 2

state = counter(state, { type: 'DECREMENT' });
console.log(state); // 1

state = counter(state, { type: 'DECREMENT' });
console.log(state); // 0

state = counter(state, { type: 'INCREMENT' });
console.log(state); // 1




