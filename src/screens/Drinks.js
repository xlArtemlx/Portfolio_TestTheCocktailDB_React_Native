import React, {useContext} from 'react';
import {View,Image, StyleSheet,Text,FlatList} from 'react-native';
import {Context} from '../services/context';




export const Drinks = () => {

  const drinksContext = useContext(Context);
  const roster = drinksContext.drinks;

  const renderFooter = () => {

    return (
      <View
        style={{
          paddingVertical: '5%',
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
      </View>
    );
  };


  const renderFlatList = () => {

    return roster.map((category, index) => {
      return (
        <View key={index}>

          <Text style={styles.category} key={index}>
            {category.url}
          </Text>

          <FlatList
            data={category.drinks}
            keyExtractor={i => i.idDrink}
            renderItem={({item}) => (

              <View style={styles.cocktails} key={index}>
                <Image
                  style={styles.image}
                  source={
                    {uri: item.strDrinkThumb}
                  }
                />

                <Text style={styles.text}>{item.strDrink}</Text>
              </View>

            )}
            ListFooterComponent={renderFooter}
          />
          
       
         

        </View>
        
      );
    });
  };


  return (
    <>
      { renderFlatList() }
    </>
  );


};




const styles = StyleSheet.create({

  category: {
    margin: 10,
    color: 'grey',
  },

  cocktails: {
    flexDirection: 'row',
    padding: 10,
  },

  image: {
    height: 100,
    width: 100,
  },

  text: {
    margin: 20,
    alignSelf: 'center',
    color: 'grey'
  },
});
