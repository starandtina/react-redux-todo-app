import React, { Component, PropTypes } from 'react';

export default class TodoItemView extends Component {
  render() {
    return (
      <p>i'm a todo item with id of {this.props.params.id}</p>
    );
  }
}

TodoItemView.propTypes = {
  params: PropTypes.object.isRequired
};
