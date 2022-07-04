import Button from "./components/buttons/button";

function App() {
  return (
    <div className="App">
      <div className="App">
        <Button disabled>안녕</Button>
        <Button size="sm">안녕</Button>
        <Button size="ms">안녕</Button>
        <Button size="md">안녕</Button>
        <Button size="lg" disabled>
          안녕
        </Button>
        <Button disabled>안녕</Button>
      </div>
    </div>
  );
}

export default App;
