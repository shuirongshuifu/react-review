import React from "react";


export default function Layout({ children, headerComponent }) {
  return (
    <div>
      <header>
       {headerComponent}
      </header>
      <main>{children}</main>
    </div>
  );
}