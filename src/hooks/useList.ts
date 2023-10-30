import React, {useState} from "react";
import {ITodos} from "@/src/models/data";

export const useList = (todos: ITodos[], setTodos: React.Dispatch<React.SetStateAction<ITodos[]>>) => {
  const [editingTodoId, setEditingTodoId] = useState<number | null>(null);
  const [editTexts, setEditTexts] = useState<{ [key: number]: string }>({});

  const handleTodoEdit = (id: number) => {
    setEditingTodoId(id);
    const todoEdit = todos.find((todo) => todo.id === id);
    if (todoEdit) {
      setEditTexts((prevEditTexts) => ({
        ...prevEditTexts,
        [id]: todoEdit.text,
      }));
    }
  };

  const handleTodoSave = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? {...todo, text: editTexts[id]} : todo
      )
    );
    setEditingTodoId(null);
  };

  const handleTodoDelete = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleTodoCheck = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? {...todo, done: !todo.done} : todo
      )
    );
  };

  return {
    editingTodoId,
    editTexts,
    setEditTexts,
    handleTodoEdit,
    handleTodoSave,
    handleTodoDelete,
    handleTodoCheck,
  };
}