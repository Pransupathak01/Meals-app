import { CATEGORIES } from "../data/dummy-data"
import { FlatList,Text } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = ({navigation})=>{
    const renderCategoryItem = ({item}) =>{
        const PressHandler = () =>{
            navigation.navigate('MealsOverView',{
                categoryId:item.id
            });   
        }
        return(
            <CategoryGridTile 
            title={item.title} 
            color={item.color} 
            onPress={PressHandler}
            />
        )    
    } 
    return(
        <FlatList 
        data={CATEGORIES} 
        keyExtractor={(item)=>item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
        />
    )
}
export default CategoriesScreen;