import { View, Text, FlatList,ScrollView,Button, StyleSheet, Pressable } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItemDetails from "../components/MealItemDetails";
import { useLayoutEffect } from "react";
import {Ionicons} from '@expo/vector-icons';


const MealDetailsScreen = ({ route,navigation }) => {
  const mealid = route.params.mealId;

  const selectedMeal = MEALS.find((mealItem) => mealItem.id === mealid);
  
  const headerButtonHandler= () =>{
    console.log('Pressed')
  }
  useLayoutEffect(()=>{
    navigation.setOptions({
        headerRight:()=>{
                 return <>
                    <Pressable>
                        <Ionicons name="star" color="white" size={24}
                        onPress={headerButtonHandler}
                        />
                    </Pressable>
                 </>             
               }
    })
  },[navigation, headerButtonHandler])
  return (
    <ScrollView style={styles.container}>
      <MealItemDetails
        imageUrl={selectedMeal.imageUrl}
        title={selectedMeal.title}
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
      />
      <View style={styles.subContainer}>
        <Text style={styles.subtitle}>Ingredients</Text>
      </View>  
      <View style={styles.mapedContainer}>   
      {selectedMeal.ingredients.map((ingredient) => (
        
        <Text style={styles.mapedText} key={ingredient}>{ingredient}</Text>
        
      ))}
      </View>
      
      <View style={styles.subContainer}>
        <Text style={styles.subtitle}>Steps</Text>
      </View>
      <View style={styles.mapedContainer}> 
      {selectedMeal.steps.map((step) => (
        <Text style={styles.mapedText} key={step}>{step}</Text>
      ))}
      </View>
    </ScrollView>
  );
};
export default MealDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subtitle: {
    fontSize: 20,
    color:"#00c04b",
    fontWeight: "800",
    textAlign: "center",
    borderBottomColor: "white",
    borderBottomWidth: 2,
  },
  subContainer: {
    padding: 4,
    marginHorizontal: 28,
    borderBottomColor: "#1fd655",
    borderBottomWidth: 2,

  },
  mapedContainer:{
    marginVertical:6

  },
  mapedText:{
    marginHorizontal:28,
    backgroundColor:"#1fd655",
    fontSize:18,
    margin:2,
    padding:4,
    textAlign:'center',
    borderRadius: 8,

  }
});
