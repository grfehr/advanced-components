import Input from "./component/Input.tsx";
function App() {
  return (
      <main>
        <Input label={"Your Name"} id={"name"} />
        <Input label={"Your Age"} id={"age"} />
      </main>
  )
}

export default App;
