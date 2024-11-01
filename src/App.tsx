import Button from "./component/Button.tsx";
import Container from './component/Container.tsx';

function App() {
  return (
      <main>
        <Container as={Button} />
      </main>
  )
}

export default App;
