import styled from "@emotion/styled";
import {TbInputCheck} from "react-icons/tb";
import React from "react";
import {ITodos} from "@/src/models/data";
import {useCreate} from "@/src/hooks/useCreate";

const Create: React.FC<{ setTodos: React.Dispatch<React.SetStateAction<ITodos[]>> }> = ({setTodos}) => {
  const {newText, handleChange, handleInputRegister, onCheckEnter} = useCreate(setTodos);

  return (
    <TodoCreat onKeyUp={onCheckEnter}>
      <input type="text" placeholder={'Please enter text.'} onChange={handleChange} value={newText}/>
      <button onClick={handleInputRegister}><TbInputCheck size={'24'}/></button>
    </TodoCreat>
  );
};

const TodoCreat = styled.div`
  position: relative;

  input {
    width: 100%;
    border: 2px solid transparent;
    background: #041955;
    padding: 8px 40px 8px 16px;
    color: #FFFFFF;
    border-radius: 8px;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.30);
    transition: 0.3s ease-in-out;

    &::placeholder {
      color: rgb(126, 126, 126);
    }

    &:focus, &:hover {
      outline: 0;
      border: 2px solid #041955;
      background: transparent;
    }
  }

  button {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(-50%, -50%);
    display: block;
    color: #FFFFFF;
  }
`;

export default Create;