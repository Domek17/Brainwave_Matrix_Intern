import style from "./CheckedItemsStatistics.module.css";

export default function CheckedItemsStatistics({ taskItems }) {
  if (taskItems.length === 0)
    return (
      <footer className={style["footer"]}>
        <p>Start adding some tasks to your list 😎</p>
      </footer>
    );

  const numItems = taskItems.length;
  const checkedItems = taskItems.slice().filter((item) => item.checked).length;
  const percentage = (checkedItems / numItems) * 100;

  return (
    <footer className={style["footer"]}>
      <p>
        {percentage === 100
          ? `All tasks are checked 🎉`
          : `You checked ${checkedItems} out of ${numItems} tasks (
          ${Math.round(percentage)}
          %)`}
      </p>
    </footer>
  );
}
