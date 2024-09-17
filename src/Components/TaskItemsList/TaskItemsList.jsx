import React from "react";
import TaskItem from "./TaskItem/TaskItem";
import { FilterTypes } from "../../Enums/Enum";
import style from "./TaskItems.module.css";

export default function TaskItemsList({
  taskItems,
  onDeleteItem,
  handleCheckedItems,
  visibilityState,
}) {
  let filteredItems = [];

  switch (visibilityState) {
    case FilterTypes.FILTER_ALL:
      filteredItems = [...taskItems];
      break;

    case FilterTypes.FILTER_ALPHABETICALLY:
      filteredItems = taskItems
        .slice()
        .sort((a, b) => a.description.localeCompare(b.description));
      break;

    case FilterTypes.FILTER_ACTIVE:
      filteredItems = taskItems.slice().filter((item) => !item.checked);
      break;

    case FilterTypes.FILTER_COMPLETED:
      filteredItems = taskItems.slice().filter((item) => item.checked);
      break;

    default:
      filteredItems = [...taskItems];
  }

  return (
    <ul className={style["todo--list"]}>
      {filteredItems.map((item) => (
        <TaskItem
          item={item}
          key={item.id}
          onDeleteItem={onDeleteItem}
          handleCheckedItems={handleCheckedItems}
        />
      ))}
    </ul>
  );
}
