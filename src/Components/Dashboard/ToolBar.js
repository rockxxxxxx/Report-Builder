import React, { useContext } from "react";
import { toolBarName } from "../../Resources/toolBarName";
import { Button, ButtonGroup } from "react-bootstrap";
import Draggable from "react-draggable";
import { DragDrop } from "../../contextApi/dragDropContext";
import Title from "../ToolBarComponent/Title";
import Table from "../ToolBarComponent/Table";
import BarGraph from "../ToolBarComponent/BarGraph";
import ChartGraph from "../ToolBarComponent/ChartGraph";

export default function ToolBar() {
  const { setList, list } = useContext(DragDrop);

  const draggedComponent = {
    Table: <Table />,
    Bar: <BarGraph />,
    Chart: <ChartGraph />,
    Title: <Title />,
  };
  const updateList = (data) => {
    setList([...list, data]);
    console.log(list);
  };

  return (
    <div style={{ backgroundColor: "white", height: "90vh" }} className="card">
      <div className="card-container">
        <ButtonGroup
          aria-label="Basic example"
          style={{ marginBottom: "25px" }}
        >
          <Button className="active" variant="secondary">
            Components
          </Button>
          <Button variant="secondary">Charts</Button>
        </ButtonGroup>
        <div className="d-grid gap-2">
          {toolBarName.map((name, index) => {
            return (
              <>
                <Draggable
                  bounds={{ left: 0, top: 0, right: 0, bottom: 0 }}
                  axis="x"
                  onStop={() => {
                    updateList({
                      i: `${name}${list.length}`,
                      x: list.length % 2 === 0 ? 0 : 1,
                      y: 0,
                      w: name === "Title" ? 2 : 1,
                      h: name === "Title" ? 0.2 : 1,
                      c: draggedComponent[name],
                    });
                  }}
                >
                  <Button
                    variant="outline-success"
                    size="md"
                    style={{ textAlign: "left" }}
                  >
                    {name}
                  </Button>
                </Draggable>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
