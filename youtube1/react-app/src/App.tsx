import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  return (
    <div className="alert alert-primary">
      <Alert>Hello <span>World</span></Alert>
      <Button color="secondary" onClick={() => console.log('Clicked')}>My Button</Button>
    </div>
  );
}

export default App;
