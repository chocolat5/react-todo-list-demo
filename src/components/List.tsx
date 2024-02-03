import { ReactElement } from "react";

import { Todo } from "@/src/types";
import "@/src/styles/list.css";

function ListHeader(): ReactElement {
  return (
    <li className="list_header">
      <dl>
        <dt>Task</dt>
        <dd>Memo</dd>
        <dd>Remove</dd>
      </dl>
    </li>
  );
}

interface ListBodyProps {
  todoData: Todo[];
  removeTodo: (index: number) => void;
}

function ListBody({ todoData, removeTodo }: ListBodyProps): ReactElement {
  return (
    <>
      {todoData.map((row, index) => (
        <li key={row.task} className="list_item">
          <dl>
            <dt>{row.task}</dt>
            <dd>{row.memo}</dd>
            <dd>
              <button
                className="button list_button"
                type="button"
                onClick={() => removeTodo(index)}
              >
                Delete
              </button>
            </dd>
          </dl>
        </li>
      ))}
    </>
  );
}

interface Props {
  todoData: Todo[];
  removeTodo: (index: number) => void;
}

function List({ todoData, removeTodo }: Props): ReactElement {
  return (
    <ul className="list">
      <ListHeader />
      <ListBody todoData={todoData} removeTodo={removeTodo} />
    </ul>
  );
}

export default List;
