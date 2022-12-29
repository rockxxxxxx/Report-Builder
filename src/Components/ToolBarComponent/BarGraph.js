import React, { useState } from "react";
import { CChart } from "@coreui/react-chartjs";
import Card from "react-bootstrap/Card";
import Draggable from "react-draggable";
import { month } from "../../Resources/month";

export default function BarGraph() {
  const [barData, setBarData] = useState([]);

  const AddNewData = (event) => {
    const rand = Math.floor(Math.random() * 70) + 10;
    setBarData([...barData, rand]);
  };

  return (
    <Card>
      <Draggable bounds={{ left: 0, top: 0, right: 0, bottom: 230 }}>
        <Card.Header>
          <div className="card-header d-flex justify-content-between align-items-center">
            <h5 style={{ cursor: "pointer" }}>Bar Graph</h5>

            <Draggable
              bounds={{ left: -290, top: 0, right: 0, bottom: 250 }}
              onDrag={(event) => event.stopPropagation()}
              onStart={(event) => event.stopPropagation()}
              onStop={(event) => event.stopPropagation()}
              onMouseDown={(event) => event.stopPropagation()}
              onMouseUp={(event) => event.stopPropagation()}
              onTouchStart={(event) => event.stopPropagation()}
              onTouchEnd={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="btn btn-sm btn-primary"
                onClick={() => AddNewData()}
              >
                Add
              </button>
            </Draggable>
          </div>
        </Card.Header>
      </Draggable>

      <Card.Body>
        <CChart
          type="bar"
          data={{
            labels: month,
            datasets: [
              {
                label: "GitHub Commits",
                backgroundColor: "#f87979",
                data: barData,
              },
            ],
          }}
          labels="months"
        />
      </Card.Body>
    </Card>
  );
}
