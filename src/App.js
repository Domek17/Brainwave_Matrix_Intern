import { useEffect, useState } from "react";
import { FilterTypes } from "./Enums/Enum.js";
import VisibilityFilterButtons from "./Components/VisibilityFilterButtons/VisibilityFilterButtons";
import TodoForm from "./Components/TodoForm/TodoForm";
import TaskItemsList from "./Components/TaskItemsList/TaskItemsList";
import CheckedItemsStatistics from "./Components/CheckedItemsStatistics/CheckedItemsStatistics.jsx";
import PropTypes from "prop-types";
import ClearListButton from "./Components/ClearListButton/ClearListButton.jsx";
import style from "./App.module.css";
import Header from "./Components/Header/Header.jsx";

function App() {
  const [taskItems, setTaskItems] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  );
  const [taskItem, setTaskItem] = useState("");
  const [visibility, setVisibility] = useState(FilterTypes.FILTER_ALL);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(taskItems));
  }, [taskItems]);

  function handleSubmitAddItem(e) {
    e.preventDefault();
    if (!taskItem) return;

    const newItem = { description: taskItem, id: Date.now(), checked: false };
    setTaskItems([...taskItems, newItem]);
    setTaskItem("");
  }

  function handleDeleteItem(selectedItem) {
    const newTaskItems = taskItems.filter(
      (item) => item.id !== selectedItem.id
    );
    setTaskItems([...newTaskItems]);
  }

  function handleCheckedItems(item) {
    item.checked = !item.checked;
    setTaskItems([...taskItems]);
  }

  function handleFilterItems(visibilityValue) {
    setVisibility(visibilityValue);
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to clear the list?"
    );

    if (confirmed) setTaskItems([]);
  }

  return (
    <div className={style["app"]}>
      <div className={style["todo--container"]}>
        <Header />

        <VisibilityFilterButtons handleFilterItems={handleFilterItems} />

        <TodoForm
          taskItem={taskItem}
          setTaskItem={setTaskItem}
          onSubmitAddItem={handleSubmitAddItem}
        />

        <TaskItemsList
          taskItems={taskItems}
          onDeleteItem={handleDeleteItem}
          handleCheckedItems={handleCheckedItems}
          visibilityState={visibility}
        />

        <ClearListButton taskItems={taskItems} onClearList={handleClearList} />

        <CheckedItemsStatistics taskItems={taskItems} />
      </div>
    </div>
  );
}

export default App;

App.propTypes = {
  taskItems: PropTypes.object,
};
