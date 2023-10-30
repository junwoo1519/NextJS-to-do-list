import React, {useState} from "react";
import {ITodos} from "@/src/models/data";

export const useCreate = (setTodos: React.Dispatch<React.SetStateAction<ITodos[]>>) => {
  const [newText, setNewText] = useState('');
  const [newId, setNewId] = useState(3);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewText(e.target.value);
  };

  const addTodo = () => {
    setTodos((todos) => [...todos, {id: newId, text: newText, done: false}]);
    setNewId((prevId: number) => prevId + 1);
  };

  const clearInput = () => {
    setNewText('');
  };

  const handleInputRegister = () => {
    addTodo();
    clearInput();
  };

  const onCheckEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleInputRegister();
    }
  };

  return {
    newText,
    handleChange,
    handleInputRegister,
    onCheckEnter,
  };
};