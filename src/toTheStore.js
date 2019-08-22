/* eslint import/no-webpack-loader-syntax: off */
import React from "react";
import { Heading, Text, CodePane } from "spectacle";

const ToTheStore = () => (
  <>
    <Heading size={4} textColor="secondary" lineHeight={2}>
      Dispatch
    </Heading>
    <div>
      <Text textAlign="left" textSize={28}>
        to the store:
      </Text>
      <CodePane
        theme="dark"
        source={require("!raw-loader!./code_examples/toTheStore.example")}
        lang="js"
      />
    </div>
    <div>
      <Text textAlign="left" textSize={28}>
        to the actionCreators:
      </Text>
      <CodePane
        theme="dark"
        source={require("!raw-loader!./code_examples/toTheActionCreators.example")}
        lang="js"
      />
    </div>
  </>
);

export default ToTheStore;
