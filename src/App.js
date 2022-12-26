import "./App.css";
import SideBar from "./Components/Dashboard/SideBar";
import NavBar from "./Components/Navigation/NavBar";
import { Row } from "react-bootstrap";
import ToolBar from "./Components/Dashboard/ToolBar";

function App() {
  return (
    <div className="App">
      <Row>
        <NavBar />
        <SideBar />
        <ToolBar />
      </Row>
    </div>
  );
}

export default App;
