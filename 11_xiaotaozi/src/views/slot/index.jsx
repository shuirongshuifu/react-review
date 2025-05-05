import React from "react";

import Main from "./main";
import Header from "./header";
import Layout from "./layout";

const SlotPage = () => {
  return (
    // 这里是2种“插槽”写法的对比
    <Layout headerComponent={<Header />}>
        <Main>
        </Main>
    </Layout>
  );
};


export default SlotPage