import clsx from "clsx";

const User = ({ onDragStart, isPlaceholder = false, children }) => (
  <span
    className={clsx(
      "cursor-grab bg-white p-2 border border-gray-300 rounded-md ",
      "transition duration-300 ease-in-out hover:bg-gray-200",
      isPlaceholder ? "border-dashed opacity-50" : "border-solid"
    )}
    draggable
    onDragStart={onDragStart}
  >
    {children}
  </span>
);
export default User;
