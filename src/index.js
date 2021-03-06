import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import {createStore} from 'redux';
import allReducers from './reducers';
import {Provider} from 'react-redux';

const store = createStore(
  allReducers , 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(
  <Provider store ={store}>
      <App />
  </Provider>,
document.getElementById('root')
);



// //STORE --> GLOBAL STATE

// //ACTION INCREMENT
// const increment = () => {
//   return {
//     type : 'INCREMENT'
//   }
// }


// const decrement = () => {
//   return {
//     type : 'DECREMENT'
//   }
// }
// //REDUCER
// const counter = (state = 0 , action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//   }
// }

// let store = createStore(counter);

// //Display it in the console
// store.subscribe (()=> console.log('LEARN REDUX' , store.getState()));

// //DISPATCH
// store.dispatch (increment());
