import { Header } from "./components/header/Header";
import { Table } from "./components/table/Table";
import { styled } from "styled-components";

const Container = styled.div`
  margin: 10vh 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <>
      <Header />
      <Container>
        <Table />
      </Container>
    </>
  );
}

export default App;
