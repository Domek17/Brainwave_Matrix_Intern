import style from "./TodoForm.module.css";

export default function TodoForm({ taskItem, setTaskItem, onSubmitAddItem }) {
  return (
    <form className={style["todo-form"]} onSubmit={(e) => onSubmitAddItem(e)}>
      <input
        type="text"
        value={taskItem}
        onChange={(e) => setTaskItem(e.target.value)}
      />

      <button>Add task</button>
    </form>
  );
}
