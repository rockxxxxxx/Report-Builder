import React, { useState } from "react";
import { Card } from "react-bootstrap";
import ContentEditable from "react-contenteditable";

export default function Title() {
  const contentEditable = React.createRef();
  const [html, setHtml] = useState("Title");
  const handleChange = (evt) => {
    setHtml(evt.target.value);
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <Card>
        <Card.Header>
          <ContentEditable
            innerRef={contentEditable}
            html={html} // innerHTML of the editable div
            disabled={false} // use true to disable editing
            onChange={handleChange} // handle innerHTML change
            tagName="article" // Use a custom HTML tag (uses a div by default)
          />
        </Card.Header>
      </Card>
    </div>
  );
}
