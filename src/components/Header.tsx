import styled from "@emotion/styled";

const Header = () => {
  return (
    <TodoHeader>
      Todo List
    </TodoHeader>
  )
}

const TodoHeader = styled.h1`
  margin-bottom: 16px;
  color: #FFFFFF;
  border-bottom: 1px solid #FFF;
  font-weight: 600;
  font-size: 36px;
`;

export default Header;