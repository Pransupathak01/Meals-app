import { StatusBar } from "expo-status-bar";
import { Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverViewScreen from "./screens/MealsOverViewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator 
        initialRouteName="MealsCategories"
        screenOptions={{
          headerStyle:{backgroundColor:'#00c04b'},
          headerTintColor:'white',
          contentStyle: {backgroundColor:'#abf7b1'}
        }}
        >
          <Stack.Screen 
          name="MealsCategories" 
          options = {{
            title: 'All Categories',
          }}
          component={CategoriesScreen}
          />
          <Stack.Screen 
          name="MealsOverView" 
          component={MealsOverViewScreen}
        //   options={{({route,navigation})=>{ //dynamic name in one screen
        //      const catId = route.params.categoryId;
        //     return{title: catId}
        //   }  }       
        // }
          />
          <Stack.Screen 
          name="MealDetails"           
          component={MealDetailsScreen}
          // options={{
          //   headerRight:()=>{
          //     return <Button color="white" title="Tap me!"/>
          //   }
          // }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
