import { useState, useEffect } from "react";

export default function Player({ playerName, symbol, isActive, onChangeName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(playerName);

  useEffect(() => {
    setEditedName(playerName);
  }, [playerName]);

  function handleEdit() {
    setIsEditing((prev) => !prev);
    if (isEditing) onChangeName(symbol, editedName);
  }

  function handleChange(event) {
    setEditedName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  if (isEditing)
    editablePlayerName = (
      <input type="text" required value={editedName} onChange={handleChange} />
    );

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
