import React, {useState} from 'react';
import {Text, StyleSheet, View, SafeAreaView, TextInput, FlatList, Dimensions, Image, Pressable, ScrollView,  TouchableOpacity,} from 'react-native';
import COLOR from '../const/colour';
import { Avatar } from 'react-native-elements';
import FURNITURE from '../const/furnitures';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const {width} = Dimensions.get('screen');



const HomeScreen = ({navigation}) => {

  const [search,setSearch] = useState()
 
  const categoryItems = [
    {name: 'All', iconName: 'seat-outline'},
    {name: 'Sofa', iconName: 'seat-outline'},
    {name: 'Table', iconName: 'table-furniture'},
    {name: 'Cupboard', iconName: 'cupboard-outline'},
    {name: 'bed', iconName: 'bed-queen-outline'},
  ];

  const ListCategories = () =>{
    const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState();
    
      return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20 }}>
        <View style={style.categoriesContainer}>
          {categoryItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              activeOpacity={0.8}
              onPress={() => {
                setSelectedCategoryIndex(index);
                
                if(item.name == "All"){
                  setSearch('')
                }else{
                  setSearch(item.name)
                }
              }}>
              <View style={[style.categoryItemBtn, {backgroundColor: selectedCategoryIndex == index ? COLOR.dark  : COLOR.light,  },
                ]}>
                <Icon name={item.iconName} size={20} color={ selectedCategoryIndex == index ? COLOR.white : COLOR.dark } />
                <Text style={[ style.categoryText, { color:  selectedCategoryIndex == index   ? COLOR.white  : COLOR.dark, }, ]}> {item.name} </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        </ScrollView>
      );
    };

    const serachterm = new RegExp(search,'gi')
    const filterdata = FURNITURE.filter((data)=>{
      return serachterm.test(data.type)
    })
  
    const Card = ({furniture}) => {
      return (
        <Pressable onPress={() => navigation.navigate('DetailsScreen', furniture)}>
          <View style={style.card}>
            
          <View style={style.iconContainer}>
            <Icon name="heart" color={furniture.liked ? COLOR.red : COLOR.primary} />
          </View>
            <Image source={furniture.image} style={{marginTop:50,height: 130, width: '100%', borderRadius: 10}} />
  
            <Text style={style.cardName}>{furniture.name}</Text>
            <View style={{marginTop: 5, flexDirection: 'row', justifyContent: 'space-between',}}>
              <Text style={style.price}>{furniture.price}</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon name="star" color={COLOR.yellow} size={18} />
                <Text style={style.rating}>{furniture.rate}</Text>
              </View>
            </View>
          </View>
        </Pressable>
      );
    };
  


    const PopularItemCard = ({furniture}) => {
      return (
        <View style={style.popularItemCard}>
          <View style={style.iconContainer}>
            <Icon name="heart" color={furniture.liked ? COLOR.red : COLOR.primary}
            />
          </View>
          <Image
            source={furniture.image}
            style={{
              width: 150,
              height: '100%',
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
              marginRight: 10,
            }}
          />
          <View style={{paddingVertical: 15,  justifyContent: 'center'}}>
            <Text style={style.cardName}>{furniture.name}</Text>
            <View style={{flexDirection: 'row', marginTop: 20}}>
              <Text style={style.price}>{furniture.price}</Text>
              <View style={{flexDirection: 'row', marginLeft: 10}}>
                <Icon name="star" color={COLOR.yellow} size={18} />
                <Text style={style.rating}>{furniture.rate}</Text>
              </View>
            </View>
          </View>
        </View>
      );
    };
    

  

  
  return (
    <SafeAreaView style={{backgroundColor: COLOR.yellow, flex: 1}}>
    <View style={style.header}>
    <Icon name="sort-variant" size={28} color={COLOR.primary} />
    <Icon name="cart-outline" size={28} color={COLOR.primary} />
    </View>

      <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={style.headerTitle}>Best Furniture For Your Home.</Text>

      <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 20,}}>

      <View style={style.searchInputContainer}>
            <Icon name="magnify" color={COLOR.grey} size={25} />
            <TextInput  placeholder="Search" placeholderTextColor={COLOR.dark}  />
          </View>

          <View style={style.sortBtn}>
            <Icon name="tune" color={COLOR.white} size={25} />
          </View>
          </View>


        <Text style={style.categoryTitle}>Categories</Text>
         <ListCategories />
          
        <Text style={style.categoryTitle}>Top Furniture</Text>

          <FlatList
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingLeft: 20}}
          data={filterdata}
          horizontal
          renderItem={({item}) => <Card furniture={item} />}
        />

<Text style={style.categoryTitle}>Popular</Text>


        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingLeft: 20}}
          data={FURNITURE}
          renderItem={({item}) => <PopularItemCard furniture={item} />}
        />

      </ScrollView>
      </SafeAreaView>
  );
};

const style = StyleSheet.create({

  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 23,
    fontWeight: 'bold',
    width: '55%',
    lineHeight: 30,
    paddingHorizontal: 20,
    color: COLOR.dark,
  },
  
  searchInputContainer: {
    height: 50,
    backgroundColor: COLOR.light,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  sortBtn: {
    backgroundColor: COLOR.primary,
    height: 50,
    width: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },

  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    width: '55%',
    lineHeight: 30,
    paddingHorizontal: 20,
    color: COLOR.dark,


  },

  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  categoryItemBtn: {
    flexDirection: 'row',
    backgroundColor: COLOR.light,
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 7,
    marginRight:5,
    marginLeft:-4.2,
    alignItems: 'center',
    justifyContent:'space-between'
  },
  categoryText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: COLOR.primary,
    
  },
  card: {
    height: 290,
    backgroundColor: COLOR.white,
    elevation: 10,
    width: width / 2.5,
    marginRight: 20,
    padding: 10,
    marginVertical: 20,
    borderRadius: 10,
  },
  cardName: {
    marginTop: 30,
    fontSize: 12,
    color: COLOR.primary,
    fontWeight: 'bold',
  },
  price: {fontWeight: 'bold', color: COLOR.primary, fontSize: 12},
  rating: {
    fontWeight: 'bold',
    color: COLOR.primary,
    fontSize: 12,
  },
  title: {fontSize: 18, fontWeight: 'bold', paddingHorizontal: 20},
  iconContainer: {
    height: 25,
    width: 25,
    backgroundColor: COLOR.white,
    position: 'absolute',
    elevation: 2,
    right: 15,
    top: 15,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  popularItemCard: {
    height: 160,
    width: width - 80,
    backgroundColor: COLOR.white,
    elevation: 10,
    marginVertical: 20,
    marginRight: 20,
    borderRadius: 10,
    flexDirection: 'row',
  },


});

export default HomeScreen;