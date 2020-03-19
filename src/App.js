import React from "react";
import TabNav from "./components/TabNav.jsx";
import Header from "./components/Header.jsx";
import MenuExampleTabularOnTop from "./components/Menu"
// Styles
import './index.css'


export default function App() {
  return (
    <main>
      <Header />
			<TabNav />
      {/* <MenuExampleTabularOnTop/> */}
    </main>
  );
}
