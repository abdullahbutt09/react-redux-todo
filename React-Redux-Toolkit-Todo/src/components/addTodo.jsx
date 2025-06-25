import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../Features/todoSlice';

function AddTodo() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();

    const trimmedInput = input.trim();

    if(!trimmedInput){
        alert("Please enter a todo before adding."); // 4. Show alert
        return;
    }
    dispatch(addTodo(trimmedInput));
    setInput('');
  };

  return (
    <form
      onSubmit={addTodoHandler}
      className="mt-12 flex flex-col gap-5 items-center px-4"
    >
      <h1 className="text-4xl font-extrabold text-indigo-500 drop-shadow-lg tracking-wide text-center">
        🚀 REACT REDUX TODO APP 🚀
      </h1>

      <div className="flex flex-col md:flex-row gap-3 md:w-full max-w-xl">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a todo..."
          className="w-full bg-white text-gray-800 rounded-lg border border-gray-300 px-4 py-3 focus:outline-none shadow-sm text-lg"
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-200 shadow-md text-lg font-semibold w-full md:w-auto cursor-pointer"
        >
          Add
        </button>
      </div>
    </form>
  );
}

export default AddTodo;
