import style from "./ClearList.module.css";

export default function ClearListButton({ taskItems, onClearList }) {
  return (
    taskItems.length > 0 && (
      <button
        className={style["btn--clear__list"]}
        onClick={() => onClearList()}
      >
        Clear list
      </button>
    )
  );
}
