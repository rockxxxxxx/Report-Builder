import React from "react";
import { toolBarName } from "../../Resources/toolBarName";
import { Button, ButtonGroup } from "react-bootstrap";
import Draggable from "react-draggable";

export default function ToolBar() {
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
              <Draggable
                axis="x"
                onStop={() => {
                  console.log(name);
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
            );
          })}
        </div>
      </div>
    </div>
  );
}
