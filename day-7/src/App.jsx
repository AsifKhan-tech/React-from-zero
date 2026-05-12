import Card from "./components/Card";

import "./App.css";

function App() {
  let anyObject = {
    userName: "dev.asif",
    profession: "Software Developer",
  };

  return (
    <>
      <h1 className="text-3xl font-bold bg-sky-600 text-blue-300 mb-4">
        Day-7: Tailwind & props
      </h1>

      {/* Card  */}
      <Card name="Asif" anObject={anyObject} />
      <Card />
      <Card />
    </>
  );
}

export default App;
