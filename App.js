import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreens from "./src/screens/HomeScreens";
import ProductScreens from "./src/screens/ProductScreens";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreens} />
        <Stack.Screen name="Details" component={ProductScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
