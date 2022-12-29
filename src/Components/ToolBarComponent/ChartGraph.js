import React, { useState } from "react";
import { CChart } from "@coreui/react-chartjs";
import Card from "react-bootstrap/Card";
import { month } from "../../Resources/month";
import { chartGraphInitialData } from "../../Resources/chartGraphInitialData";
import Draggable from "react-draggable";

export default function ChartGraph() {
  const [chartData1, setChartData1] = useState([]);
  const [chartData2, setChartData2] = useState([]);

  const AddNewData = () => {
    const rand = Math.floor(Math.random() * 70) + 10;
    const rand1 = Math.floor(Math.random() * 60) + 20;
    setChartData1([...chartData1, rand]);
    setChartData2([...chartData2, rand1]);
  };

  return (
    <Card style={{ height: "300px", overflow: "auto" }}>
      <Draggable bounds={{ left: 0, top: 0, right: 0, bottom: 230 }}>
        <Card.Header>
          <div className="card-header d-flex justify-content-between align-items-center">
            <h5 style={{ cursor: "pointer" }}>Chart Graph</h5>

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
          type="line"
          data={{
            labels: month,
            datasets: [
              { ...chartGraphInitialData[0], data: chartData1 },
              { ...chartGraphInitialData[1], data: chartData2 },
            ],
          }}
        />
      </Card.Body>
    </Card>
  );
}
