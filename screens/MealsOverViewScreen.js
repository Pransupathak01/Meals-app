import { View,Text, FlatList, StyleSheet } from "react-native";
import { useEffect,useLayoutEffect } from "react";
import { MEALS,CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useRoute } from "@react-navigation/native";
const MealsOverViewScreen = ({route,navigation}) =>{
    // const routes = useRoute() we can use hook instead og {route} prop
    // const catid = routes.params.categoryId;
    const catId = route.params.categoryId;
    const displayedMeals = MEALS.filter((mealItem)=>{
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });

    useLayoutEffect(()=>{
        const categoryTitle = CATEGORIES.find((category)=>category.id === catId).title;
        navigation.setOptions({
            title: categoryTitle
        });
    },[]);

    const renderMealItem = (itemData) =>{
        const PressHandler = () =>{
            navigation.navigate('MealDetails',{
                mealId:itemData.item.id
            });   
        }
        const mealItemProps = {
            title:itemData.item.title ,
            imageUrl:itemData.item.imageUrl,
            duration:itemData.item.duration,
            affordability:itemData.item.affordability,
            complexity:itemData.item.complexity,
            

        }
        return<MealItem {...mealItemProps}    onPress={PressHandler} />
    }

    return(
       <View style={styles.container}>
           <FlatList 
           data={displayedMeals} 
           keyExtractor={(item)=>item.id}
           renderItem={renderMealItem}
           />
           {/* <Text>Meals Overview Screen -{catId}</Text> */}
       </View>
    )

}
export default MealsOverViewScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10
    }
})