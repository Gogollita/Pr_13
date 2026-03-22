import { useState } from 'react';

function EditTodoItem({ task, onSave, onCancel }) {
  const [editText, setEditText] = useState(task.text);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editText.trim()) {
      onSave(task.id, editText.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit}
      style={{
        display: 'flex',
        gap: '10px',
        alignItems: 'center'
      }}>
      <input
        type="text"
        value={editText}
        onChange={(e) => setEditText(e.target.value)}
        autoFocus
        style={{
          flex: 1,
          padding: '8px',
          border: '1px solid #ddd',
          borderRadius: '4px'
        }}
      />
      <button type="submit"
        style={{
          background: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          padding: '8px 8px',
          cursor: 'pointer'
        }}>
        Сохранить
      </button>
      <button type="button" onClick={onCancel} style={{
        marginRight: '8px',
        background: '#ff4444',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        padding: '8px 10px',
        cursor: 'pointer'
      }}>
        Отмена
      </button>
    </form>
  );
}

export default EditTodoItem;