import { ChangeEvent, FormEvent, ReactElement, useState } from "react";

import { Todo } from "@/src/types";
import "@/src/styles/form.css";

const initialState: Todo = {
  task: "",
  memo: "",
};

interface Props {
  handleSubmit: (formData: Todo) => void;
}

function Form({ handleSubmit }: Props): ReactElement {
  const [formData, setFormData] = useState<Todo>(initialState);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formData.task !== "") {
      handleSubmit(formData);
      setFormData(initialState);
    }
  };

  return (
    <form className="form" onSubmit={submitForm}>
      <h2>Add New</h2>
      <input
        className="field"
        type="text"
        name="task"
        value={formData.task}
        placeholder="Task"
        onChange={handleChange}
        required
      />
      <input
        className="field"
        type="text"
        name="memo"
        value={formData.memo}
        placeholder="Memo"
        onChange={handleChange}
      />
      <input className="submit" type="submit" value="Add" />
    </form>
  );
}

export default Form;
