import React, { Component } from "react";
import { connect } from "react-redux";

import "./styles.scss";
import InCompleteTodoIcon from "../../assets/images/tick.svg";
import CompleteTodoIcon from "../../assets/images/greenTick.svg";
import { toggleComplete } from "../../actions";

class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.handleComplete = this.handleComplete.bind(this);
  }

  handleComplete = () => {
    this.props.toggleComplete(this.props.id);
  };

  render() {
    let { id, text, completed } = this.props;
    return (
      <li key={id} className="todoListItem">
        {text}
        <img
          src={completed ? CompleteTodoIcon : InCompleteTodoIcon}
          className="todoCompleteIcon"
          title={completed ? "Mark as not completed" : "Mark as completed"}
          onClick={this.handleComplete}
        />
      </li>
    );
  }
}

const mapDispatchToProps = { toggleComplete };

export default connect(null, mapDispatchToProps)(TodoItem);
