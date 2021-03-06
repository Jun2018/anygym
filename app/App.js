import React from "react";
import "react-native-gesture-handler";
import { ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import DrawerNavigator from "./components/cmn/DrawerNavigator";
import { NavigationContainer } from "@react-navigation/native";


export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <DrawerNavigator/>
      </NavigationContainer>
    </ApplicationProvider>
  );
}
