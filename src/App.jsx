import React, { useState } from 'react';
import './App.css';
import { InputTodo } from './components/InputTodo';
import { InCompleteTodos } from './components/InCompleteTodos';
import { CompleteTodos } from './components/CompleteTodos';
import { Home } from './components/Home';
import { Contact } from './components/Contact';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
// import { useEffect } from 'react';

export const App = () => {
  const [todoText, setTodoText] = useState('');
  const [incompleteTodls, setIncompleteTodls] = useState(['あああ', 'いいいい']);
  const [completeTodls, setCompleteTodls] = useState(['ううう', 'いいええええいい']);

  const onChangeTodoText = (event) => setTodoText(event.target.value)

  // 追加ボタン
  const onClickAdd = () => {
    if (todoText === '') {
      alert('入力して下さい！');
      return;
    }
    const newTodos = [...incompleteTodls, todoText];
    setIncompleteTodls(newTodos);
    // incompleteTodls.push(todoText);
    // setIncompleteTodls([...incompleteTodls]);
    setTodoText('');
  }
  // 未完了のTODOの削除ボタン
  const onClickDelete = (index) => {
    const todos = [...incompleteTodls];
    todos.splice(index, 1);
    setIncompleteTodls(todos);
  }
  // 未完了のTODOの完了ボタン
  const onClickComplete = (index) => {
    // 完了したTODOへ追加し未完了のRODOから削除
    const completeTodo = incompleteTodls[index];
    const todos = [...incompleteTodls];
    const newComplete = [...completeTodls, completeTodo];
    setCompleteTodls(newComplete);
    todos.splice(index, 1);
    setIncompleteTodls(todos);

  }
  // 完了したTODOの戻すボタン
  const onClickBackTodo = (index) => {
    // 完了TODOから削除
    const todos = [...completeTodls];
    const backTodo = todos[index];
    todos.splice(index, 1);
    setCompleteTodls(todos);
    // 未完了TODOへ追加
    const newTodos = [...incompleteTodls, backTodo];
    setIncompleteTodls(newTodos);
  }

  return (
    <>
    <BrowserRouter>
        <p>TODOアプリです</p>
      <Switch>
        <Route exact path="/">
          <Link to="/contact">TODOアプリへ</Link>
          <Home />
        </Route>
        <Route path="/contact">
          <Link to="/">Homeへ</Link>
          <Contact />
          <InputTodo todoText={todoText} onChange={onChangeTodoText} onClick={onClickAdd}/>
      
          <InCompleteTodos incompleteTodls={incompleteTodls} onClickComplete={onClickComplete} onClickDelete={onClickDelete} />

          <CompleteTodos completeTodls={completeTodls} onClickBackTodo={onClickBackTodo} />
        </Route>
        <Route>
          <p>Not Found</p>
        </Route>
      </Switch>
    </BrowserRouter>
    </>
  )
}
