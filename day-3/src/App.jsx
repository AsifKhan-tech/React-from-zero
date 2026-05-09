import Test from "./components/Test.jsx";

function App() {
  const cost = 10; //expression
  return (
    <>
      <h1>Day-3: Understand React flow & Structure</h1>
      <p>Cost: ${cost}</p>
      {/* evaluated expression */}
      <Test />
    </>
  );
}

export default App;
