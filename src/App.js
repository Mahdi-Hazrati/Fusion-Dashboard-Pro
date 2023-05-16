import Home from "./Pages/Home/Home";
import List from "./Pages/List/List";
import Login from "./Pages/Login/Login";
import New from "./Pages/New/New";
import Single from "./Pages/Single/Single";

function App() {
  return (
    <>
    <div className="app">
      <Home />
      <List />
      <Login />
      <New />
      <Single />
    </div>
    </>
  );
}

export default App;
