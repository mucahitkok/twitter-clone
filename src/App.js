import Aside from "./layout/Aside";
import Container from "./layout/Container";
import Content from "./layout/Content";
import Sidebar from "./layout/Sidebar";

function App() {
  return (
    <Container>
      <Sidebar />
      <Content />
      <Aside />
    </Container>
  );
}

export default App;
