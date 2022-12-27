import React, { useContext } from "react";
import Row from "react-bootstrap/Row";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { Col } from "react-bootstrap";
import { DragDrop } from "../../contextApi/dragDropContext";

import Table from "../ToolBarComponent/Table";
import BarGraph from "../ToolBarComponent/BarGraph";
import ChartGraph from "../ToolBarComponent/ChartGraph";

export default function Canvas() {
  const { list, setList } = useContext(DragDrop);

  const component = {
    Table: <Table />,
    Bar: <BarGraph />,
    Chart: <ChartGraph />,
  };
  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(list);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setList(items);
    console.log(result);
  }
  return (
    <>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="button" direction="horizontal">
          {(provided) => (
            <Col
              className="canvas"
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <Row xs={1} md={2}>
                {list.map((item, index) => {
                  console.log("component=-====", component);
                  return (
                    <Draggable
                      key={`${item.id}`}
                      draggableId={`${item.id}`}
                      index={index}
                    >
                      {(provided) => (
                        <span
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <Col style={{ marginBottom: "20px" }}>
                            {component[`${item.id}`]}
                          </Col>
                        </span>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </Row>
            </Col>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
}
