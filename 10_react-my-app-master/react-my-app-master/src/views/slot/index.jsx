import React from "react";

import Main from "./main";
import Header from "./header";
import Layout from "./layout";

const SlotPage = () => {
  return (
    <Layout headerComponent={<Header />}>
        <Main>
        </Main>
    </Layout>
  );
};


export default SlotPage