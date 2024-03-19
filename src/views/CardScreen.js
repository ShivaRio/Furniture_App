import React, { useState } from 'react';
import {ImageBackground, FlatList, Pressable, Image, Dimensions, SafeAreaView,   View,  Text,  StyleSheet,  ScrollView,TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import COLOR from '../const/colour';
import FURNITURE from '../const/furnitures';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const {width} = Dimensions.get('screen');
import { useRoute } from '@react-navigation/native';


const DetailsScreen = ({navigation, route}) => {
 
  
  const furniture = route.params;

 

  

console.log(furniture)
    
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };


  


  
  return (

<SafeAreaView style={{ backgroundColor: COLOR.yellow, flex: 1 }}>
      <View style={styles.header}>
        <Icon name="sort-variant" size={28} color={COLOR.primary} />
        <Avatar size={33} rounded source={require('../Assets/siva.jpg')} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <ImageBackground resizeMode="cover" style={styles.backgroundImage} source={furniture.image} /> */}
         
        

        <View style={styles.detailsContainer}>
          {/* <Text style={{ fontSize: 20, fontWeight: 'bold', color: COLOR.primary }}>{furniture.name}</Text> */}
          <Text style={{ marginVertical: 20, fontWeight: 'bold', fontSize: 16, color: COLOR.primary }}>Description</Text>
          {/* <Text style={{ color: COLOR.dark, fontSize: 12, lineHeight: 20 }}>{furniture.description}</Text> */}

          <View style={{ marginVertical: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
            {/* <Text style={{ color: COLOR.red, fontSize: 22, fontWeight: 'bold', marginLeft: -2, marginHorizontal: 20 }}>{furniture.price}</Text> */}
          </View>

          <View style={styles.quantityContainer}>
            <TouchableOpacity style={styles.quantityBtn} onPress={increaseQuantity}>
              <Icon name="plus" size={20} color={COLOR.dark} />
            </TouchableOpacity>
            <Text style={{ color: COLOR.white, fontWeight: 'bold' }}>{quantity}</Text>
            <TouchableOpacity style={styles.quantityBtn} onPress={decreaseQuantity}>
              <Icon name="minus" size={20} color={COLOR.dark} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
      

);
};

const styles = StyleSheet.create({
  backgroundImage: {
    marginHorizontal: 20,
    height: 300,
    borderRadius: 15,
    overflow: 'hidden',
  },
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  detailsContainer: { flex: 1, paddingHorizontal: 20, marginTop: 40 },
  quantityBtn: {
    height: 25,
    width: 25,
    backgroundColor: COLOR.white,
    borderRadius: 7,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityContainer: {
    height: 35,
    width: 100,
    backgroundColor: COLOR.primary,
    borderRadius: 7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 25,
  },
});

export default DetailsScreen;
