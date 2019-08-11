import React, { Component } from 'react';

const ListHeader = () => {
  return(
    <li className="list_header">
      <dl>
        <dt>Task</dt><dd>Memo</dd><dd>Remove</dd>
      </dl>
    </li>
  );
}

const ListBody = props => {
  const rows = props.todoData.map((row, index) => {
    return(
      <li key={index}>
        <dl>
          <dt>{row.task}</dt>
          <dd>{row.memo}</dd>
          <dd><button onClick={() => props.removeTodo(index)}>Delete</button></dd>
        </dl>
      </li>
    )
  });
  return rows
}


class List extends Component {
  render() {
    const { todoData, removeTodo } = this.props;

    return (
      <ul className="list">
        <ListHeader />
        <ListBody todoData={todoData} removeTodo={removeTodo} />
      </ul>
    );
  }
}

export default List;