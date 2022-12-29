import React from "react";
import { Card } from "react-bootstrap";

export default function Title() {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Card>
        <Card.Header>
          <span style={{ cursor: "pointer" }}>Title</span>
        </Card.Header>
      </Card>
    </div>
  );
}
