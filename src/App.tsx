import Input from './component/Input.tsx';
import Form from "./component/Form.tsx";
import Button from './component/Button.tsx';

function App() {
    function handleSave(data: unknown) {
        const extractedData = data as {name: string; age: string};
        console.log(extractedData);
    };

    return (
        <main>
            <Form onSave={handleSave}>
                <Input label={"Name"} type={"text"} id={"name"} />
                <Input label={"Age"} type={"number"} id={"age"} />
                <p><Button>Save</Button></p>
            </Form>
        </main>
    );
}
export default App;
