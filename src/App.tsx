import Button from "./component/Button.tsx";
import Container from './component/Container.tsx';

function App() {
  return (
      <main>
          <Container as={Button} onClick={() => {}} type ="button">
              Click Me
              </Container>
      </main>
  )
}

export default App;
