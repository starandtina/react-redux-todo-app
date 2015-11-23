import React, { Component, PropTypes } from 'react';
import ReactDOM                        from 'react-dom';

const ENTER_KEY_CODE = 13;

export default class AddTodo extends Component {
  render() {
    return (
      <div>
        <input
          type='text'
          ref='input'
          onBlur={(e) => this.handleClick(e)}
          onKeyDown={(e) => this._onKeyDown(e)}
          autoFocus={true}
        />
        <button onClick={(e) => this.handleClick(e)}>
          Add
        </button>
      </div>
    );
  }

  _onKeyDown(e) {
     if (e.keyCode === ENTER_KEY_CODE) {
      this.handleClick(e);
    }
  }

  handleClick(e) {
    const node = ReactDOM.findDOMNode(this.refs.input);
    const text = node.value.trim();
    if (text) {
      this.props.onAddClick(text);
    }
    node.value = '';
  }
}

AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired
};
