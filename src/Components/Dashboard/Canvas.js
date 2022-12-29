import React from "react";
import GridLayout from "react-grid-layout";
import styled from "styled-components";
import { DragDrop } from "../../contextApi/dragDropContext";
import { useContext } from "react";

export default function Canvas() {
  const { list } = useContext(DragDrop);
  const GridItemWrapper = styled.div`
    background: #f5f5f5;
  `;

  const GridItemContent = styled.div`
    padding: 8px;
  `;

  const Root = styled.div`
    padding: 16px;
  `;

  return (
    <Root>
      <GridLayout layout={list} cols={5} rowHeight={300} width={1000}>
        {list.map((lay) => {
          return (
            <GridItemWrapper key={lay.i}>
              <GridItemContent>{lay.c}</GridItemContent>
            </GridItemWrapper>
          );
        })}
      </GridLayout>
    </Root>
  );
}
