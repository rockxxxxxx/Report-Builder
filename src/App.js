import "./App.css";
import SideBar from "./Components/Dashboard/SideBar";
import NavBar from "./Components/Navigation/NavBar";

import ToolBar from "./Components/Dashboard/ToolBar";
import Canvas from "./Components/Dashboard/Canvas";
import React from "react";

import { Responsive, WidthProvider } from "react-grid-layout";

const ResponsiveGridLayout = WidthProvider(Responsive);

function App() {
  var layout = [
    { i: "NavBar", x: 0, y: 0, w: 12, h: 0.2, static: true },
    { i: "SideBar", x: 0, y: 0, w: 2, h: 1, static: true },
    { i: "Canvas", x: 2, y: 0, w: 6, h: 1, static: true },
    { i: "ToolBar", x: 9, y: 0, w: 3, h: 1, static: true },
  ];
  layout = { lg: layout };
  return (
    <>
      <div key="NavBar" style={{ backgroundColor: "yellow" }}>
        <NavBar />
      </div>
      <ResponsiveGridLayout
        className="layout"
        layouts={layout}
        breakpoints={{ lg: 1200 }}
        cols={{ lg: 12 }}
        rowHeight={281}
        width={1200}
      >
        <div key="SideBar">
          <SideBar />
        </div>
        <div key="Canvas">
          <Canvas />
        </div>
        <div key="ToolBar">
          <ToolBar />
        </div>
      </ResponsiveGridLayout>
    </>
  );
}

export default App;
