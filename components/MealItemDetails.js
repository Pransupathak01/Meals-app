import {View, Text, Image, StyleSheet,Platform } from 'react-native';
const  MealItemDetails = ({title, imageUrl, duration, complexity, affordability, }) =>{
    return(
        <>           
                <View style={styles.imageContainer}>
                    <Image source={{uri: imageUrl}} style={styles.image}/>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <View style={styles.details}>
                    <Text style={styles.detailItem}>{duration}m</Text>
                    <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
                    <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
                 
                </View>
            
        </>
    )
}
export default MealItemDetails;

const styles = StyleSheet.create({

    image:{
        width:'100%',
        height: Platform.select({
            ios: 250, 
            android: 250,
             web: 500,
          }),
       
    },
    title:{
        fontWeight:'bold',
        textAlign: 'center',
        fontSize: 24,
        margin:8,

    },
    details:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        padding:8,
        textAlign:'center'
    },
    detailItem:{
        marginHorizontal: 4,
        fontSize: 13,
        fontWeight:'800',
    },

    
});