
import React, {useEffect,useContext } from 'react';
import {StyleSheet,TouchableHighlight,View,ScrollView,Text} from 'react-native';

import {Context} from '../services/context';
import {CheckBoxs} from '../Form/Check';
import { useNavigation } from '@react-navigation/native';


export const Filters = () => {
  const navigation = useNavigation();

  const DrinksContext = useContext(Context);


  const apply = () => {
    DrinksContext.getCocktails(DrinksContext.checkIt);
    navigation.navigate('Drinks')
  };

  useEffect(() => {
    DrinksContext.getStrCategory();

  }, [DrinksContext]);

  return (

      <View style={styles.container}>
        
        <ScrollView>
          {DrinksContext.strCategory.map((mass, i) => {

            const key = Object.keys(mass);

            return (
            <CheckBoxs selectedCategory={mass[key]} key={i} />
            )
          })}
        </ScrollView>

        <TouchableHighlight
          style={styles.apply}
          onPress={() => apply()}>

          <Text style={styles.textApply}>APPLY</Text>
        </TouchableHighlight>

      </View>

  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'

  },
  apply: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: '5%',
    width: '85%',
    left: '10%',
    height: '7%',
    backgroundColor: 'rgba(26, 25, 25, 1)',
  },
  textApply: {
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 1)'
  }

});




 
