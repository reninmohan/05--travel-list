export default function Item({ item, onDeleteItem, onToggeleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        value={item.packed}
        onChange={() => {
          onToggeleItem(item.id);
        }}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button
        onClick={() => {
          onDeleteItem(item.id);
        }}
      >
        ❌
      </button>
    </li>
  );
}
