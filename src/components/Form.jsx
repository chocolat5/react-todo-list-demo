import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      task: '',
      memo: '',
    }

    this.state = this.initialState;
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  submitForm = (event) => {
    event.preventDefault();
    if(this.state.task !== '') {
      this.props.handleSubmit(this.state);
      this.setState(this.initialState);
    }
  }

  render() {
    const { task, memo } = this.state;

    return (
      <form className="form" onSubmit={this.submitForm}>
        <h2>Add New</h2>
        <input
          type="text"
          name="task"
          value={task}
          placeholder="Task"
          onChange={this.handleChange}
          required
          />
        <input
          type="text"
          name="memo"
          value={memo}
          placeholder="Memo"
          onChange={this.handleChange}
          />
        <input
          type="submit"
          value="Add"
          />
      </form>
    );
  }
}

export default Form;