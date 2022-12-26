import "./App.css";
import SideBar from "./Components/Dashboard/SideBar";
import NavBar from "./Components/Navigation/NavBar";
import { Row, Col } from "react-bootstrap";
import ToolBar from "./Components/Dashboard/ToolBar";

function App() {
  return (
    <div className="App">
      <Row>
        <NavBar />
        <Col>
          <SideBar />
        </Col>
        <Col xs={7}></Col>
        <Col>
          <ToolBar />
        </Col>
      </Row>
    </div>
  );
}

export default App;
