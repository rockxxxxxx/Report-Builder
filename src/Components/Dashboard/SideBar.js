import React from "react";
import { Form, Accordion } from "react-bootstrap";
import { accordianData } from "../../Resources/accordionData";

export default function SideBar() {
  return (
    <div
      style={{
        backgroundColor: "white",
        height: "90vh",
      }}
      className="card"
    >
      <div className="card-container">
        <p>
          <b>Project Name</b>
        </p>
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        {accordianData.map((accordian) => {
          return (
            <Accordion style={{ marginTop: "30px" }}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>{accordian.header}</Accordion.Header>
                <Accordion.Body style={{ fontSize: "14px" }}>
                  {accordian.item.map((item) => {
                    return <p>{item}</p>;
                  })}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          );
        })}
      </div>
    </div>
  );
}
