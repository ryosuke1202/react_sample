import React from 'react';

export const InCompleteTodos = (props) => {
    const { incompleteTodls, onClickComplete, onClickDelete } = props;
    return (
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        { incompleteTodls.length >= 5 && <p className="text-red">未完了のTODOの登録は5つまでです。</p> }
        <ul id="incomplete-list">
          {incompleteTodls.map((todo, index) => {
            return (
              <div index={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
    );
}
  