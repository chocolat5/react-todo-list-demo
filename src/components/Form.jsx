import React, { useState } from 'react';

const initialState = {
  task: '',
  memo: '',
};

const Form = props => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = event => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const submitForm = event => {
    event.preventDefault();
    if (formData.task !== '') {
      props.handleSubmit(formData);
      setFormData(initialState);
    }
  };

  return (
    <form className="form" onSubmit={submitForm}>
      <h2>Add New</h2>
      <input
        type="text"
        name="task"
        value={formData.task}
        placeholder="Task"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="memo"
        value={formData.memo}
        placeholder="Memo"
        onChange={handleChange}
      />
      <input type="submit" value="Add" />
    </form>
  );
};

export default Form;