import React from 'react';

export const CompleteTodos = (props) => {
    const { completeTodls, onClickBackTodo } = props;
    return (
        <div className="complete-area">
            <p className="title">完了したTODO</p>
            <ul id="complete-list">
            {completeTodls.map((todo, index) => {
                return (
                <div index={todo} className="list-row">
                    <li>{todo}</li>asf
                    <button onClick={() => onClickBackTodo(index)}>戻す</button>
                </div>
                );
            })}
            </ul>
        </div>
    );
}
  