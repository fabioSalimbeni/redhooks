/* eslint import/no-webpack-loader-syntax: off */
import React from "react";
import { Heading, CodePane, Text } from "spectacle";

const DispatchFromView = () => (
  <>
    <Heading size={4} textColor="secondary" lineHeight={2}>
      Dispatch
    </Heading>
    <div>
      <Text textAlign="left" textSize={28}>
        from the view:
      </Text>
      <CodePane
        theme="dark"
        source={require("!raw-loader!./code_examples/fromTheView.example")}
        lang="js"
      />
    </div>
  </>
);

export default DispatchFromView;
