import React, { useState, useEffect } from 'react';
import {ImageBackground,  SafeAreaView,  View,  Text,  StyleSheet,  ScrollView,TouchableOpacity, Alert } from 'react-native';

import COLOR from '../const/colour';
import FURNITURE from '../const/furnitures';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';




const DetailsScreen = ({navigation, route}) => {
 
  const [cartCount, setCartCount] = useState(0);
  const [card, setCard] = useState('')
 
  
  const [liked, setLiked] = useState(false);
  const furniture = route.params;

  const handlePress = () => {
    setLiked(!liked);
  };


  const addToCart = () => {
    setCartCount(cartCount + 1);
    
    Alert.alert('Cart Added Successfully');
  };


  const addToyard = ({navigate}) => {
       
    navigation.navigate('CardScreen')
  };

  

  return (

<SafeAreaView style={{flex: 1, backgroundColor: COLOR.yellow}}>


<View style={style.header}>
        <View style={style.headerBtn}>
          <Icon name="chevron-left" size={25} color={COLOR.primary} onPress={navigation.goBack} />
        </View>
        <Text style={{fontWeight: 'bold', fontSize: 18, color:COLOR.dark }}>Details</Text>
        
        <View style={style.headerBtn}> 
        <TouchableOpacity  activeOpacity={0.8} onPress={addToyard}>
        <Icon name="cart-outline" size={28} color={COLOR.primary} /> 
        
        {cartCount > 0 && (
            <View style={style.cartBadge}>
              <Text style={{ color: 'white', fontWeight: 'bold' }}>{cartCount}</Text>
            </View>
           
          )}
          </TouchableOpacity>
           </View>
           
       
      </View>



      <ScrollView showsVerticalScrollIndicator={false}>
   
      <ImageBackground resizeMode="cover" style={style.backgroundImage} source={furniture.image}>

      <View style={{height: 70,  width: 80,  backgroundColor: COLOR.primary,  position: 'absolute',  borderTopLeftRadius: 15, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center', }}>

      <View style={{flexDirection: 'row',  alignItems: 'center', marginBottom: 5,}}>
              <Icon name="star" color={COLOR.yellow} size={18} />
              <Text  style={{fontSize: 10, color: COLOR.white,  fontWeight: 'bold',  }}>{furniture.rate}</Text>
            </View>
            <Text  style={{fontSize: 9, color: COLOR.white, fontWeight: 'bold'}}>250 Reviews</Text>
            </View>
            </ImageBackground>


            <View style={style.detailsContainer}>
            <Text  style={{fontSize: 20, fontWeight: 'bold', color: COLOR.primary}}>{furniture.name}
          </Text>
          <Text  style={{ marginVertical: 20,   fontWeight: 'bold',  fontSize: 16,    color: COLOR.primary }}> Description </Text>

          <Text style={{color: COLOR.dark, fontSize: 12, lineHeight: 20}}>Designed modern chair with luxury curves in an organic yet structured design that holds the sitting body and provides a feeling of relaxation while offering excellent back support.</Text>
            

            <View  style={{ marginVertical: 20,  flexDirection: 'row',  justifyContent: 'space-between'}}>

            <Text  style={{color: COLOR.red, fontSize: 22, fontWeight: 'bold', marginLeft:-2, marginHorizontal:20,}}>{furniture.price}</Text>           

            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity onPress={handlePress}>
      <View
        style={{
          height: 50,
          width: 50,
          elevation: 7,
          marginRight: 30,
          borderRadius: 25,
          backgroundColor: liked ? COLOR.primary : COLOR.dark,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Icon name={liked ? "heart" : "heart-outline"} size={28} color={liked ? COLOR.red : COLOR.white} />
      </View>
    </TouchableOpacity>
            
            
            <TouchableOpacity style={style.addToCartBtn} onPress={addToCart}>
        <Text style={{ color: 'white' }}>Add To Cart</Text>
      </TouchableOpacity>
           
          </View>

          </View>
      </ScrollView>


      </SafeAreaView>

);
};

const style = StyleSheet.create({
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
  headerBtn: {
    height: 50,
    width: 50,
    backgroundColor: COLOR.light,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ratingTag: {
    height: 30,
    width: 35,
    backgroundColor: COLOR.blue,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addToCartBtn: {
    height: 50,
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.primary,
    width:'55%',
    borderRadius: 10,
    paddingHorizontal: 20,
    marginVertical: 20,
    flexDirection: 'row',
  },
  detailsContainer: {flex: 1, paddingHorizontal: 20, marginTop: 40},
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
    marginHorizontal:25,
  },

  cartBadge: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'red', 
    borderRadius: 10,
    paddingVertical: 2,
    paddingHorizontal: 5,
  },
});

export default DetailsScreen;
