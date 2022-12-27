import React, { useContext } from "react";
import { toolBarName } from "../../Resources/toolBarName";
import { Button, ButtonGroup } from "react-bootstrap";
import Draggable from "react-draggable";
import { DragDrop } from "../../contextApi/dragDropContext";

export default function ToolBar() {
  const { table, setTable, chart, setChart, bar, setBar, setList, list } =
    useContext(DragDrop);

  const draggedComponent = [
    { name: "Table", value: table, updateValue: () => setTable(true) },
    { name: "Bar", value: bar, updateValue: () => setBar(true) },
    { name: "Chart", value: chart, updateValue: () => setChart(true) },
  ];

  const updateList = (data, update) => {
    setList([...list, data]);
    update();
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
          {toolBarName.map((name) => {
            return (
              <>
                {draggedComponent.map((component) => {
                  return (
                    component.name === name &&
                    component.value === false && (
                      <Draggable
                        axis="x"
                        onStop={() => {
                          updateList(
                            { id: name, name: name },
                            component.updateValue()
                          );
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
                    )
                  );
                })}
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
