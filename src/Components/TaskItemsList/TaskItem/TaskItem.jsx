import React from "react";
import Button from "react-bootstrap/Button";
import style from "./TaskItem.module.css";

export default class TaskItem extends React.Component {
  onClickDeleteItem(item) {
    this.props.onDeleteItem(item);
  }

  onCheckedItems(item) {
    this.props.handleCheckedItems(item);
  }

  render() {
    return (
      <li className={style["todo--list__item"]}>
        <div>
          <input
            type="checkbox"
            checked={this.props.item.checked}
            onChange={() => this.onCheckedItems(this.props.item)}
          />

          <span className={this.props.item.checked ? style["checked"] : ""}>
            {this.props.item.description}
          </span>
        </div>

        <Button
          variant="danger"
          onClick={() => this.onClickDeleteItem(this.props.item)}
        >
          Delete
        </Button>
      </li>
    );
  }
}
