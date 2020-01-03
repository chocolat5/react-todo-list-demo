import React from 'react';

const ListHeader = () => {
  return (
    <li className="list_header">
      <dl>
        <dt>Task</dt><dd>Memo</dd><dd>Remove</dd>
      </dl>
    </li>
  );
};

const ListBody = props => {
  return props.todoData.map((row, index) => {
    return (
      <li key={index}>
        <dl>
          <dt>{row.task}</dt>
          <dd>{row.memo}</dd>
          <dd><button onClick={() => props.removeTodo(index)}>Delete</button></dd>
        </dl>
      </li>
    )
  });
};

const List = ({ todoData, removeTodo }) => (
  <ul className="list">
    <ListHeader />
    <ListBody todoData={todoData} removeTodo={removeTodo} />
  </ul>
);

export default List;