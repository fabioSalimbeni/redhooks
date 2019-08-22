import React from "react";
import { Heading, Text, List, ListItem, Appear } from "spectacle";

const Me = () => (
  <>
    <Heading size={4} lineHeight={3} textColor="secondary">
      Fabio Salimbeni
    </Heading>
    <Appear order={1}>
      <div>
        <Text>Lead Front End Developer @ Acuris</Text>
      </div>
    </Appear>
    <Appear order={2}>
      <div>
        <Heading size={3} lineHeight={3} caps>
          We're hiring!!!!
        </Heading>
      </div>
    </Appear>
  </>
);

export default Me;
