import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const state = useSelector((state) => state.account);
  console.log(" <<== state ==>> ", state);

  return (
    <div className="App">
      <p>Hello</p>
    </div>
  );
}

export default App;
