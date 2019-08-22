/* eslint import/no-webpack-loader-syntax: off */
import React from "react";
import { Heading, CodePane } from "spectacle";

const Store = () => (
  <>
    <Heading size={3} textColor="secondary" lineHeight={3}>
      Adding the store
    </Heading>
    <CodePane
      theme="dark"
      source={require("!raw-loader!./code_examples/store.example")}
      lang="js"
    />
  </>
);

export default Store;
