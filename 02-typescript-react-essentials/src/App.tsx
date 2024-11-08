import Component from "./starter/05-challenge";
function App() {
  return (
    <main>
      <h2>React & Typescript</h2>
      <Component type="basic" name="susan" />
      <Component
        type="advanced"
        name="anny"
        email="dummy@dummy.com"
      ></Component>
    </main>
  );
}

export default App;
