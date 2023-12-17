import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

export default function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div>
      <h1>Todos</h1>
      {todos.map((item, index) => (
        <div key={item.id} className="flex-auto">
          {index}. {item.name}
          <div>
            <button onClick={() => handleDelete(item.id)}>delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}
