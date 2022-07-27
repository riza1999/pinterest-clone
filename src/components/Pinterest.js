import React from "react";
import { CSSGrid, layout, SpringGrid } from "react-stonecutter";
import { random, times } from "lodash";
import styled from "styled-components";

const Card = styled.div`
  height: 100px;
  width: 100px;
  background: teal;
  color: white;
`;

const Pinterest = () => {
  const [, setThing] = React.useState(1);
  const [myLayout, setMyLayout] = React.useState("default");

  const toggleLayout = () => {
    myLayout === "default" ? setMyLayout("pinterest") : setMyLayout("default");
  };

  return (
    <div>
      <button onClick={() => setThing(Math.random())}>Random stuff</button>
      <button onClick={() => toggleLayout()}>Change layout</button>

      {myLayout === "default" && (
        <SpringGrid
          component="div"
          columns={5}
          columnWidth={100}
          gutterWidth={5}
          gutterHeight={5}
          itemHeight={100}
          springConfig={{ stiffness: 170, damping: 26 }}
        >
          {times(random(1, 10), (e) => (
            <div key={e}>
              <Card>default {e}</Card>
            </div>
          ))}
        </SpringGrid>
      )}
      {myLayout === "pinterest" && (
        <CSSGrid
          component="div"
          columns={5}
          columnWidth={100}
          gutterWidth={5}
          gutterHeight={5}
          layout={layout.pinterest}
          duration={800}
          easing="ease-out"
        >
          {times(random(10, 10), (e) => (
            <div key={e} itemHeight={random(140, 170)}>
              <Card>pinterest {e}</Card>
            </div>
          ))}
        </CSSGrid>
      )}
    </div>
  );
};

export default Pinterest;
