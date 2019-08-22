import React from "react";
import { Heading, Appear, List, ListItem } from "spectacle";

const ConclusionOne = () => (
  <>
    <Heading size={4} lineHeight={2} textColor="secondary">
      Conclusion
    </Heading>
    <Appear order={1}>
      <Heading size={6} lineHeight={1} textColor="secondary">
        Pro
      </Heading>
    </Appear>
    <List>
      <Appear order={2}>
        <ListItem textColor="black" textSize={28} margin="20px 0">
          Easier to write components because they are now all function and not
          classes
        </ListItem>
      </Appear>
      <Appear order={3}>
        <ListItem textColor="black" textSize={28} margin="20px 0">
          Simplified the testing of components and features
        </ListItem>
      </Appear>
      <Appear order={4}>
        <ListItem textColor="black" textSize={28} margin="20px 0">
          Use of (at the time) brand new technology
        </ListItem>
      </Appear>
      <Appear order={5}>
        <ListItem textColor="black" textSize={28} margin="20px 0">
          Learnt how to useMemo hook and to implement better the useEffect hook
          to resolve the performance issues
        </ListItem>
      </Appear>
      <Appear order={6}>
        <ListItem textColor="black" textSize={28} margin="20px 0">
          The use of renderProps in combination with React.Context allowed us to
          stop passing props from the very top component all the way down to the
          tiny presentational component that actually needed it.
        </ListItem>
      </Appear>
    </List>
  </>
);

const ConclusionTwo = () => (
  <>
    <Heading size={4} lineHeight={2} textColor="secondary">
      Conclusion
    </Heading>
    <Appear order={1}>
      <Heading size={6} lineHeight={1} textColor="secondary">
        Cons
      </Heading>
    </Appear>
    <List>
      <Appear order={2}>
        <ListItem textColor="black" textSize={28} margin="20px 0">
          Testing got initially read since we had to use the act function of
          react-test-utils to wrap out test interaction
        </ListItem>
      </Appear>
      <Appear order={3}>
        <ListItem textColor="black" textSize={28} margin="20px 0">
          Testing of the store requires mocking the calls to the actionCreators;
        </ListItem>
      </Appear>
      <Appear order={4}>
        <ListItem textColor="black" textSize={28} margin="20px 0">
          At the end of the refactoring, the application became too slow and we
          found a lot of performance issues.
        </ListItem>
      </Appear>
    </List>
  </>
);

const ConclusionThree = () => (
  <>
    <Heading size={4} lineHeight={2} textColor="secondary">
      Conclusion
    </Heading>
    <Appear order={1}>
      <Heading size={6} lineHeight={1} textColor="secondary">
        Point of discussion
      </Heading>
    </Appear>
    <List>
      <Appear order={2}>
        <ListItem textColor="black" textSize={28} margin="20px 0">
          Store functions aren't pure and even if this isn't causing any
          performance issues or any data synchronization issues.
        </ListItem>
      </Appear>
    </List>
  </>
);

export { ConclusionOne, ConclusionTwo, ConclusionThree };
