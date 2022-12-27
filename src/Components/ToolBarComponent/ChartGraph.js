import React, { useState } from "react";
import { CChart } from "@coreui/react-chartjs";
import Card from "react-bootstrap/Card";
import { month } from "../../Resources/month";
import { chartGraphInitialData } from "../../Resources/chartGraphInitialData";

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
    <Card style={{ height: "300px", overflow: "auto", marginBottom: "20px" }}>
      <Card.Header>
        <div className="card-header d-flex justify-content-between align-items-center">
          <h5>Chart Graph</h5>

          <button
            type="button"
            className="btn btn-sm btn-primary"
            onClick={() => AddNewData()}
          >
            Add
          </button>
        </div>
      </Card.Header>
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
