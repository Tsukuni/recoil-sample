import React from 'react';
import logo from './logo.svg';
import './App.css';
import {RecoilRoot} from 'recoil';
import { TodoList } from './TodoList'
import { TodoForm } from './TodoForm'

function App() {
  return (
    <RecoilRoot>
      <TodoList />
      <TodoForm />
    </RecoilRoot>
  );
}

export default App;
