import styled from "@emotion/styled";
import {ReactNode} from "react";

interface  Props {
  children: ReactNode;
}
const Template = ({ children } : Props) => {
  return <TodoTemplate>{children}</TodoTemplate>;
}

const TodoTemplate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #3450a1;
  width: 380px;
  height: 80vh;
  padding: 32px;
  border-radius: 52px;
`;

export default Template;