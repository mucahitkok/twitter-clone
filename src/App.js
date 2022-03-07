import Aside from "./components/Aside";
import Container from "./components/Container";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";

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
