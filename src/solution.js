import React from "react";
import { Heading, Appear } from "spectacle";
const Solution = () => (
  <>
    <Heading size={3} textColor="secondary" lineHeight={3}>
      Our solution
    </Heading>
    <Appear order={1}>
      <Heading size={3} textColor="quaternary">
        Redux???{" "}
        <Appear order={2}>
          <span>No</span>
        </Appear>
      </Heading>
    </Appear>
    <Appear order={3}>
      <Heading size={3} textColor="quaternary" lineHeight={3}>
        React Hooks???{" "}
        <Appear order={4}>
          <span>Yes</span>
        </Appear>
      </Heading>
    </Appear>
  </>
);

export default Solution;
