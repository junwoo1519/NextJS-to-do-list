import styled from "@emotion/styled";
import {RiDeleteBin6Line, RiEdit2Line} from "react-icons/ri";
import {FaCheck} from "react-icons/fa6";
import React, {useState} from "react";
import {ITodos} from "@/src/models/data";
import {useList} from "@/src/hooks/useList";

const List: React.FC<{ todos: ITodos[]; setTodos: React.Dispatch<React.SetStateAction<ITodos[]>> }> = ({
                                                                                                         todos,
                                                                                                         setTodos
                                                                                                       }) => {

  const {
    editingTodoId,
    editTexts,
    setEditTexts,
    handleTodoEdit,
    handleTodoSave,
    handleTodoDelete,
    handleTodoCheck,
  } = useList(todos, setTodos);

  return (
    <TodoList>
      {todos.map((todo) => (
        <TodoItem key={todo.id} onClick={() => handleTodoCheck(todo.id)}
                  style={todo.done ? {
                    color: "#7E7E7EFF",
                  } : {}}>
          {editingTodoId === todo.id ? (
            <>
              <InputEdit
                type="text"
                value={editTexts[todo.id] || ""}
                onChange={(e) =>
                  setEditTexts((prevEditTexts) => ({
                    ...prevEditTexts,
                    [todo.id]: e.target.value,
                  }))
                }
              />
              <ButtonGroup>
                <button onClick={() => handleTodoSave(todo.id)}>
                  <FaCheck/>
                </button>
              </ButtonGroup>
            </>
          ) : (
            <>
              <Text>{todo.text}</Text>
              <ButtonGroup>
                <button onClick={() => handleTodoEdit(todo.id)}>
                  <RiEdit2Line/>
                </button>
                <button onClick={() => handleTodoDelete(todo.id)}>
                  <RiDeleteBin6Line/>
                </button>
              </ButtonGroup>
            </>
          )}
        </TodoItem>
      ))}
    </TodoList>
  );
};

const TodoList = styled.ul`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;
  margin-bottom: 16px;

  &::-webkit-scrollbar {
    width: 16px;
  }

  &::-webkit-scrollbar-thumb {
    background: #041955;
    border-radius: 16px;
    border: 4px solid #3450a1;
  }

  &::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0);
  }
`;
const TodoItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  background: #041955;
  border: 1px solid transparent;
  padding: 8px 16px;
  border-radius: 8px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.30);
  transition: 0.3s ease-in-out;
  text-decoration-color: #FFF;
  color: #FFF;
  cursor: pointer;

  &:hover {
    background: #0e2f91;
  }
`;
const Text = styled.p`
  color: inherit;
  font-weight: 600;
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  button {
    width: 16px;
    height: 16px;
    color: #FFF;
  }
`;
const InputEdit = styled.input`
  flex: 1;
  padding: 4px 8px;
  background: transparent;
  border: 2px solid #FFF;
  color: #FFFFFF;
  border-radius: 8px;
`;
export default List;