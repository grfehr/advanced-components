import Input from './component/Input.tsx';
import Form from "./component/Form.tsx";
import Button from './component/Button.tsx';

function App() {
    return (
        <main>
            <Form>
                <Input label={"Name"} type={"text"} id={"name"} />
                <Input label={"Age"} type={"number"} id={"age"} />
                <p><Button>Save</Button></p>
            </Form>
        </main>
    );
}
export default App;
