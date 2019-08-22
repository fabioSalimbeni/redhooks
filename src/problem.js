import React from "react";
import { Heading, ListItem, List, Appear } from "spectacle";

const Problem = () => (
  <>
    <Heading size={3} textColor="secondary" lineHeight={3}>
      Our problem
    </Heading>
    <List>
      <Appear order={1}>
        <ListItem>Application grew up a lot in a short time</ListItem>
      </Appear>
      <Appear order={2}>
        <ListItem>Files became huge in number of lines</ListItem>
      </Appear>
      <Appear order={3}>
        <ListItem>Properties wrapper hell</ListItem>
      </Appear>
    </List>
  </>
);

export default Problem;
