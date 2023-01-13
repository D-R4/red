import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';


const initialState = {
  todos:[],
  loading: false
} 

const reducer = (state = initialState, action) => {
  switch(action.type){

    case 'start/todos' : 
      return {loading: true}

    case 'load' :
      return {todos: action.payload}
    
    case 'delete' :
      return {...state, todos: state.todos.filter((item,index) =>{
        if(action.payload === index){
          return false
        }else{
          return true
        }
      })}
    
      default :
      return state
  }
}

const store = createStore(reducer,applyMiddleware(thunk))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
  <App />
</Provider>
);