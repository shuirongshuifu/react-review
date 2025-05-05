import React from "react";


export default function Layout({ children, headerComponent }) {
  console.log("Layout组件渲染了",children, headerComponent);
  return (
    <div>
      <header>
       组件:{headerComponent}
      </header>
      <main>main:{children}</main>
    </div>
  );
}