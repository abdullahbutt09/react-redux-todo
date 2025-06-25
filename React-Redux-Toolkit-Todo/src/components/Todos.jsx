import React from 'react';
import { useSelector , useDispatch} from 'react-redux';
import { removeTodo } from '../Features/todoSlice';

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
            <button
              className="bg-red-500 hover:bg-red-600 p-2 rounded-full text-white transition"
              title="Delete"
              onClick={() => dispatch(removeTodo(todo.id))}
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
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;