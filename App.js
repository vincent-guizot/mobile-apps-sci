// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./src/navigation/RootStack";

// Root component
function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

export default App;
