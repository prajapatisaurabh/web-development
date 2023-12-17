import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoList } from "../features/todo/todoSlice";

export default function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHanlder = (e) => {
    e.preventDefault();
    dispatch(addTodoList(input));
    setInput("");
  };
  return (
    <>
      <form onSubmit={addTodoHanlder} className="space-x-3 mt-12">
        <input
          type="text"
          className=""
          placeholder="Enter a todo...."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        />
      </form>
    </>
  );
}
