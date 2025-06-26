import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../Features/todoSlice';

function Todos() {
  const todos = useSelector((state) => state.todo.todos || []);
  const dispatch = useDispatch();

  return (
    <div className="max-w-xl mx-auto mt-10 px-4">
      <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center drop-shadow">
        📝 Your Todos
      </h2>

      <ul className="space-y-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center bg-zinc-800 rounded-lg px-4 py-3 shadow-sm transition hover:shadow-md"
          >
            <span className="text-white text-lg font-medium">{todo.text}</span>

            <div className="flex gap-2">
              {/* ✅ Update button with inline logic */}
              <button
                onClick={() => {
                  const newText = prompt("Update todo:", todo.text);
                  if (newText && newText.trim()) {
                    dispatch(updateTodo({ id: todo.id, text: newText.trim() }));
                  }
                }}
                className="bg-yellow-500 hover:bg-yellow-600 p-2 rounded-full text-white transition"
                title="Update"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828l-9.586 9.586H9v-2.828l9.586-9.586z"
                  />
                </svg>
              </button>

              {/* Delete button */}
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="bg-red-500 hover:bg-red-600 p-2 rounded-full text-white transition"
                title="Delete"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;