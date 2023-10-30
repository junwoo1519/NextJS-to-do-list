import styled from "@emotion/styled";
import Template from "@/src/components/Template";
import Header from "@/src/components/Header";
import Create from "@/src/components/Create";
import List from "@/src/components/List";
import {useState} from "react";
import {initialTodos, ITodos} from "@/src/models/data";

const Home = () => {

  const [todos, setTodos] = useState<ITodos[]>(initialTodos);

  return (
    <Container>
      <Template>
        <Header/>
        <List todos={todos} setTodos={setTodos}/>
        <Create setTodos={setTodos}/>
      </Template>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: #97b4ff;
`;

export default Home;