import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";

// Main components of the app
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';
import LocationList from './components/LocationsList';

// Styles
import './index.css'


export default function App() {
  return (
    <main>
      <Header />
			{/* <TabNav /> */}

			{/* '/' Route */}
			{/* <WelcomePage /> */}

			{/* Characters View */}
			{/* <CharacterList /> */}

			{/* Location View */}
			<LocationList />


    </main>
  );
}
